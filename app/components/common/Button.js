import React, {PropTypes} from 'react'

export default class MyComponent extends React.Component{
	constructor(props) {
			super(props)
	}
	render(){
		return(
			<button onClick={this.props.handleClick}>{this.props.text}</button>
		)
	}
}
MyComponent.defaultProps = {
	text: '按钮'
}

MyComponent.propTypes = {
    text: PropTypes.string,
		handleClick: PropTypes.func
}
