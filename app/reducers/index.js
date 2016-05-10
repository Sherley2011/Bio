import {Map} from 'immutable'
import {combineReducers} from 'redux-immutablejs'
import { routerStateReducer } from 'redux-router';

import wechatShare from './wechatShare'


export const reducer = combineReducers({
	route: routerStateReducer,
	wechatShare

})
