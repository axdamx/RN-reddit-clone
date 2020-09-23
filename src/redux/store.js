import {createStore} from 'redux';
import reducer from './topic';

const store = createStore(reducer);

export default store;
