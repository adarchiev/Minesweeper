import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers/boarder';

const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;