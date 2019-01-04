import React from 'react';

export default class AddItem extends React.Component {
  constructor(props) {
  	super(props);
  	this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
  	e.preventDefault();
  	const item = e.target.elements.todo.value.trim();
  	this.props.addItem(item);
  	e.target.elements.todo.value = '';
  }
  
  render() {
  	return (
  	  <div>
  	    <form onSubmit={this.handleSubmit}>
  	      <input type="text" name="todo" />
  	      <button>Add Item</button>
  	    </form>
  	  </div>
  	)
  }
}