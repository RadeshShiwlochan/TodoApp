import React from 'react';
import Item from './Item';

class Items extends React.Component {
  render() {
    return (
      <div>
        <h3>Things to do: {this.props.count}</h3>
        <ul>
        {
          this.props.items.map((item) => {
            return <Item key={item} thingToDo={item}/>
          })
        }
        </ul>
      </div>
	)
  }
}

export default Items;