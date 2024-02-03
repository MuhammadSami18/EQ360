import { Card, Col, Row, theme } from 'antd'
import ReactApexChart from 'react-apexcharts';
import { BarChart, DounutChart } from './DashboardData';
import { SoundFilled } from '@ant-design/icons';
import useSpeechSynthesis from '../hook/useSpeechSynthesis';

const DashboardContent = () => {
    const { token: { colorBgContainer, borderRadiusLG }, } = theme.useToken();
    const text = 'This is your hub to access your Emotional Intelligence 360. You can begin, resume, view, and compare your EQ assessments. You can also have a 3rd party colleague asses your EQ and see the results.'
    const { speak } = useSpeechSynthesis();
    const playText=()=>{
        speak(content)
    }
    return (
        <>
            <Row style={{ padding: 24, background: colorBgContainer, borderRadius: borderRadiusLG, }} >
                <div className=' text-2xl text-[#259A75] font-semibold'>Good Afternoon, Muhammad Sami</div>
                <div className='text-[#5e6e82] leading-6'>{text}
                    <button className='ml-2 px-2 hover:bg-slate-100 text-[#259A75]' onClick={() => speak({ text })}><SoundFilled /></button>
                </div>
            </Row>
            <Card style={{ marginTop: '10px', background: colorBgContainer, borderRadius: borderRadiusLG, }} title='Total Stats' >
                <Row gutter={24}>
                    <Col lg={16} md={12} sm={24} xs={24}>
                        <ReactApexChart options={BarChart.options} series={BarChart.series} type="bar" width={'100%'} />
                    </Col>
                    <Col lg={8} md={12} sm={24} xs={24} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <ReactApexChart options={DounutChart.options} series={DounutChart.series} type="donut" width={'400px'} />
                    </Col>
                </Row>
            </Card>
        </>
    )
}

export default DashboardContent
