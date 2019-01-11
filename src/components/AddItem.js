import React from 'react';

export default class AddItem extends React.Component {
  handleSubmit = (e) => {
  	e.preventDefault();
		const item = e.target.elements.todo.value.trim();
		if (item != '') {
      this.props.addItem(item);
		} 
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