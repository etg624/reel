import React, { Component } from 'react';
import { connect } from 'react-redux';
import ItemCard from './ItemCard';
import { search } from '../actions';
import SortBy from './SortBy';
import SearchBar from './SearchBar';
import '../styles/SearchableInventory.css';

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
          return item.name.toLowerCase().includes(searchVal.toLowerCase());
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
      <section className="page-content">
        <SearchBar onChange={this.onChangeHandler} searchVal={searchVal} />
        <section className="reels">
          <header className="reels-header">
            <h1>Your Reels!</h1>
            <SortBy
              className="sort-by"
              sortValues={['status', 'name', 'percentSaved', 'total']}
            />
          </header>

          <ul>
            {filteredItems.length ? (
              filteredItems
            ) : (
              <div className="no-item">
                No items match that search{' '}
                <span role="img" aria-label="detective">
                  🕵️‍♂️
                </span>
              </div>
            )}
          </ul>
        </section>
      </section>
    );
  }
}

const mapStateToProps = ({ inventoryReducer }) => ({
  inventoryItems: inventoryReducer.inventoryItems,
  searchVal: inventoryReducer.searchVal
});

export default connect(mapStateToProps)(SearchableInventory);
