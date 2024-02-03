import { useState } from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import Logo from '../Index/Logo'
import ExLogo from './ExLogo';
import EQFooter from '../Footer/Footer';
import { BreadData, header, items } from './DashboardData';
import DashboardContent from './DashboardContent';

const { Header, Content, Sider } = Layout;
const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { token: { colorBgContainer }, } = theme.useToken();
  return (
    <Layout style={{ minHeight: '100vh', }}>
      <Sider style={{ background: colorBgContainer }} collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className=' flex justify-center items-center mt-2'>{collapsed == true ? <ExLogo w={'40px'} /> : <Logo w={'140px'} />}</div>
        <Menu theme="light" defaultSelectedKeys={['1']} mode="inline" items={items} style={{ border: 'none' }} />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <div className='dashboard'>
            <Menu theme="light" mode="horizontal" items={header} style={{ border: 'none', marginLeft: 'auto' }} />
          </div>
        </Header>
        <Content style={{ margin: '0 16px', }} >
          <div className=' text-2xl text-[#259A75] pt-2 font-semibold'>Professional Dashboard</div>
          <Breadcrumb style={{ margin: '16px 0',}} items={BreadData}/>
          <DashboardContent/>
        </Content>
        <EQFooter />
      </Layout>
    </Layout>
  );
};
export default Dashboard;