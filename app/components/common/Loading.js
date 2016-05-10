// Loading

import React from 'react'
// style import
import styles from './Loading.scss'

export default class MyComponent extends React.Component{
	constructor(props) {
			super(props)
	}
	render(){
		return(
	    <div className={styles.root}>
	        <div className="loading-progress">
	            <div className="rotator">
	                <div className="rotator">
	                    <div className="rotator colored">
	                        <div className="rotator">
	                            <div className="rotator colored">
	                                <div className="rotator colored"></div>
	                                <div className="rotator"></div>
	                            </div>
	                            <div className="rotator colored"></div>
	                        </div>
	                        <div className="rotator"></div>
	                    </div>
	                    <div className="rotator"></div>
	                </div>
	                <div className="rotator"></div>
	            </div>
	            <div className="rotator"></div>
	        </div>
	    </div>
		)
	}
}
