
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
  }

};
config.express.favicon = process.env.EXPRESS_FAVICON || path.join(config.express.static_path, 'images/favicon.png');


module.exports = exports = config;
