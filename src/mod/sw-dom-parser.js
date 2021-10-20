import { SWInputText } from './comps/sw-input-text.js';
import { SWInputSelect } from './comps/sw-input-select.js';
import { SWUnorderedList } from './comps/sw-unordered-list.js';

export class SWDOMParser {
  static parseDOM(dom) {
    var root = { id: dom.id, children: SWDOMParser.parseChildren(dom.children) };
    return root;
  }

  static parseChildren(children) {
    var result = [];

    children.forEach(function (item) {
      var component = undefined;

      if (typeof item.type === 'undefined') {
        component = item;
      } else {
        switch (item.type) {
          case 'SWInputText':
            component = new SWInputText(item.id, item.placeholder, item.maxlength);
            break;
          case 'SWInputSelect':
            component = new SWInputSelect(item.id, item.options);
            break;
          case 'SWUnorderedList':
            component = new SWUnorderedList(item.id, SWDOMParser.parseChildren(item.children));
            break;
        }
      }

      if (component !== undefined) {
        result.push(component);
      }
    });

    return result;
  }
}
