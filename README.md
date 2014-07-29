ttf2svg
=======

Font convertor, TTF to SVG, for node.js


Usage
-----

Install:

``` bash
npm install -g ttf2svg
```

Usage example:

``` bash
ttf2svg fontello.ttf fontello.svg
```

Or:

``` bash
ttf2svg < fontello.ttf > fontello.svg
```

Or:

``` javascript
var ttf2svg = require('ttf2svg')
  , fs = require('fs')
;

fs.readFile('./fontello.ttf', function (err, buffer) {
    if (!!err) throw err;

    var svgContent = ttf2svg(buffer);
    fs.writeFileSync('./fontello.svg', svgContent);

});

```


Reference
-----

[gulp-ttf2svg](https://github.com/morlay/gulp-ttf2svg/)