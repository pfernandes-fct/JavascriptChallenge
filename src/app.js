import { SWDOMParser } from './mod/sw-dom-parser.js';

function loadJSON(filepath, callback) {
  var xobj = new XMLHttpRequest();

  xobj.overrideMimeType('application/json');
  xobj.open('GET', filepath, true);
  xobj.onreadystatechange = function () {
    if (xobj.readyState == 4 && xobj.status == '200') {
      const response = xobj.responseText;
      callback(JSON.parse(response));
    }
  };

  xobj.send(null);
}

loadJSON('./src/controls.json', function (response) {
  var root = SWDOMParser.parseDOM(response);
  var body = document.querySelector('body');

  body.id = root.id;
  root.children.forEach(function (item) {
    body.append(item);
  });
});
