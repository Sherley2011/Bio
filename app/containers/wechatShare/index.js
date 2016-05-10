import React, { PropTypes } from 'react'
import {push} from 'redux-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import DocumentTitle from 'react-document-title'
import classNames from 'classnames'
import $ from 'jquery';
import moment from 'moment';


import Card from '../../components/wechatShare/Card'
import Other from '../../components/wechatShare/Other'
import Instruct from '../../components/wechatShare/Instruct'
import View from '../../components/wechatShare/View'
import BlurImg from '../../components/common/BlurImg'
import Qrcode from '../../components/wechatShare/Qrcode'

// style import
import styles from './index.scss'

import '../../asset/fonts/iconfont.css'
// action import
import {requestTusoInfo} from '../../actions/wechatShare'

class MyComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state={
          step:'friend',
          show:true,
          view:false,
          qrcodeShow:false,
          instruct:false,
          rotate:0,
          titleMaxLength:18,
          maxLength:110,
          wordLeft:110,
          handleFilp:function(e){
            e.stopPropagation()
            this.setState({
              rotate:++this.state.rotate,
              show:!this.state.show
            })
          }.bind(this),
          handleViewToggle:function(e){
            this.setState({
              view:!this.state.view
            })
          }.bind(this),
          handleMakeMine:function(e){
            // 创建自己的图说
            this.setState({
        			step:'create-1',
              photo:'',
              title:'',
              date:'',
              content:'',
              mode:'',
        		})
            this.state.show?null:this.state.handleFilp(e)
          }.bind(this),
          handlePhotoChange:function(e){
            // 上传图片
            this.setState({
        			photo:URL.createObjectURL(e.target.files[0]),
              step:'create-2'
        		})
          }.bind(this),
          handleTitleChange:function(e){
            // 修改标题
        		this.setState({
        			title:e.target.value
        		})
        	}.bind(this),
          handleWrite:function(e){
            // 标题失去焦点，进入写图说内容
            this.state.handleFilp(e)
          }.bind(this),
          handleContentChange:function(e){
            // 修改内容
        		this.setState({
        			content:e.target.value,
        			wordLeft:e.target.maxLength-e.target.value.length>1?e.target.maxLength-e.target.value.length:0
        		})
        	}.bind(this),
          handleMode:function(e){
            // 设置对齐方式
            this.setState({
              mode:e.target.getAttribute("data")
            })
          }.bind(this),
          handleBuild:function(e){
            // 生成图说
            this.setState({
              step:'build'
            })
            this.state.handleFilp(e)
          }.bind(this),
          handleShareToggle:function(){
            this.setState({
              instruct:!this.state.instruct
            })
          }.bind(this),
          handleQrcodeToggle:function(){
            this.setState({
              qrcodeShow:!this.state.qrcodeShow
            })
          }.bind(this)
        }

    }

    componentDidMount() {
        this.props.requestTusoInfo()
        $("body").css("background","red")

    }
    componentWillReceiveProps(nextProps) {
      this.setState({
        photo:nextProps.wechatShare.get('photo'),
        title:nextProps.wechatShare.get('title'),
        date:nextProps.wechatShare.get('date'),
        content:nextProps.wechatShare.get('content'),
        mode:nextProps.wechatShare.get('mode'),
        qrcode:nextProps.wechatShare.get('qrcode'),
        slogan:nextProps.tuso.get('slogan'),
        follow:nextProps.tuso.get('follow'),
        activity:nextProps.tuso.get('activity')
      })
    }
    render() {
      return (
            <DocumentTitle title="TUSO">
              <div className={this.state.step}>
                <div className="flip-container" ref="myCard">
                  <div className="flipper" style={{transform: "rotateY("+this.state.rotate*180+"deg)"}}>
                   <Card type="cover" {...this.state}></Card>
                   <Card type="inside" {...this.state}></Card>
                 </div>
               </div>
               <div className="other">
                 <Other {...this.state}></Other>
               </div>
               <div className="blur" style={{opacity:!this.state.show?1:0 }}>
                <BlurImg src={this.state.photo} blurPx='100'></BlurImg>
               </div>
               <div className="view" style={{zIndex:this.state.view?1002:-1,opacity:this.state.view?1:0 }}>
                   <View {...this.state}></View>
                 </div>
               {this.state.instruct?(
                 <div className="instruct" onClick={this.state.handleShareToggle}>
                   <Instruct {...this.state}></Instruct>
                 </div>
               ):null}
               {this.state.qrcodeShow?(
                 <div className="qrcode" onClick={this.state.handleQrcodeToggle}>
                   <Qrcode {...this.state}></Qrcode>
                 </div>
               ):null}


              </div>
            </DocumentTitle>
        )
    }
}


function mapStateToProps(state) {
    return {
          wechatShare: state.getIn(['wechatShare','wechatShare']),
          tuso:state.getIn(['wechatShare','tuso'])
    }
}

function mapDispatchToProps(dispatch) {
    return {
        requestTusoInfo: bindActionCreators(requestTusoInfo, dispatch)
    }
}

export const WechatShare = connect(mapStateToProps, mapDispatchToProps)(MyComponent)
