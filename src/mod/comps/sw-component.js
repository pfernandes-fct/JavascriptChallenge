export class SWComponent extends HTMLElement {
  constructor(id) {
    super();
    this._id = id;
    this.shadow = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadow.innerHTML = this.getTemplate();
  }
}
