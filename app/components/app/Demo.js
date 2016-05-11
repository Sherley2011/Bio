// Demo

import React from 'react';
import { Menu, Breadcrumb, Icon, Dropdown,Badge,Form, Input, Button, Checkbox } from 'antd';


import './Demo.css'

export default class Demo extends React.Component {
	componentDidMount(){

	}
  render() {
		const menu = (
		  <Menu>
				{
					this.props.mainNav.map((item,index) => {
						return (
							<Menu.Item key={index}>{item.get('text')}</Menu.Item>
						)
					})
				}
		  </Menu>
		)


    return (
			<div className="ant-layout-topaside">
      <div className="ant-layout-header">
        <div className="ant-layout-wrapper">
          <div className="ant-layout-logo">
						{this.props.appName}
          </div>
          <Menu theme="dark" mode="horizontal"
            defaultSelectedKeys={['2']} style={{lineHeight: '64px'}}>
						{
							this.props.mainNav.map((item,index) => {
								return (
									<Menu.Item key={index}>{item.get('text')}</Menu.Item>
								)
							})
						}
          </Menu>
					<Dropdown overlay={menu}>
				    <a className="ant-dropdown-link" href="#">
							<Badge>
						    <Icon type="notification" />
						  </Badge>
				    </a>
				  </Dropdown>
					<Dropdown overlay={menu}>
				    <a className="ant-dropdown-link" href="#">
							<Badge  count="5">
						    <Icon type="notification" />
						  </Badge>
				    </a>
				  </Dropdown>
					<Dropdown overlay={menu}>
				    <a className="ant-dropdown-link" href="#">
							<Badge  count="5">
						    <Icon type="notification" />
						  </Badge>
				    </a>
				  </Dropdown>
					<Dropdown overlay={menu}>
				    <a className="ant-dropdown-link" href="#">
							<Icon type="notification" />Chenfay
				    </a>
				  </Dropdown>
        </div>
      </div>
			<div className="ant-layout-wrapper">

        <div className="ant-layout-container">
          <aside className="ant-layout-sider">
						<Form inline onSubmit={this.handleSubmit}>
			        <Form.Item
			          label="搜索：">
			          <Input placeholder="请输入关键字" />
			        </Form.Item>
			        <Button type="primary" htmlType="submit">登录</Button>
			      </Form>
            <Menu mode="inline" defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']}>
							<Menu.SubMenu key='1111' title={<span><Icon type="user" />企业中心</span>}>
								<Menu.Item key="1">选项1</Menu.Item>
								<Menu.Item key="2">选项2</Menu.Item>
								<Menu.Item key="3">选项3</Menu.Item>
								<Menu.Item key="4">选项4</Menu.Item>
							</Menu.SubMenu>
            </Menu>
          </aside>
          <div className="ant-layout-content">
						<div className="ant-layout-breadcrumb">
		          <Breadcrumb>
		            <Breadcrumb.Item>首页</Breadcrumb.Item>
		            <Breadcrumb.Item>应用列表</Breadcrumb.Item>
		            <Breadcrumb.Item>某应用</Breadcrumb.Item>
		          </Breadcrumb>
		        </div>
            <div style={{ height: 240 }}>
              <div style={{clear: 'both'}}>内容区域</div>
            </div>
          </div>
        </div>
      </div>
    </div>

		)
  }
}
