// Dropdown

import React from 'react'

export default class MyComponent extends React.Component{
	constructor(props) {
			super(props)
	}
	render(){
		let dropdownHeader
		switch(this.props.type){
			case 'icon':dropdownHeader=(
				<a  className="dropdown-toggle" data-toggle="dropdown" title="Help" href="#">
						<i  className="iconfont icon-mulu"></i>
						<span className="badge">3</span>
				</a>
			)
			break
			case 'login':dropdownHeader=(
				<a className="login-area dropdown-toggle" data-toggle="dropdown">
						<div className="avatar" title="View your public profile">
								<img src="assets/img/avatars/adam-jansen.jpg" />
						</div>
						<section>
								<h2><span className="profile"><span>David Stevenson</span></span></h2>
						</section>
				</a>
			)
			break
		}
		return(
			<div>
				{dropdownHeader}
				{this.props.children}
			</div>
		)
	}
}
