var pug = require('pug');
var locals = require('./locals.js');
// compile 

var html = pug.renderFile('index.pug', locals);
fs.writeFileSync('index.html',html);
