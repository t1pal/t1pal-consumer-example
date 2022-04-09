
var path = require('path');

var config = {
  port: parseInt(process.env.PORT || '4944'),
  express: { 
    views_path: process.env.EXPRESS_VIEWS_PATH || path.join(__dirname, 'views'),
    static_path: process.env.EXPRESS_STATIC_PATH || path.join(__dirname, 'public'),
    stylus_path: process.env.EXPRESS_STYLUS_PATH || path.join(__dirname, 'public'),
    session_secret: process.env.EXPRESS_SESSION_SECRET || 'change this'
  },
  software: {
    name: process.env.SOFTWARE_NAME || 'Program Name',
    salutation: process.env.SOFTWARE_SALUTATION || 'Hello World.',
    author: process.env.SOFTWARE_AUTHOR || 'Author',
  },
  oauth: {
    resources: process.env.OAUTH_RESOURCES || 'http://169.254.1.1:3010/', // 'https://t1pal.host/',
    base_url: process.env.OAUTH_BASE_URL || 'http://169.254.1.1:4944',
    auth_url: process.env.OAUTH_AUTH_URL || 'http://127.0.0.1:4455/oauth2/auth',
    token_url: process.env.OAUTH_TOKEN_URL || process.env.OAUTH_AUTH_URL || 'http://127.0.0.1:4455/oauth2/token',
    client_id: process.env.OAUTH_CLIENT_ID,
    client_secret: process.env.OAUTH_CLIENT_SECRET,
  }

};
config.express.favicon = process.env.EXPRESS_FAVICON || path.join(config.express.static_path, 'images/favicon.png');


module.exports = exports = config;
