const fs = require('fs');
const path = require('path');

var build_path = function(opts) {
  var guide = opts.guide;
  
  return path.join(__dirname, '..', 'data', guide);
};

var get_pages = function(opts) {
  var path = build_path(opts);
  return fs.readdirSync(path);
};

module.exports = {
  get_pages: get_pages
};
