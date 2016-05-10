// NavbarBarnd

import React from 'react'
import InlineSVG from 'svg-inline-react'


import logoSvg from '../../asset/images/logo.svg'

export default class MyComponent extends React.Component{
	constructor(props) {
			super(props)
	}
	render(){
		return(
			<div  className="navbar-header pull-left">
					<a href="#"  className="navbar-brand">
							<small>
							<InlineSVG src={logoSvg} className="logo-img"></InlineSVG>
							</small>
					</a>
			</div>
		)
	}
}
