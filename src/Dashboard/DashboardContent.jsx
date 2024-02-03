import { Card, Col, Row, theme } from 'antd'
import ReactApexChart from 'react-apexcharts';
import { BarChart, DounutChart } from './DashboardData';

const DashboardContent = () => {
    const { token: { colorBgContainer, borderRadiusLG }, } = theme.useToken();


    return (
        <>
            <Row style={{ padding: 24, background: colorBgContainer, borderRadius: borderRadiusLG, }} >
                <div>Good Afternoon! MUHAMMAD SAMI</div>
            </Row>
            <Card style={{ marginTop: '10px', background: colorBgContainer, borderRadius: borderRadiusLG, }} title='Total Stats' >
                <Row gutter={24}>
                    <Col span={12}>
                        <ReactApexChart options={BarChart.options} series={BarChart.series} type="bar" width={'100%'} />
                    </Col>
                    <Col span={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <ReactApexChart options={DounutChart.options} series={DounutChart.series} type="donut" width={'400px'} />
                    </Col>
                </Row>
            </Card>
        </>
    )
}

export default DashboardContent
