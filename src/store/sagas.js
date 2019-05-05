import { put, takeEvery, fork, all } from 'redux-saga/effects';
import * as T from '../reducers/products/actiontypes';
import http from '../assets/api/http';

function* mySaga(){
    yield takeEvery(T.SAGA_PRODUCTS, function* requestProducts(e){
        console.log(e); // e为saga传递的参数对象
        try{
            const result = yield http('http://react.deepui.net/api/data/products.json');
            yield put({type:T.INIT_PRODUCTS, payload:result});
        }catch(e){
            yield put({type:T.INIT_PRODUCTS, payload:[]});
        }
    });
}

// put相当于redux的dispatch的作用，而call相当于调用函数。
export default function* rootSaga() {
    yield all([fork(mySaga)]);
}