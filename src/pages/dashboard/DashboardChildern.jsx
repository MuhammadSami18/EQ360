import { HomeOutlined, TeamOutlined } from '@ant-design/icons'
import { Breadcrumb, Button, Card, Modal, theme } from 'antd'
import BreadcrumbItem from 'antd/es/breadcrumb/BreadcrumbItem'
import { Content } from 'antd/es/layout/layout'
import { useState } from 'react'
import FormName from '../../components/form/FormName'
import FormEmail from '../../components/form/FormEmail'
import ChildGrade from '../../components/form/ChildGrade'

const DashboardChildren = () => {
  const { token: { colorBgContainer, borderRadiusLG }, } = theme.useToken();
  const [isModalOpen, setIsModalOpen] = useState(false);


  return (
    <Content style={{ margin: '0 16px', }} >
      <div className=' text-2xl text-[#259A75] pt-2 font-semibold'>Childrens</div>
      <Breadcrumb style={{ margin: '16px 0', fontSize: '16px', color: '#4dcb02' }} >
        <BreadcrumbItem><HomeOutlined style={{ paddingRight: '8px' }} />Dashboard</BreadcrumbItem>
        <BreadcrumbItem>Children</BreadcrumbItem>
      </Breadcrumb>
      <Card style={{ marginTop: '10px', background: colorBgContainer, borderRadius: borderRadiusLG, }}
        title={<div style={{ fontSize: '20px', color: '#279A75' }}><TeamOutlined /> Children</div>}
        extra={<Button onClick={() => setIsModalOpen(true)}>Add Child</Button>}
      >
        <Modal title={<div style={{textAlign:'center',fontSize:'22px',color:'#259A75'}}>Add Child</div>} open={isModalOpen} onOk={() => setIsModalOpen(false)} onCancel={() => setIsModalOpen(false)}>
          <FormName/>
          <FormEmail chilemail="Child's" chilpas="Child's"/>
          <ChildGrade/>
        </Modal>
        {/* <Row gutter={24}>
          <Col lg={16} md={12} sm={24} xs={24}>
            <ReactApexChart options={BarChart.options} series={BarChart.series} type="bar" width={'100%'} />
          </Col>
          <Col lg={8} md={12} sm={24} xs={24} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <ReactApexChart options={DounutChart.options} series={DounutChart.series} type="donut" width={'400px'} />
          </Col>
        </Row> */}
      </Card>
    </Content>
  )
}

export default DashboardChildren
