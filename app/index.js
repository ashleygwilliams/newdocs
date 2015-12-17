const markdown = require('markdown').markdown;

const page = require('./lib/page');
const guide = require('./lib/guide');

const express = require('express');
const app = express();

app.use(express.static('public'));

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

app.get('/:guide/:page', function(req, res){
  try {
    var page_info = {
      guide: req.params.guide,
      page: req.params.page
    };
    var data = page.load(page_info);
  } catch(e) {
    console.log(e);
  }
  res.render('page', { data: data });
});

app.get('/:guide', function(req, res){
  try {
    var guide_info = {
      guide: req.params.guide
    };
    var data = guide.get_pages(guide_info);
  } catch(e) {
    console.log(e);
  }
  res.render('guide', { name: req.params.guide, data: data });
});

app.get('/', function(req, res){
  res.send('hello new docs');
});

module.exports = app;
