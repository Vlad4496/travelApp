import { css, html, LitElement } from 'lit-element';

export class ContactUs extends LitElement {
  static get styles() {
    return css`
      div {
        margin: 1em;
      }
    `;
  }
  connectedCallback() {
    super.connectedCallback();
  }
  render() {
    return html`
      <div>
        <h1>Contact Us</h1>
        <h3>Phone: +40799335599</h3>
      </div>
    `;
  }
}

customElements.define('contact-component', ContactUs);
