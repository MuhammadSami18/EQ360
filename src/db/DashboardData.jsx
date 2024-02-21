import { DashboardOutlined, LogoutOutlined, QuestionCircleOutlined, TeamOutlined, UserOutlined, } from '@ant-design/icons';
import { Button } from 'antd';
import { Link } from 'react-router-dom';


function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}
export const items = [
    getItem('Dashboard', '1', <Link to={'/dashboard'}><DashboardOutlined /></Link>),
    getItem('Childern', '9', <Link to={'/dashboard/children'}><TeamOutlined /></Link>)
];
export const header = [
    getItem('MUHAMMAD SAMI', '1'),
    getItem('User Info', '2', <UserOutlined />),
    getItem('Dashboard', '3', <DashboardOutlined />),
    getItem('Help', '4', <Link to={'/help'}><QuestionCircleOutlined /></Link>),
    getItem('Logout', '5', <Link to={'/signin'}><LogoutOutlined /></Link>),
]
export const BarChart = {
    series: [
        {
            name: 'Net Profit',
            data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
        },
        {
            name: 'Revenue',
            data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
        },
        {
            name: 'Free Cash Flow',
            data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
        },
    ],
    options: {
        chart: {
            type: 'bar',
            height: 350,
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '55%',
                endingShape: 'rounded',
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent'],
        },
        xaxis: {
            categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
        },
        yaxis: {
            title: {
                text: '$ thousands',
            },
        },
        fill: {
            opacity: 1,
        },
        tooltip: {
            y: {
                formatter: (val) => `$ ${val} thousands`,
            },
        },
    },
};

export const DounutChart = {
    series: [44, 55, 41, 17, 15],
    options: {
        chart: {
            type: 'donut',
        },
        responsive: [
            {
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200,
                    },
                    legend: {
                        position: 'bottom',
                    },
                },
            },
        ],
    },
};

// table data starts
export const columns = [
    {
        title: 'User Name',
        dataIndex: 'name',
        filters: [
            {
                text: 'Joe',
                value: 'Joe',
            },
            {
                text: 'Category 1',
                value: 'Category 1',
            },
            {
                text: 'Category 2',
                value: 'Category 2',
            },
        ],
        filterMode: 'tree',
        filterSearch: true,
        onFilter: (value, record) => record.name.startsWith(value),
        width: '20%',
    },
    {
        title: 'Assessment For',
        dataIndex: 'email',
        width: '30%',
    },
    {
        title: 'Date',
        dataIndex: 'date',
        sorter: (a, b) => a.age - b.age,
        width: '20%',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        filters: [
            {
                text: 'London',
                value: 'London',
            },
            {
                text: 'New York',
                value: 'New York',
            },
        ],
        onFilter: (value, record) => record.address.startsWith(value),
        filterSearch: true,
        width: '40%',
    },
    {
        title: 'Action',
        dataIndex: 'action',
        width: '20%'
    }
];

export const DashTableData = (setOpen, setUserData) => {
    const Tabledata = [
        {
            key: '1',
            name: 'John Brown',
            email: 'carwel@crewal.com',
            date: '15/03/2024',
            address: 'New York No. 1 Lake Park',
            action: <Button onClick={() => { setOpen(true), setUserData(Tabledata[0]) }}>See Result</Button>,
        },
        {
            key: '2',
            name: 'Jim Green',
            email: 'carwel@crewal.com',
            date: '15/03/2024',
            address: 'London No. 1 Lake Park',
            action: <Button onClick={() => { setOpen(true), setUserData(Tabledata[1]) }}>See Result</Button>
        },
        {
            key: '3',
            name: 'Joe Black',
            email: 'carwel@crewal.com',
            date: '15/03/2024',
            address: 'Sydney No. 1 Lake Park',
            action: <Button onClick={() => { setOpen(true), setUserData(Tabledata[2]) }}>See Result</Button>
        },
        {
            key: '4',
            name: 'Jim Red',
            email: 'carwel@crewal.com',
            date: '15/03/2024',
            address: 'London No. 2 Lake Park',
            action: <Button onClick={() => { setOpen(true), setUserData(Tabledata[3]) }}>See Result</Button>
        },
    ];
    return Tabledata
}

// table data end

// child table data start
export const ChildColumns = [
    {
        title: 'First Name',
        dataIndex: 'fname',
    },
    {
        title: 'Last Name',
        dataIndex: 'lname',
    },
    {
        title: 'Email',
        dataIndex: 'email',
    },
    {
        title: 'Grade',
        dataIndex: 'grade',
    },
    {
        title:'Last Assigned Assessment',
        dataIndex: 'lastAssess',
    },
    {
        title: 'Last Assessment Status',
        dataIndex: 'status',
    }
];
export const ChildData = [
    // {
    //     key: '1',
    //     fname: 'Muhammad',
    //     lname: 'Sami',
    //     email: 'm.sami@85.com',
    //     grade:'15th',
    //     zip: '12345'
    // },
];
// child table data end