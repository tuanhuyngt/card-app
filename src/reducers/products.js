
var initialState = [
    {
        id : 1,
        name : 'iPhone XR',
        image : 'https://cdn.gsmarena.com/imgroot/news/18/09/iphone-xr-overview/-728/gsmarena_013.jpg',
        description : 'Made in VN',
        price : 500,
        inventory : 10,
        rating : 5
    },
    {
        id : 2,
        name : 'Not XR',
        image : 'https://cdn.gsmarena.com/imgroot/news/18/09/iphone-xr-overview/-728/gsmarena_013.jpg',
        description : 'Made in JP',
        price : 400,
        inventory : 10,
        rating : 4
    },
    {
        id : 3,
        name : 'Samsung',
        image : 'https://cdn.gsmarena.com/imgroot/news/18/09/iphone-xr-overview/-728/gsmarena_013.jpg',
        description : 'Made in CN',
        price : 300,
        inventory : 10,
        rating : 5
    }
];

const products = (state = initialState, action) => {
    switch(action.type) {
        default: return [...state];
    }
}

export default products;