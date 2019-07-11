import React, { Component } from 'react';
import { connect } from 'react-redux';
import ItemCard from './ItemCard';
import { search } from '../actions';

class SearchableInventory extends Component {
  constructor(props) {
    super(props);

    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onChangeHandler(e) {
    this.props.dispatch(search(e.target.value));
  }
  render() {
    const { searchVal, inventoryItems } = this.props;

    const filteredItems = inventoryItems
      .filter(item => {
        if (searchVal) {
          return item.name.toLowerCase().includes(searchVal);
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
          value={searchVal}
          onChange={this.onChangeHandler}
          placeholder="Search for item..."
        />
        <ul>
          {filteredItems.length ? (
            filteredItems
          ) : (
            <div>No Items Match that search</div>
          )}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ inventoryReducer }) => ({
  inventoryItems: inventoryReducer.inventoryItems,
  searchVal: inventoryReducer.searchVal
});

export default connect(mapStateToProps)(SearchableInventory);
