// load the library and ALL languages
hljs = require('highlight.js');
html = hljs.highlight('<h1>Hello World!</h1>', {language: 'xml'}).value

// first, find all the div.code blocks
document.querySelectorAll('div.code').forEach(el => {
    // then highlight each
    hljs.highlightElement(el);
  });

console.log("From highcode.js");