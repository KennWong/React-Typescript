import React, { Component } from 'react'
import { Layout, Menu, Button } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import './index.css'

const { SubMenu } = Menu;
const { Header, Sider, Content } = Layout;

interface Props {

}
interface State {
  collapsed: boolean
}

export default class MainLayout extends Component<Props, State> {
  state = {
    collapsed: false,
  }

  mouseOver = () => {
    this.setState({
      collapsed: false,
    });
  };

  mouseLeave = () => {
    this.setState({
      collapsed: true,
    });
  };

  render() {
    const iconText = ['PMS', 'Project Management'];
    const menu = [
      {
        "menu": "Products",
        "submenu": [
          { 'key': 'abs', 'name': 'ABS' },
          { 'key': 'esp', 'name': 'ESP' },
          { 'key': 'esphev', 'name': 'ESPhev' },
          { 'key': 'ibooster', 'name': 'IBooster' }
        ]
      },
      {
        "menu": "Customers",
        "submenu": [
          { 'key': 'byd', 'name': 'BYD' },
          { 'key': 'tsl', 'name': 'Tesla' },
          { 'key': 'nio', 'name': 'NIO' },
          { 'key': 'bejv', 'name': 'BEJV' }
        ]
      }
    ];

    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          onMouseOver={this.mouseOver}
          onMouseLeave={this.mouseLeave}
          trigger={null} collapsible collapsed={this.state.collapsed}
        >
          <div className="logo">
            <h1>{this.state.collapsed ? iconText[0] : iconText[1]}</h1>
          </div>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['sbm-0']}
            defaultOpenKeys={['sbm-0']}
          >
            {menu.map((item, index) => {
              return (
                <SubMenu key={'sbm-' + index} title={item.menu}>
                  {
                    item.submenu.map((itemm, indexx) => {
                      return <Menu.Item key={itemm.key}>{itemm.name}</Menu.Item>
                    })
                  }
                </SubMenu>
              )
            })}
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger'
            })}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            Content
          </Content>
        </Layout>
      </Layout>
    );
  }
}
