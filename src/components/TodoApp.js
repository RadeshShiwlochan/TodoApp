import React from 'react';
import Navbar from './Navbar';
import Items from './Items';
import AddItem from './AddItem';

export default class TodoApp extends React.Component {
	state = {
		items: []
	}	
	handleAddToItems = (item) => {
	  this.setState((prevState) => {
        return {
        	items: prevState.items.concat(item)
        }
	  });
	}
	render() {
	  return (
        <div>
          <h1>TodoApp</h1>
          <Navbar />
          <Items
          items={this.state.items} 
          count={this.state.items.length} />
          <AddItem addItem={this.handleAddToItems}/>
        </div>
	  )
	}
}