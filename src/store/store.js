import {createStore,applyMiddleware} from 'redux'

import thunk from 'redux-thunk'

import ListReducer from '../store/reducers/list.reducer'

const Store = createStore(ListReducer,applyMiddleware(thunk))

export default Store;