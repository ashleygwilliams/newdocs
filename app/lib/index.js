const fs = require('fs');
const path = require('path');

var build_path = function(opts) {
  var version = opts.version;

  return path.join(__dirname, '..', 'data', version);
};

var get_guides = function(opts) {
  var path = build_path(opts);
  return fs.readdirSync(path);
};

module.exports = {
  get_guides: get_guides
};
