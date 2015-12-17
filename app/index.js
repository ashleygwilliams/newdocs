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
    console.log(e);
  }
  res.render('page', { data: data });
});

app.get('/:version/:guide', function(req, res){
  try {
    var guide_info = {
      version: req.params.version,
      guide: req.params.guide
    };
    var data = guide.get_pages(guide_info);
  } catch(e) {
    console.log(e);
  }
  res.render('guide', { name: req.params.guide, data: data });
});

app.get('/:version', function(req, res){
  try {
    var version_info = {
      version: req.params.version
    };
    var data = index.get_guides(version_info);
  } catch(e) {
    console.log(e);
  }
  res.render('index', { data: data });
});

app.get('/', function(req, res) {
  res.redirect('/3.0.0');
});

module.exports = app;
