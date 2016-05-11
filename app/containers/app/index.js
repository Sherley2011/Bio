import React, { PropTypes } from 'react'
import {push} from 'redux-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import DocumentTitle from 'react-document-title'
import classNames from 'classnames'
import $ from 'jquery';
import moment from 'moment';

import Demo from '../../components/app/Demo'






// style import
import styles from 'antd/dist/antd.css'

import '../../asset/fonts/iconfont.css'
// action import
import {appInfo} from '../../actions/app'

class MyComponent extends React.Component {
    constructor(props) {
        super(props)

    }

    componentDidMount() {
        this.props.appInfo()
    }
    componentWillReceiveProps(nextProps) {

    }
    render() {
      return (
            <DocumentTitle title="BetterHR">
              <div>
              <Demo {...this.props}></Demo>
              </div>
            </DocumentTitle>
        )
    }
}


function mapStateToProps(state) {
    return {
          appName:state.getIn(['app','appName']),
          mainNav: state.getIn(['app','mainNav']),
          subNav: state.getIn(['app','subNav'])
    }
}

function mapDispatchToProps(dispatch) {
    return {
        appInfo: bindActionCreators(appInfo, dispatch)
    }
}

export const App = connect(mapStateToProps, mapDispatchToProps)(MyComponent)
