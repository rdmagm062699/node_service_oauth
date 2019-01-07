const restify = require('restify');
const restifyPlugins = require('restify-plugins');
const config = require('./config');
const passport = require('passport');
const BearerStrategy = require('passport-azure-ad').BearerStrategy;

const authenticatedUserTokens = [];

const authenticationStrategy = new BearerStrategy(config.options, (token, done) => {
    return done(null, token);
});

passport.use(authenticationStrategy);

const server = restify.createServer({ name: 'Azure Active Directroy with Node.js Demo' });
server.use(restifyPlugins.authorizationParser());
server.use(passport.initialize());
server.use(passport.session());

server.get('/demo', passport.authenticate('oauth-bearer', { session: false }), (req, res, next) => {
    const responseData = [
        {
            id: 1,
            message: "First item from demo endpoint"
        },
        {
            id: 2,
            message: "Second item from demo endpoint"
        }
    ]
    res.send(200, responseData);
    return next();
})

server.listen(config.serverPort);
console.log(`Server listenting on port ${config.serverPort}`);
