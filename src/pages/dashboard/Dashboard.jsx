import { useState } from 'react';
import { Layout, Menu, theme } from 'antd';
import ExLogo from './ExLogo';
import EQFooter from '../../components/footer/Footer';
import { header, items } from '../../db/DashboardData';
import Logo from '../index/Logo';
import { Outlet } from 'react-router-dom';

const { Header, Sider } = Layout;
const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { token: { colorBgContainer }, } = theme.useToken();
  return (
    <Layout style={{ minHeight: '100vh', }}>
      <Sider style={{ background: colorBgContainer }} collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className=' flex justify-center items-center mt-2'>{collapsed == true ? <ExLogo w={'40px'} h={'40px'} /> : <Logo w={'140px'} h={'50px'} />}</div>
        <Menu theme="light" defaultSelectedKeys={['1']} mode="inline" items={items} style={{ border: 'none' }} />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <div className='dashboard'>
            <Menu theme="light" mode="horizontal" items={header} style={{ border: 'none', marginLeft: 'auto' }} />
          </div>
        </Header>

        {/* content */}
        <Outlet />
        {/* content end */}

        <EQFooter />
      </Layout>
    </Layout>
  );
};
export default Dashboard;