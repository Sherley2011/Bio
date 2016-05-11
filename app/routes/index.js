import {Company} from '../containers/company'
import {App} from '../containers/app'

import React from 'react'
import {Route, IndexRoute} from 'react-router'
import {ReduxRouter} from 'redux-router'

const routes = <ReduxRouter>
	<Route path="/">
		<IndexRoute component={Company}></IndexRoute>
		<Route path="company" component={Company}></Route>
		<Route path="app" component={App}></Route>
	</Route>
</ReduxRouter>

export default routes
