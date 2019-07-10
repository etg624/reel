import React, { Component } from 'react';
import { connect } from 'react-redux';
import ItemCard from './ItemCard';

class SearchableInventory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onChangeHandler(e) {
    this.setState({ value: e.target.value });
  }
  render() {
    const { value } = this.state;

    const filteredItems = this.props.inventoryItems
      .filter(item => {
        if (value.length > 0) {
          return item.name.toLowerCase().includes(value);
        } else {
          return item;
        }
      })
      .map(item => {
        const { name, status, percentSaved, total, imageUrl, id } = item;
        return (
          <li key={id}>
            <ItemCard
              name={name}
              status={status}
              percentSaved={percentSaved}
              total={total}
              imageUrl={imageUrl}
              id={id}
            />
          </li>
        );
      });
    return (
      <div>
        <input
          type="text"
          value={this.state.value}
          onChange={this.onChangeHandler}
          placeholder="Search for item..."
        />
        <ul>{filteredItems}</ul>
      </div>
    );
  }
}

const mapStateToProps = ({ inventoryReducer }) => ({
  inventoryItems: inventoryReducer.inventoryItems
});

export default connect(mapStateToProps)(SearchableInventory);
