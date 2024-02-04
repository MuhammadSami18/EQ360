import { Card, Col, Row, Skeleton, Table, theme } from 'antd'
import ReactApexChart from 'react-apexcharts';
import InfiniteScroll from 'react-infinite-scroll-component';
import { BarChart, DounutChart, Tabledata, columns } from './DashboardData';
import { AreaChartOutlined, SolutionOutlined, SoundFilled, UserOutlined } from '@ant-design/icons';
import useSpeechSynthesis from '../hook/useSpeechSynthesis';
import { useState } from 'react';
import { Divider } from 'antd';
import { List } from 'antd';
import { Avatar } from 'antd';
import { useEffect } from 'react';

const DashboardContent = () => {
    const { token: { colorBgContainer, borderRadiusLG }, } = theme.useToken();
    const text = 'This is your hub to access your Emotional Intelligence 360. You can begin, resume, view, and compare your EQ assessments. You can also have a 3rd party colleague asses your EQ and see the results.'
    const { speak, cancel } = useSpeechSynthesis();
    const [isplaying, setIsPlaying] = useState(false)
    const playing = () => {
        isplaying ? cancel() : speak({ text })
        setIsPlaying(!isplaying)
    }

    // users data start
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const loadMoreData = () => {
        if (loading) return;
        setLoading(true);
        fetch('https://randomuser.me/api/?results=10&inc=name,gender,email,nat,picture&noinfo')
            .then((res) => res.json())
            .then((body) => {
                setData([...data, ...body.results]);
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
            });
    };
    useEffect(() => {
        loadMoreData();
    }, []);
    //user data end
    return (
        <>
            <Row style={{ padding: 24, background: colorBgContainer, borderRadius: borderRadiusLG, }} >
                <div className=' text-2xl text-[#259A75] font-semibold'>Good Afternoon, Muhammad Sami</div>
                <div className='text-[#5e6e82] leading-6'>{text}
                    <button className='ml-2 px-2 hover:bg-slate-100 text-[#259A75]' onClick={playing}><SoundFilled /></button>
                </div>
            </Row>
            <Card style={{ marginTop: '10px', background: colorBgContainer, borderRadius: borderRadiusLG, }} title={<div style={{ fontSize: '20px', color: '#279A75' }}><AreaChartOutlined /> Stats</div>} >
                <Row gutter={24}>
                    <Col lg={16} md={12} sm={24} xs={24}>
                        <ReactApexChart options={BarChart.options} series={BarChart.series} type="bar" width={'100%'} />
                    </Col>
                    <Col lg={8} md={12} sm={24} xs={24} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <ReactApexChart options={DounutChart.options} series={DounutChart.series} type="donut" width={'400px'} />
                    </Col>
                </Row>
            </Card>
            <Row gutter={[12, 16]}>
                <Col lg={16} md={12} sm={24} xs={24}>
                    <Card style={{ marginTop: '10px', background: colorBgContainer, borderRadius: borderRadiusLG, }} title={<div style={{ fontSize: '20px', color: '#279A75' }}><SolutionOutlined /> Assessments</div>} >
                        <div id="scrollableDiv" style={{ height: 339, overflow: 'auto', padding: '0 16px', border: '1px solid rgba(140, 140, 140, 0.35)', borderRadius: '10px' }}>
                                <Table columns={columns} dataSource={Tabledata}/>
                        </div>
                    </Card>
                </Col>
                <Col lg={8} md={12} sm={24} xs={24}>
                    <Card style={{ marginTop: '10px', background: colorBgContainer, borderRadius: borderRadiusLG, }} title={<div style={{ fontSize: '20px', color: '#279A75' }}><UserOutlined /> Users</div>} >
                        <div id="scrollableDiv" style={{ height: 339, overflow: 'auto', padding: '0 16px', border: '1px solid rgba(140, 140, 140, 0.35)', borderRadius: '10px' }}>
                            <InfiniteScroll dataLength={data.length} next={loadMoreData} hasMore={data.length < 50}
                                loader={
                                    <Skeleton avatar paragraph={{ rows: 1, }} active />
                                }
                                endMessage={<Divider plain>It is all, nothing more 🤐</Divider>} scrollableTarget="scrollableDiv">
                                <List dataSource={data} renderItem={(item) => (
                                    <List.Item key={item.email}>
                                        <List.Item.Meta avatar={<Avatar src={item.picture.large} />} title={<div>{item.name.last}</div>} description={item.email} />
                                        <div>Content</div>
                                    </List.Item>
                                )} />
                            </InfiniteScroll>
                        </div>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default DashboardContent
