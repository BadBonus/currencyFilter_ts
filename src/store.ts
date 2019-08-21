import {applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducers'
import {IState} from './models'

const store = createStore(reducer, applyMiddleware(thunk));

store.subscribe(() => {
    console.log(store.getState());
});

export default store;