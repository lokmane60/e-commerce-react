import { configureStore, createSlice} from '@reduxjs/toolkit';
//import {counterSlice} from './counterSlice';
import postsSlice from './reducers/postsSlice';
//import CounterReducer from './reducers/CounterReducer';

const enhacer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//const Store = configureStore(counterSlice, enhacer());

const Store = configureStore({
    reducer : {
        posts : postsSlice
    }
},enhacer())
export default Store