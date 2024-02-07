import { Breadcrumb, Button, Card, Col, Progress, Row, Skeleton, Table, theme } from 'antd'
import ReactApexChart from 'react-apexcharts';
import InfiniteScroll from 'react-infinite-scroll-component';
import { BarChart, DashTableData, DounutChart, columns } from '../../db/DashboardData';
import { AreaChartOutlined, HomeOutlined, SolutionOutlined, SoundFilled, UserOutlined } from '@ant-design/icons';
import useSpeechSynthesis from '../../components/hook/useSpeechSynthesis';
import { useState } from 'react';
import { Divider } from 'antd';
import { List } from 'antd';
import { Avatar } from 'antd';
import { useEffect } from 'react';
import { Drawer } from 'antd';
import { AssessmentResult, Competency, LineoptionsData, LineseriesData } from '../../db/Result';
import BreadcrumbItem from 'antd/es/breadcrumb/BreadcrumbItem';
import { Content } from 'antd/es/layout/layout';

const DashboardHome = () => {
    const { token: { colorBgContainer, borderRadiusLG }, } = theme.useToken();
    // speaker start
    const text = 'This is your hub to access your Emotional Intelligence 360. You can begin, resume, view, and compare your EQ assessments. You can also have a 3rd party colleague asses your EQ and see the results.'
    const { speak, cancel } = useSpeechSynthesis();
    const [isplaying, setIsPlaying] = useState(false)
    const playing = () => {
        isplaying ? cancel() : speak({ text })
        setIsPlaying(!isplaying)
    }
    // speaker end 

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

    // drawer hook start
    const [open, setOpen] = useState(false)
    const [userData, setUserData] = useState([])
    const { key } = userData
    const id = parseInt(key) - 1
    // drawer hook end

    // results fetch
    const { donutChart, progress } = AssessmentResult[!id ? 0 : id]
    // result fetch end

    // seeMore
    const [seeMore, setSeeMore] = useState(false)
    const [moreGraph, setMoreGraph] = useState(false)
    const handleMore = () => {
        seeMore ? setSeeMore(false) : setSeeMore(true)
        setSeeMore(!seeMore)
    }
    const handleGraph = () => {
        moreGraph ? setMoreGraph(false) : setMoreGraph(true)
        setMoreGraph(!moreGraph)
    }

    return (
        <Content style={{ margin: '0 16px', }} >
            <div className=' text-2xl text-[#259A75] pt-2 font-semibold'>Professional Dashboard</div>
            <Breadcrumb style={{ margin: '16px 0',fontSize:'16px' }} >
                <BreadcrumbItem><HomeOutlined style={{color: '#4dcb02',paddingRight:'8px'}}/>Dashboard</BreadcrumbItem>
            </Breadcrumb>
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
                        <div id="scrollableDiv" style={{ height: 339, padding: '0 16px', border: '1px solid rgba(140, 140, 140, 0.35)', borderRadius: '10px' }}>

                            {/* assessment table start */}
                            <Table columns={columns} dataSource={DashTableData(setOpen, setUserData)} scroll={{ y: 230 }} />
                            {/* assessment table end */}

                            {/* result section start */}
                            <Drawer
                                title={
                                    <div style={{ display: 'flex' }}>
                                        <div>{userData.email}</div>
                                        <div style={{ marginLeft: 'auto' }}>{userData.date}</div>
                                    </div>
                                } onClose={() => setOpen(false)} open={open} size='large'>

                                {/* donut chart & week progress start */}
                                <Row style={{ alignItems: 'center' }}>
                                    <Col lg={12} md={24} sm={24}>
                                        <ReactApexChart options={donutChart.options} series={donutChart.series} type="donut" />
                                    </Col>
                                    <Col lg={12} md={24} sm={24}>
                                        {progress.map((item, index) => {
                                            return (
                                                <Row gutter={[24, 8]} key={index}>
                                                    <Col lg={17}><Progress percent={item.value} strokeColor={item.color} /></Col>
                                                    <Col lg={7}>{item.name}</Col>
                                                </Row>
                                            )
                                        })}
                                    </Col>
                                </Row>
                                {/* donut chart & week progress end */}

                                <Divider style={{ borderWidth: '2px' }} />

                                {/* progress start */}

                                <div className='text-center text-[#259A75] font-semibold my-5 text-xl'>Progress</div>
                                <Row gutter={[16, 16]}>
                                    {Competency.map((value, index) => {
                                        if (index == 0 || index == 1) {
                                            return (
                                                <Col lg={12} md={24} sm={24} key={index}>
                                                    <Card title={<div style={{ textAlign: 'center', paddingTop: "2px" }}> {value} <br /> <Progress percent={50} strokeColor={'#c3839f'} /></div>} style={{ background: colorBgContainer, boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}>
                                                        <Row style={{ alignItems: 'center', marginBottom: '5px' }}>
                                                            <Col lg={14}>Emotional Awerness</Col>
                                                            <Col lg={10} style={{ color: '#ffb800' }}>Exceeding</Col>
                                                        </Row>
                                                        <Row style={{ alignItems: 'center', marginBottom: '5px' }}>
                                                            <Col lg={14}>Self-Perception</Col>
                                                            <Col lg={10} style={{ color: '#c3839f' }}>Developing</Col>
                                                        </Row>
                                                        <Row style={{ alignItems: 'center' }}>
                                                            <Col lg={14}>Optimistic Outlook</Col>
                                                            <Col lg={10} style={{ color: '#c3839f' }}>Developing</Col>
                                                        </Row>
                                                    </Card>
                                                </Col>
                                            )
                                        }
                                    })}

                                    {/* seemore section start */}

                                    {!seeMore ? '' : Competency.map((value, index) => {
                                        if (index == 0 || index == 1) return null
                                        return (
                                            <Col lg={12} md={24} sm={24} key={index}>
                                                <Card title={<div style={{ textAlign: 'center', paddingTop: "2px" }}> {value} <br />
                                                    <Progress percent={50} strokeColor={'#c3839f'} /></div>}
                                                    style={{ background: colorBgContainer, boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}
                                                >
                                                    <Row style={{ alignItems: 'center', marginBottom: '5px' }}>
                                                        <Col lg={14}>Emotional Awerness</Col>
                                                        <Col lg={10} style={{ color: '#ffb800' }}>Exceeding</Col>
                                                    </Row>
                                                    <Row style={{ alignItems: 'center', marginBottom: '5px' }}>
                                                        <Col lg={14}>Self-Perception</Col>
                                                        <Col lg={10} style={{ color: '#c3839f' }}>Developing</Col>
                                                    </Row>
                                                    <Row style={{ alignItems: 'center' }}>
                                                        <Col lg={14}>Optimistic Outlook</Col>
                                                        <Col lg={10} style={{ color: '#c3839f' }}>Developing</Col>
                                                    </Row>
                                                </Card>
                                            </Col>
                                        )
                                    })}
                                    <Col span={24} style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                                        <Button onClick={handleMore}>{seeMore ? 'See Less' : 'See More'}</Button>
                                    </Col>
                                    {/* seemore section end */}

                                </Row>
                                {/* progress end */}

                                <Divider style={{ borderWidth: '2px' }} />

                                {/* graph start */}
                                <div className='text-center text-[#259A75] font-semibold my-5 text-xl'>Graphs</div>

                                <Row gutter={[24, 16]}>
                                    {Competency.map((title, index) => {
                                        if (index == 0 || index == 1) {
                                            return (
                                                <Col lg={12} md={24} sm={24} key={index}>
                                                    <Row style={{ boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', padding: '10px', borderRadius: borderRadiusLG, height: '100%' }}>
                                                        <Col>
                                                            <ReactApexChart options={LineoptionsData(title)} series={LineseriesData} type="line" />
                                                        </Col>
                                                    </Row>
                                                </Col>
                                            )
                                        }
                                    })}

                                    {/* showmore section start */}

                                    {!moreGraph ? '' : Competency.map((title, index) => {
                                        if (index == 0 || index == 1) return null
                                        return (
                                            <Col lg={12} md={24} sm={24} key={index}>
                                                <Row style={{ boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', padding: '10px', borderRadius: borderRadiusLG, height: '100%' }}>
                                                    <Col>
                                                        <ReactApexChart options={LineoptionsData(title)} series={LineseriesData} type="line" />
                                                    </Col>
                                                </Row>
                                            </Col>
                                        )
                                    })}
                                    <Col span={24} style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                                        <Button onClick={handleGraph}>{moreGraph ? 'See Less' : 'See More'}</Button>
                                    </Col>

                                    {/* show more section end */}

                                </Row>
                                {/* graph end */}

                            </Drawer>
                            {/* result section end */}

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
        </Content>
    )
}

export default DashboardHome
