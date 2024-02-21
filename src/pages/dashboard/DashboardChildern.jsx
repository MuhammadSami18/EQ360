import { TeamOutlined } from '@ant-design/icons'
import { Breadcrumb, Button, Card, Checkbox, Modal, Table, theme } from 'antd'
import { Content } from 'antd/es/layout/layout'
import { useState } from 'react'
import FormName from '../../components/form/FormName'
import FormEmail from '../../components/form/FormEmail'
import ChildGrade from '../../components/form/ChildGrade'
import SchoolZip from '../../components/form/SchoolZip'
import ChildSchoolEmail from '../../components/form/ChildSchoolEmail'
import { ChildColumns, ChildData } from '../../db/DashboardData'

const DashboardChildren = () => {
  const { token: { colorBgContainer, borderRadiusLG }, } = theme.useToken();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [checkbox, setCheckbox] = useState(false)

  const handleCheck = (e) => {
    setCheckbox(e.target.checked)
  }
  return (
    <Content style={{ margin: '0 16px', }} >
      <div className=' text-2xl text-[#259A75] pt-2 font-semibold'>Childrens</div>
      <Breadcrumb style={{ margin: '16px 0', fontSize: '16px' }} items={
        [
          {
            title: 'Dashboard'
          },
          {
            title: 'Children'
          }
        ]
      } />
      <Card style={{ marginTop: '10px', background: colorBgContainer, borderRadius: borderRadiusLG, }}
        title={<div style={{ fontSize: '20px', color: '#279A75' }}><TeamOutlined /> Children</div>}
        extra={<Button onClick={() => setIsModalOpen(true)}>Add Child</Button>}
      >
        <Modal centered title={<div style={{ textAlign: 'center', fontSize: '22px', color: '#259A75', }}>Add Child</div>} open={isModalOpen} onOk={() => setIsModalOpen(false)} onCancel={() => setIsModalOpen(false)}>
          {!checkbox ? <>
            <FormName />
            <FormEmail chilemail="Child's" chilpas="Child's" />
            <ChildGrade />
            <SchoolZip />
          </>
            :
            <>
              <FormName />
              <ChildSchoolEmail />
            </>
          }
          <Checkbox onChange={handleCheck} style={{ marginTop: '20px', color: '#e71d68', fontWeight: 700 }}>Student already registered with a teacher? Click here!</Checkbox>
        </Modal>
        <Table columns={ChildColumns} dataSource={ChildData} style={{borderWidth:'1px',borderRadius:'10px'}}/>
      </Card>
    </Content>
  )
}

export default DashboardChildren
