const markdown = require('markdown').markdown;

const page = require('./lib/page');
const guide = require('./lib/guide');
const index = require('./lib/index');

const express = require('express');
const app = express();

app.use(express.static('public'));

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

app.get('/:version/:guide/:page', function(req, res){
  try {
    var page_info = {
      version: req.params.version,
      guide: req.params.guide,
      page: req.params.page
    };
    var data = page.load(page_info);
  } catch(e) {
    res.render('404');
  }
  res.render('page', { page_info: page_info, data: data });
});

app.get('/:version/:guide', function(req, res){
  try {
    var guide_info = {
      version: req.params.version,
      guide: req.params.guide
    };
    var data = guide.get_pages(guide_info);
  } catch(e) {
    res.render('404');
  }
  res.render('guide', { guide_info: guide_info, data: data });
});

app.get('/:version', function(req, res){
  try {
    var version_info = {
      version: req.params.version
    };
    var data = index.get_guides(version_info);
  } catch(e) {
    res.render('404');
  }
  res.render('index', { version_info: version_info, data: data });
});

app.get('/', function(req, res) {
  res.redirect('/3.0.0');
});

module.exports = app;
