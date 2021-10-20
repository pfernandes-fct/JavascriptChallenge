import { SWComponent } from './sw-component.js';

export class SWInputSelect extends SWComponent {
  constructor(id, options) {
    super(id);
    this._options = options;
  }

  getTemplate() {
    var template = `<select id="${this._id}" name="${this._id}">`;

    this._options.forEach(function (item) {
      template += `<option value="${item.id}">${item.value}</option>`;
    });

    template += `</select>`;

    return template;
  }
}

customElements.define('sw-input-select', SWInputSelect);
