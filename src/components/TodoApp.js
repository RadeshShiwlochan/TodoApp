import React from 'react';
import Navbar from './Navbar';
import Items from './Items';
import AddItem from './AddItem';
import ItemsModal from './ItemsModal';

class TodoApp extends React.Component {
	state = {
		addingItemToList: false,
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
				addingItemToList: !prevState.addingItemToList
			}
		})
	}

	handleCloseModal = () => {
		console.log('Clicked');
		this.setState(() => {
			return {
				addingItemToList: false
			}
		})
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
					 swtichOnOff={this.state.addingItemToList} 
					 addItemsToList={this.handleCloseModal}/>
        </div>
	  )
	}
}

export default TodoApp;