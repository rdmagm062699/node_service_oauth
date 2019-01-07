const tenantName = process.env.DEMO_TENANT_NAME;
const clientId = process.env.DEMO_CLIENT_ID;
const serverPort = process.env.DEMO_PORT;

module.exports.serverPort = serverPort;

module.exports.options = {
    identityMetadata: `https://login.microsoftonline.com/${tenantName}.onmicrosoft.com/.well-known/openid-configuration`, 
    clientID: clientId,
    loggingLevel: 'info',
    loggingNoPII: false,
    audience: 'http://node-aad-demo'
  };
