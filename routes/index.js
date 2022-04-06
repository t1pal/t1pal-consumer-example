exports.index = function(req, res){
  res.locals.show_debug = req.query.debug == '1';
  res.render('index', req.query);
};
