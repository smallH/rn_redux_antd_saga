import * as T from './actiontypes';
// import { createAction } from 'redux-actions';
// import http from '../../assets/api/http';

// redux-thunk
// export const initProduct = () => (dispatch) => {
//     // 同步写法
//     // const action = createAction(T.INIT_PRODUCTS, () => []);
//     // 异步写法
//     const actionAsync = createAction(T.INIT_PRODUCTS, () => http('/api/data/products.json'));
//     dispatch(actionAsync());
// };

// redux-saga
export const sagaProduct = () => ({
    type: T.SAGA_PRODUCTS,
    payload: 'saga_data'
});