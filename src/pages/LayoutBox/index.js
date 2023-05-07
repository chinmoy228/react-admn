import React from 'react'
import './LayoutBox.scss'

import { Layout } from 'antd';
import HeaderNav from '../../components/HeaderNav';
import SideBar from '../../components/SideBar';
import { Outlet } from 'react-router-dom';
import { useSelector } from "react-redux";


const { Content } = Layout;


const LayoutBox = () => {

  // const [collapsed, setCollapsed] = useState(false);
  // const {
  //   token: { colorBgContainer, colorTextBase },
  // } = theme.useToken();

  const { isCollapse } = useSelector((state) => state.sidebarCollapse);

  return (
    <div className={ isCollapse ? 'mainLayout w-100 h-100' : 'mainLayout sideBarWithCollapse w-100 h-100' } data-testid='main-layout-id'>
      <Layout className='h-full'>
        <SideBar />
        <Layout className="site-layout">
          <HeaderNav />
          <Content
            style={{
              padding: 36,
              minHeight: 280,
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </div>
  )
}

export default LayoutBox