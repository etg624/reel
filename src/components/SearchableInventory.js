import React, { Component } from 'react';
import { connect } from 'react-redux';
import ItemCard from './ItemCard';
import { filterSearch } from '../actions/search';

class SearchableInventory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredItems: this.props.inventoryItems,
      value: ''
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onChangeHandler(e) {
    this.setState({ value: e.target.value });
    this.props.dispatch(filterSearch(e.target.value));
  }
  render() {
    const filteredItems = this.state.filteredItems
      .filter(item => {
        if (this.state.value.length > 0) {
          return item.name.toLowerCase().includes(this.state.value);
        } else {
          return item;
        }
      })
      .map(item => {
        const { name, status, percentSaved, total, imageUrl } = item;
        return (
          <li>
            <ItemCard
              key={name}
              name={name}
              status={status}
              percentSaved={percentSaved}
              total={total}
              imageUrl={imageUrl}
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

const mapStateToProps = ({ tableReducer }) => ({
  inventoryItems: tableReducer.inventoryItems
});

export default connect(mapStateToProps)(SearchableInventory);
