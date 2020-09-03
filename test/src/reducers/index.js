import isLogged from './isLogged';
import dataFromApi from './dataFromApi';
import {combineReducers} from 'redux';

const allReducers = combineReducers({isLogged,dataFromApi});

export default allReducers;