import React from 'react';
import Navbar from './Navbar';
import Items from './Items';
import AddItem from './AddItem';
import ItemsModal from './ItemsModal';

export default class TodoApp extends React.Component {
	state = {
		addingItemToList: false,
		items: []
	}	

	handleAddToItems = (item) => {
	  this.setState((prevState) => {
        return {
        	items: prevState.items.concat(item)
        }
	  });
	}

	handleDeleteAllItems = () => {
		this.setState(() => {
			return {
				items: []
			}
		});
	}

	render() {
	  return (
        <div>
          <Navbar />
					<button onClick={this.handleDeleteAllItems}>Delete All Items</button>
          <Items
          items={this.state.items} 
          count={this.state.items.length} />
          <AddItem addItem={this.handleAddToItems}/>
        </div>
	  )
	}
}