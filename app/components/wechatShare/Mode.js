// 图说内容显示方式

	// 居中对齐
	// 左对齐

import React, {PropTypes} from 'react'

export default class MyComponent extends React.Component{
	render(){
		return(
			<ul>
				<li>
					<i className="iconfont" onClick={this.props.handleMode} data="left">&#xe60b;</i>
				</li>
				<li>
					<i className="iconfont" onClick={this.props.handleMode} data="center">&#xe60b;</i>
				</li>
			</ul>
		)
	}
}
