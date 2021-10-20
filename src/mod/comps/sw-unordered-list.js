import { SWComponent } from './sw-component.js';

export class SWUnorderedList extends SWComponent {
  constructor(id, children) {
    super(id);
    this._children = children;
  }

  getTemplate() {
    var template = `<ul id="${this._id}">`;

    this._children.forEach(function (item) {
      if (typeof item === 'string') {
        template += `<li>${item}</li>`;
      } else if (item instanceof SWComponent) {
        template += `<li>${item.getTemplate()}</li>`;
      }
    });

    template += `</ul>`;

    return template;
  }
}

customElements.define('sw-unordered-list', SWUnorderedList);
