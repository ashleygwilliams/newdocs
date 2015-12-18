const fs = require('fs');
const path = require('path');
const markdown = require('markdown').markdown;
const mansplain = require('mansplain');

var build_path = function(opts) {
  var version = opts.version;
  var page = opts.page;
  var guide = opts.guide;
    
  return path.join(__dirname, '..', 'data', version, guide, page + '.md');
};

var load = function(opts) {
  var path = build_path(opts);
  var doc = fs.readFileSync(path, 'utf-8');
  var md = markdown.toHTML(doc);
  var prefix_hash = { 1: 'cli', 5: 'files', 7: 'misc'};
  return mansplain({ input: md, prefix: prefix_hash });
};

module.exports = {
  load: load
};
