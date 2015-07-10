var Pageres = require('pageres');

var pageres = new Pageres({delay: 2})
    .src('localhost:8000', ['1920x1080'])
    .dest(__dirname);

pageres.run(function (err) {
    console.log('done');
});