
const express = require('express');
const refresh = require('passport-oauth2-refresh');
const passport = require('passport');
const OAUth2Strategy = require('passport-oauth2');

function index (req, res){
  res.locals.show_debug = req.query.debug == '1';
  res.render('index', req.query);
}

function defaultRoutes (app, config) {

  const router = express.Router( );
  router.get('/auth/connect', index);
  router.get('/auth/logout', index);
  router.get('/auth/connect/t1pal', index);
  router.get('/dashboard', index);
  router.get('/api/sites', index);
  router.get('/api/sites/:site_name', index);
  router.get('/api/sites/:site_name/views', index);
  router.get('/api/sites/:site_name/views/:view_name', index);

  return router;


}

module.exports = exports = defaultRoutes;

exports.index = index;
