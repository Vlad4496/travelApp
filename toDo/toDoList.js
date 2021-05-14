import { LitElement, html, css } from 'lit-element';
import './toDoListIem.js';

class ToDoList extends LitElement {
  static get styles() {
    return css`
      article * {
        padding: 1rem;
        border: 1px solid red;
      }
    `;
  }
  static get properties() {
    return {
      _todos: {
        type: Array,
      },
    };
  }
  constructor() {
    super();
    this._todos = [
      { text: 'lorem ipsum', done: true },
      { text: 'hello world', done: false },
      { text: 'nice people', done: true },
      { text: 'good evening', done: false },
    ];
  }

  connectedCallback() {
    super.connectedCallback();
  }
  render() {
    return html`
      <h1>ToDo List:</h1>
      <ul>
        ${this._todos.map(
          (item, index) =>
            html`<li>
              <todo-list-item
                .text=${item.text}
                .done=${item.done}
                @updateTodo=${event => this._handleUpdateTodo(index, event)}
              ></todo-list-item>
            </li>`
        )}
      </ul>
      <form @submit=${this._handleFormSubmit}>
        <input type="text" name="text" />
        <button type="submit">Add</button>
      </form>
      <article @click=${event => console.log(event)}>
        <div>
          <p><span>Hello World</span></p>
        </div>
      </article>
    `;
  }

  _handleFormSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const newTodo = { ...Object.fromEntries(formData), done: false };
    this._todos = [...this._todos, newTodo];
    // this.requestUpdate();
    form.reset();
  }
  _handleUpdateTodo(index, event) {
    this._todos = [
      ...this._todos.slice(0, index),
      { text: event.detail.text, done: this._todos[index].done },
      ...this._todos.slice(index + 1),
    ];
  }
}

customElements.define('todo-list', ToDoList);
