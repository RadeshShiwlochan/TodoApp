import React from 'react';
import Item from './Item';

class Items extends React.Component {
  constructor(props) {
  	super(props);
  }
  render() {
    return (
      <div>
        <p>Things to do: {this.props.count}</p>
        {
          this.props.items.map((item) => {
            return <Item key={item} thingToDo={item}/>
          })
        }
      </div>
	)
  }
}

export default Items;