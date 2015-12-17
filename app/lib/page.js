const fs = require('fs');
const path = require('path');
const markdown = require('markdown').markdown;

var build_path = function(opts) {
  var page = opts.page;
  var section = opts.section;

  return path.join(__dirname, '..', 'data', section, page + '.md');
};

var load = function(opts) {
  var path = build_path(opts);
  var doc = fs.readFileSync(path, 'utf-8');
  return markdown.toHTML(doc);
};

module.exports = {
  load: load
};
