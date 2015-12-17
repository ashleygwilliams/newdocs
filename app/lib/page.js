const fs = require('fs');
const path = require('path');
const markdown = require('markdown').markdown;

var build_path = function(opts) {
  var version = opts.version;
  var page = opts.page;
  var guide = opts.guide;

  return path.join(__dirname, '..', 'data', version, guide, page + '.md');
};

var load = function(opts) {
  var path = build_path(opts);
  var doc = fs.readFileSync(path, 'utf-8');
  return markdown.toHTML(doc);
};

module.exports = {
  load: load
};
