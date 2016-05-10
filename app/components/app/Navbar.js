// Navbar

import React from 'react'
// style import
import styles from './Navbar.scss'

import NavbarBarnd from '../common/NavbarBarnd'
import SidebarCollapse from '../common/SidebarCollapse'
import Dropdown from '../common/Dropdown'

export default class MyComponent extends React.Component{
	constructor(props) {
			super(props)
	}
	render(){

		return(
			<div className="navbar">
			<div className="navbar-inner">
					<div className="navbar-container">
							<NavbarBarnd></NavbarBarnd>
							<SidebarCollapse></SidebarCollapse>
							<div className="navbar-header pull-right">
									<div className="navbar-account">
											<ul className="account-area">
													<li>
															<Dropdown type="icon">1</Dropdown>
													</li>
													<li>
														<Dropdown type="icon">2</Dropdown>
													</li>

													<li>
															<Dropdown type="icon">3</Dropdown>
													</li>
													<li>
														<Dropdown type="login">4</Dropdown>
													</li>
											</ul>

									</div>
							</div>
					</div>
			</div>
			</div>
		)
	}
}
