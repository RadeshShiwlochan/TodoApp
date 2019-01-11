import React from 'react';
import Navbar from './Navbar';
import Items from './Items';
import AddItem from './AddItem';
import ItemsModal from './ItemsModal';

class TodoApp extends React.Component {
	state = {
		addingItemToList: undefined,
		items: []
	}	

	handleAddToItems = (item) => {
		console.log('items');
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

	handleOpenModal = () => {
		console.log('open');
	  this.setState((prevState) => {
			return {
				addingItemToList: !prevState.addItemsToList
			}
		})
	}

	handleCloseModal = () => {
		console.log('closing')
		this.setState(() => ({addingItemToList: undefined}))
	}
	
render() {
	  return (
        <div>
          <Navbar />
					<div className="container">
					  <button onClick={this.handleDeleteAllItems}>Delete All Items</button>
            <Items
            items={this.state.items} 
            count={this.state.items.length} />
            <AddItem addItem={this.handleAddToItems}/>
					  <button onClick={this.handleOpenModal}>Add Items to List</button>
					</div>
					<ItemsModal
					 handleOpenModal={this.state.addingItemToList} 
					 handleCloseModal={this.handleCloseModal} />
        </div>
	  )
	}
}

export default TodoApp;