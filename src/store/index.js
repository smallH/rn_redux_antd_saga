import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import promiseMiddleware from 'redux-promise';
import reducer from '../reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const middleware = [promiseMiddleware, sagaMiddleware, createLogger];
const store = createStore(reducer, applyMiddleware(...middleware));
sagaMiddleware.run(rootSaga); // 执行saga文件

export default store;