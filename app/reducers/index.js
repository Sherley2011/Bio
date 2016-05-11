import {Map} from 'immutable'
import {combineReducers} from 'redux-immutablejs'
import { routerStateReducer } from 'redux-router';

import wechatShare from './wechatShare'
import app from './app'


export const reducer = combineReducers({
	route: routerStateReducer,
	wechatShare,
	app

})
