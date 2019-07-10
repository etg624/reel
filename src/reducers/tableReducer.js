import { FILTER_SEARCH } from '../actions/search';

const initialState = {
  inventoryItems: [
    {
      name: 'Rolex Watch',
      status: 'active',
      percentSaved: '30',
      total: '35000',
      imageUrl:
        'https://images.rolex.com/2019/catalogue/images/upright-bba-with-shadow/m116503-0004.png?impolicy=upright-grid-card&imwidth=585'
    },
    {
      name: 'Gucci Belt',
      status: 'paused',
      percentSaved: '90',
      total: '400',
      imageUrl:
        'https://cache.net-a-porter.com/images/products/741153/741153_in_pp.jpg'
    },
    {
      name: 'Versace Shirt',
      status: 'active',
      percentSaved: '40',
      total: '412',
      imageUrl:
        'https://image.shopittome.com/apparel_images/fb/versace-versace-shirt-abvba097ce8_zoom.jpg'
    },
    {
      name: 'Off-White Shirt',
      status: 'paused',
      percentSaved: '90',
      total: '200',
      imageUrl: 'https://is4.revolveassets.com/images/p4/n/z/OFFF-MS76_V1.jpg'
    }
  ]
};

export function tableReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
