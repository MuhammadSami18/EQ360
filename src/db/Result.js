export const AssessmentResult = [
    {
        donutChart: {
            series: [44, 55, 18],
            options: {
                labels: ['Meeting', 'Development', 'Exceeding'],
                chart: {
                    type: 'donut',
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }]
            }
        },
        progress: [
            {
                name: 'Emerging',
                value: 50,
                color: '#c3839f'
            },
            {
                name: 'Developing',
                value: 80,
                color: '#324b71'
            },
            {
                name: 'Exceeding',
                value: 95,
                color: '#ddab69'
            },
            {
                name: 'Meeting',
                value: 30,
                color: '#4ca981'
            }
        ],
    },
    {
        donutChart: {
            series: [60, 20, 58],
            options: {
                labels: ['Meeting', 'Development', 'Exceeding'],
                chart: {
                    type: 'donut',
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }]
            }
        },
        progress: [
            {
                name: 'Emerging',
                value: 30,
                color: '#4ca981'
            },
            {
                name: 'Developing',
                value: 95,
                color: '#ddab69'
            },
            {
                name: 'Exceeding',
                value: 70,
                color: '#324b71'
            },
            {
                name: 'Meeting',
                value: 50,
                color: '#c3839f'
            }
        ]
    },
    {
        donutChart: {
            series: [80, 90, 18],
            options: {
                labels: ['Meeting', 'Development', 'Exceeding'],
                chart: {
                    type: 'donut',
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }]
            }
        },
        progress: [
            {
                name: 'Emerging',
                value: 95,
                color: '#ddab69'
            },
            {
                name: 'Developing',
                value: 20,
                color: '#4ca981'
            },
            {
                name: 'Exceeding',
                value: 50,
                color: '#c3839f'
            },
            {
                name: 'Meeting',
                value: 70,
                color: '#324b71'
            }
        ]
    },
    {
        donutChart: {
            series: [36, 25, 18],
            options: {
                labels: ['Meeting', 'Development', 'Exceeding'],
                chart: {
                    type: 'donut',
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }]
            }
        },
        progress: [
            {
                name: 'Emerging',
                value: 80,
                color: '#324b71'
            },
            {
                name: 'Developing',
                value: 90,
                color: '#ddab69'
            },
            {
                name: 'Exceeding',
                value: 50,
                color: '#c3839f'
            },
            {
                name: 'Meeting',
                value: 20,
                color: '#4ca981'
            }
        ]
    }
]

// scatter chart data
export const ScatterData = [
    {
        name: "Self-Awarness",
        data: [
            [16.4, 5.4]
        ]
    },
];

export const ScatterOptionsData = {
    chart: {
        height: 350,
        type: 'scatter',
        zoom: {
            enabled: true,
            type: 'xy'
        }
    },
    xaxis: {
        tickAmount: 10,
        labels: {
            formatter: function (val) {
                return parseFloat(val).toFixed(1)
            }
        }
    },
    yaxis: {
        tickAmount: 7
    }
};
export const Competency=['Self-Awareness','Self-Management','Social Awareness','Relationship Skills','Responsible Decision Making','Motivation']