import { HomeOutlined } from '@ant-design/icons'
import { Breadcrumb } from 'antd'
import BreadcrumbItem from 'antd/es/breadcrumb/BreadcrumbItem'
import { Content } from 'antd/es/layout/layout'
import React from 'react'

const DashboardAccess = () => {
  return (
    <Content style={{ margin: '0 16px', }} >
      <div className=' text-2xl text-[#259A75] pt-2 font-semibold'>Account Access</div>
      <Breadcrumb style={{ margin: '16px 0', fontSize: '16px',color:'#4dcb02' }} >
        <BreadcrumbItem><HomeOutlined style={{ paddingRight: '8px' }} />Dashboard</BreadcrumbItem>
        <BreadcrumbItem>Access Account</BreadcrumbItem>
      </Breadcrumb>
    </Content>
  )
}

export default DashboardAccess
