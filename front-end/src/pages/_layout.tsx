import React from 'react'
import styles from './layout.scss'
import { Layout, Menu, Avatar, Dropdown } from 'antd'
import Link from 'umi/link'
const { Header, Footer, Content } = Layout

export default class Index extends React.Component<any, any> {
    constructor(props: any) {
        super(props)
        this.state = {
            username: 'Admin',
            isSignIn: false,
        }
    }

    render() {
        console.log(this.props)
        const menu = (
            <Menu>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="#">
                        个人中心
                    </a>
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item className={styles.logout}>
                    <a target="_blank" rel="noopener noreferrer" href="#">
                        退出登录
                    </a>
                </Menu.Item>
            </Menu>
        )

        return (
            <Layout className={styles.normal}>
                <Header className={styles.header}>
                    <div>
                        <div className="logo" />
                        <Menu
                            mode="horizontal"
                            defaultSelectedKeys={['1']}
                            style={{ lineHeight: '64px', color: '#fff' }}
                            className={'menu-wrap ' + styles['menu-wrap']}
                        >
                            <Menu.Item key="1"><Link to="/home">Home</Link></Menu.Item>
                            <Menu.Item key="2"><Link to="/about">About</Link></Menu.Item>
                            <Menu.Item key="3">nav 3</Menu.Item>
                        </Menu>
                    </div>
                    <div className={styles['avatar-wrap']}>
                        {this.state.isSignIn ? (
                            <Dropdown overlay={menu} trigger={['hover']}>
                                <div>
                                    <Avatar size="large" icon="user" className={styles.avatar} />
                                    <span className={styles.username}>{this.state.username}</span>
                                </div>
                            </Dropdown>
                        ) : (
                            <div>
                                <Link to="/sign/signin">登录 </Link> / <Link to="/sign/signup">注册</Link>
                            </div>
                        )}
                    </div>
                </Header>
                <Content style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                    {this.props.children}
                </Content>
                <Footer>
                    Catdog s.club ©{new Date().getFullYear()} Created by McCarthey, Yoko
                </Footer>
            </Layout>
        )
    }
}