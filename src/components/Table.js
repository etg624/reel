import React from 'react';
import { connect } from 'react-redux';

import SearchAbleInventory from './SearchableInventory';

function Table(props) {
  return (
    <div>
      <SearchAbleInventory />
    </div>
  );
}

const mapStateToProps = state => ({
  inventoryItems: state.tableReducer.inventoryItems
});

export default connect(mapStateToProps)(Table);
