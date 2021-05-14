import { LitElement, html } from 'lit-element';

class ToDoListItem extends LitElement {
  static get properties() {
    return {
      // todoItems: { type: Object },
      text: { type: String },
      done: { type: Boolean },
      isEditing: { type: Boolean },
    };
  }

  render() {
    return html` ${this.isEditing
      ? html`
          <form @submit=${this._handleSubmitEdit}>
            <input type="text" name="text" value=${this.text} />
          </form>
        `
      : html`${this.text} ${this.done}
          <button @click="${this._handleEditClick}">Edit</button>`}`;
  }
  _handleEditClick() {
    this.isEditing = true;
  }
  _handleSubmitEdit(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    let updateEvent = new CustomEvent('updateTodo', {
      detail: Object.fromEntries(formData),
    });
    this.dispatchEvent(updateEvent);
    this.isEditing = false;
  }
}

customElements.define('todo-list-item', ToDoListItem);
