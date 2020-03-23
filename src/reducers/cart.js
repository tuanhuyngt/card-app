import * as types from './../constants/ActionType';
var data = JSON.parse(localStorage.getItem('CART'));
var initialState = [
    {
        product : {
            id : 1,
            name : 'iPhone XR',
            image : 'https://cdn.gsmarena.com/imgroot/news/18/09/iphone-xr-overview/-728/gsmarena_013.jpg',
            description : 'Made in VN',
            price : 500,
            inventory : 10,
            rating : 5
        },
        quantity: 5
    },
    {
        product : {
            id : 3,
            name : 'Samsung',
            image : 'https://cdn.gsmarena.com/imgroot/news/18/09/iphone-xr-overview/-728/gsmarena_013.jpg',
            description : 'Made in CN',
            price : 300,
            inventory : 10,
            rating : 5
        },
        quantity: 3
    }
];

const cart = (state = initialState, action) => {
    switch(action.type) {
        case types.ADD_TO_CART:
            console.log('Add nè');
            return [...state];
        default: return [...state];
    }
}

export default cart;