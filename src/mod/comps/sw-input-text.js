import { SWComponent } from './sw-component.js';

export class SWInputText extends SWComponent {
  constructor(id, placeholder, maxlength) {
    super(id);
    this._placeholder = placeholder;
    this._maxlength = maxlength;
  }

  getTemplate() {
    var template = `<input type="text" id="${this._id}" name="${this._id}"`;

    if (typeof this._placeholder !== 'undefined') {
      template += ` placeholder="${this._placeholder}"`;
    }

    if (typeof this._maxlength !== 'undefined') {
      template += ` maxlength="${this._maxlength}"`;
    }

    template += `>`;

    return template;
  }
}

customElements.define('sw-input-text', SWInputText);
