import rootReducer from './rootReducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';
import { logger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware, logger)
);

sagaMiddleware.run(rootSaga);

export default store