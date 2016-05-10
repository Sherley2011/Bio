// 图说分享

	// 按钮
		// 	分享给好友
	// 下载
	// 关注


import React, {PropTypes} from 'react'
import InlineSVG from 'svg-inline-react'

import Button from '../common/Button'
import logoSvg from '../../asset/images/logo.svg'

export default class MyComponent extends React.Component{
	render(){
		console.log(
			this.props.slogan
		);
		return(
      <div>
				<Button text="分享给好友" handleClick={this.props.handleShareToggle}></Button>
				<figure className="download">
					<InlineSVG src={logoSvg} className="logo-img"></InlineSVG>
					<b>TUSO图说</b>
					<p>{this.props.slogan}</p>
					<Button text="下载" handleClick={this.props.handleQrcodeToggle}></Button>
				</figure>
				<figure className="follow">
					<p onClick={this.props.handleQrcodeToggle}>{this.props.follow}</p>
					<span>{this.props.activity}</span>
				</figure>
      </div>
		)
	}
}
