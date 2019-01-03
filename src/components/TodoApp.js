import React from 'react';
import Navbar from './Navbar';
import Items from './Items';
import AddItem from './AddItem';

export default class TodoApp extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = {
  		items: ['eat dinner', 'watch some tv']
  	}
	}
	render() {
	  return (
        <div>
          <h1>TodoApp</h1>
          <Navbar />
          <Items
          items={this.state.items} 
          count={this.state.items.length} />
          <AddItem />
        </div>
	  )
	}
}