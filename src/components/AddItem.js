import React from 'react';

export default class AddItem extends React.Component {
  constructor(props) {
  	super(props);
  	this.handleAddItem = this.handleAddItem.bind(this);
  }
  handleAddItem(e) {
  	e.preventDefault();
  }
  render() {
  	return (
  	  <div>
  	    <form onSubmit={this.handleAddItem}>
  	      <input type="text" name="input" />
  	      <button>Add Item</button>
  	    </form>
  	  </div>
  	)
  }
}