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

// Line chart data
export const LineseriesData = [{
    name: "Result",
    data: [10,]
}];
export const LineoptionsData = (title) => {
    const optionsData = {
        chart: {
            height: 350,
            type: 'line',
            zoom: {
                enabled: false
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'straight'
        },
        title: {
            text: title,
            align: 'left'
        },
        grid: {
            row: {
                colors: ['#f3f3f3', 'transparent'],
                opacity: 0.5
            },
        },
        xaxis: {
            categories: ['15/12/2024',],
        }
    };
    return optionsData;
}
export const Competency = ['Self-Awareness', 'Self-Management', 'Social Awareness', 'Relationship Skills', 'Responsible Decision Making', 'Motivation']