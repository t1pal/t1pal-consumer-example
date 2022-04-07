
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , http = require('http')
  , path = require('path')
  , bodyParser = require('body-parser')
  , favicon = require('serve-favicon')
  , logger = require('morgan')
  , config = require('./env')
  , passport = require('passport')
  , session = require('express-session')
  ;

var app = express();

app.set('port', config.port);
app.set('views', config.express.views_path);
app.set('view engine', 'pug');
app.use(favicon(config.express.favicon));
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('query parser', 'extended');
app.use(require('stylus').middleware(config.express.stylus_path));
app.use(express.static(config.express.static_path));


var session_config = {
  secret: config.express.session_secret,
  resave: false,
  saveUnitialized: true,
  cookie: { }
};

if (app.get('env') == 'development') {
	app.locals.pretty = true;
}

app.locals.software = config.software;

if (app.get('env') == 'production') {
  app.set('trust proxy', 1);
  session_config.cookie.secure == true;
}

app.use(session(session_config));


app.get('/', routes.index);

app.get('/dashboard', routes.index);
app.get('/auth/connect', routes.index);
app.get('/auth/logout', routes.index);
app.get('/auth/connect/t1pal', routes.index);
app.get('/api/sites', routes.index);
app.get('/api/sites/:site_name', routes.index);
app.get('/api/sites/:site_name/views', routes.index);
app.get('/api/sites/:site_name/views/:view_name', routes.index);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
