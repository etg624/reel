import { TOGGLE_STATUS, SEARCH, SORT_BY } from '../actions';
const initialState = {
  inventoryItems: [
    {
      id: 1,
      name: 'Rolex Watch',
      status: 'active',
      percentSaved: '30',
      total: 35000,
      imageUrl:
        'https://images.rolex.com/2019/catalogue/images/upright-bba-with-shadow/m116503-0004.png?impolicy=upright-grid-card&imwidth=585'
    },
    {
      id: 2,
      name: 'Gucci Belt',
      status: 'paused',
      percentSaved: '90',
      total: 400,
      imageUrl:
        'https://cdn.cliqueinc.com/cache/posts/254060/how-to-tell-if-a-gucci-belt-is-real-254060-1523045002688-product.700x0c.jpg'
    },
    {
      id: 3,
      name: 'Versace Shirt',
      status: 'active',
      percentSaved: '40',
      total: 412,
      imageUrl:
        'https://image.shopittome.com/apparel_images/fb/versace-versace-shirt-abvba097ce8_zoom.jpg'
    },
    {
      id: 4,
      name: 'Off-White Shirt',
      status: 'paused',
      percentSaved: '90',
      total: 200,
      imageUrl: 'https://is4.revolveassets.com/images/p4/n/z/OFFF-MS76_V1.jpg'
    }
  ],
  searchVal: ''
};

export function inventoryReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_STATUS:
      return {
        ...state,
        inventoryItems: state.inventoryItems.map(item => {
          if (action.id !== item.id) {
            return item;
          }
          return {
            ...item,
            status: action.status === 'active' ? 'paused' : 'active'
          };
        })
      };
    case SEARCH:
      return {
        ...state,
        searchVal: action.value
      };
    case SORT_BY:
      const { value } = action;

      return {
        ...state,
        inventoryItems: [
          ...state.inventoryItems.sort((a, b) => {
            return b[value] < a[value] ? 0 : a ? -1 : 1;
          })
        ]
      };
    default:
      return state;
  }
}
