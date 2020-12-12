export const planetChartData = {
    type : 'line',
    data : {
        labels: ['a','b','c','d','e','f','g','h'],
        datasets :  [
            {
                label : '연습용이야 임마',
                data : [0,0,1,2,67,62,27,14],
                backgroundColor : [
                    'rgba(54,73,93, 0.5)',
                    'rgba(54,73,93, 0.5)',
                    'rgba(54,73,93, 0.5)',
                    'rgba(54,73,93, 0.5)',
                    'rgba(54,73,93, 0.5)',
                    'rgba(54,73,93, 0.5)',
                    'rgba(54,73,93, 0.5)',
                    'rgba(54,73,93, 0.5)',
                ],
                borderColor : [
                    '#36495d',
                    '#36495d',
                    '#36495d',
                    '#36495d',
                    '#36495d',
                    '#36495d',
                    '#36495d',
                    '#36495d',
                ],
                borderWidth: 3
            },
            {
                label :'papapapap',
                data : [4.8, 12.1, 12.7, 6.7, 139.8, 116.4, 50.7, 49.2],
                backgroundColor : [
                    'rgba(71, 183, 132, 0.5)',
                ],
                borderColor : [
                    '#47b784'
                ],
                borderWidth : 3
            }

        ]
    },
    options : {
        responsive : true,
        lineTension : 1,
        scales : {
            yAxes : [{
                ticks: {
                    beginAtZero : true,
                    padding : 25,
                }
            }]
        }
    }
}

export default planetChartData;