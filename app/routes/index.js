import {WechatShare} from '../containers/wechatShare'

import React from 'react'
import {Route, IndexRoute} from 'react-router'
import {ReduxRouter} from 'redux-router'

const routes = <ReduxRouter>
	<Route path="/">
		<IndexRoute component={WechatShare}></IndexRoute>
		<Route path="wechatShare" component={WechatShare}>
		</Route>
	</Route>
</ReduxRouter>

export default routes
