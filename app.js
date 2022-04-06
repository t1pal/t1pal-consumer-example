
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

if (app.get('env') == 'development') {
	app.locals.pretty = true;
}
app.locals.software = config.software;

app.get('/', routes.index);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
