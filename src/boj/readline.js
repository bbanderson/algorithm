module.exports = function readline(dirname, filename) {
  const fs = require('fs');
  const path = require('path');
  const input = fs.readFileSync(path.join(__dirname, dirname, filename)).toString().split('\n');

  return input;
}
