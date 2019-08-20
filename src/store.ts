import * as Redux from 'redux'

import reducer from './reducers'

const store = Redux.createStore(reducer);

export default store;