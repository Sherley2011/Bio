import React, {PropTypes} from 'react'
import Button from './Button'

export default class MyComponent extends React.Component{
	constructor(props) {
			super(props)
	}
	render(){
		return(
				<figure className="upload">
					<Button onClick={this.props.handleClick} text={this.props.text}></Button>
		   		<input type="file" capture="camera" accept="image/*" id="cameraInput" name="cameraInput" onChange={this.props.handlePhotoChange}/>
				</figure>
		)
	}
}

MyComponent.propTypes = {
    text: PropTypes.string,
		handleClick: PropTypes.func,
		handleChange: PropTypes.func
}
