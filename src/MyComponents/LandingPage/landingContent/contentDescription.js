import { LitElement, html, css } from 'lit-element';

class ContentDescription extends LitElement {
  static get styles() {
    return css`
      .contentDescription {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(245, 245, 245, 255);
        width: 100vw;
      }
      .img-class {
        width: 50vw;
        height: 100vh;
        border-radius: 0% 200% 70% 0%;
        background-image: url('https://images.unsplash.com/photo-1568454537842-d933259bb258?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80');
        background-size: cover;
        background-repeat: no-repeat;
        background-color: #3e4875;
        background-position: center;
      }
      .contentDescription .mainContent {
        width: 50vw;
        margin-left: 5em;
        margin-top: 5em;
        font-family: Arial, Helvetica, sans-serif;
      }
      .contentDescription .mainContent h1 {
        margin-bottom: 0.2em;
        font-size: 5em;
      }
      .contentDescription .mainContent p {
        margin-bottom: 0.2em;
        font-size: 1.2em;
        color: rgb(50, 50s, 50s);
        line-height: 2em;
      }
      .contentDescription .mainContent input {
        margin-top: 3em;
        padding: 1.5em 3em;
        border-radius: 1.5em;
        color: white;
        background-color: #3e4875;
        font-weight: bold;
        font-size: 1.2em;
        cursor: pointer;
        border: none;
      }
      .contentDescription .mainContent input:hover {
        color: black;
        background-color: green;
        transition: 1s;
        border: none;
      }
      @media screen and (min-width: 1025px) {
        .mainContent input[type='button'] {
          margin-bottom: 2em;
        }
      }
      @media screen and (min-width: 769px) and (max-width: 1024px) {
        .contentDescription {
          display: flex;
          flex-direction: column;
        }
        .img-class {
          width: 100vw;
          height: 100vh;
          border-radius: 0;
        }
        .contentDescription .mainContent {
          width: 100vw;
          text-align: center;
          margin: 0;
          margin-top: 1em;
        }
        .mainContent input[type='button'] {
          margin-bottom: 2em;
        }
      }
      @media screen and (min-width: 481px) and (max-width: 768px) {
        .contentDescription {
          display: flex;
          flex-direction: column;
        }
        .img-class {
          width: 100vw;
          height: 100vh;
          border-radius: 0;
        }
        .contentDescription .mainContent {
          width: 100vw;
          text-align: center;
          margin: 0;
          margin-top: 1em;
          font-size: 0.7em;
        }
        .mainContent input[type='button'] {
          margin-bottom: 2em;
        }
      }
      @media screen and (min-width: 320px) and (max-width: 480px) {
        .contentDescription {
          display: flex;
          flex-direction: column;
        }
        .img-class {
          width: 100vw;
          height: 100vh;
          border-radius: 0;
        }
        .contentDescription .mainContent {
          width: 100vw;
          text-align: center;
          margin: 0;
          margin-top: 1em;
          font-size: 0.7em;
        }
        .mainContent input[type='button'] {
          margin-bottom: 2em;
        }
        .contentDescription .mainContent h1 {
          font-size: 4em;
        }
      }
    `;
  }

  static get properties() {
    return {
      _isLoading: { type: Boolean },
    };
  }

  render() {
    const url =
      'https://images.unsplash.com/photo-1568454537842-d933259bb258?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80';
    if (this._isLoading) {
      return 'Loading...';
    }
    return html`<article class="contentDescription">
      <!-- <img src=${url} alt="Hiking Person" /> -->
      <div class="img-class"></div>
      <div class="mainContent">
        <h1>Amazing places to <br />enjoy your travel</h1>
        <p>
          New experiences. Routine is the killer of the soul, and there's <br />
          nothing better than the feeling of experiencing something <br />
          new in a new place
        </p>
        <input type="button" value="Explore More" />
      </div>
    </article>`;
  }
}
customElements.define('content-description', ContentDescription);
