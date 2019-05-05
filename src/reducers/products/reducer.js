import * as T from './actiontypes';

const initProducts = [{
    id: 0,
    title: 'React Book', 
    price: 36, 
    inventory: 100
}];

export const products = (state = initProducts, action) => {
    switch(action.type){
        case T.INIT_PRODUCTS:
            return action.error ? [...state] : [...state].concat(action.payload);
        default:
            return state;
    }
};