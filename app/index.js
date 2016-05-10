// import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import routes from './routes/'
import {createMyStore} from './store'
import {reducer} from './reducers'
import {Provider} from 'react-redux'
import {Router, browserHistory} from 'react-router'
import RootContainer from './containers/RootContainer'

// import base64 from 'base-64'
// console.log(window.location.href);
// const encodedData = base64.encode(window.location.href);
// console.log(encodedData);

import './asset/fonts/iconfont.css'
import './asset/styles/main.scss'

const store = createMyStore(reducer)

const app = document.createElement('div');
document.body.appendChild(app);

ReactDOM.render(
	<Provider store={store}>
		<RootContainer></RootContainer>
	</Provider>,
	app
)
