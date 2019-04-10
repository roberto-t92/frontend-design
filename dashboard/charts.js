var ch1 = document.getElementById('chart1').getContext('2d');
var chart_1 = new Chart(ch1, {
    type:'bar',
    data: {
        labels: ['Enero','Febrero','Marzo','Abril','Mayo','Junio'],
        datasets: [{
            label:'Produccion Semestral',
            data: [203, 154, 250, 173, 120, 200],
            backgroundColor: [ '#6a81a8', '#6a81a8','#6a81a8','#6a81a8','#6a81a8','#6a81a8']
            //borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        },
        legend: {
            labels: {
                boxWidth: 0,
                fontSize: 16,
                fontFamily: "'Questrial', sans-serif"
            }
        },
        animation: {
            duration: 1000,
            easing: 'easeOutQuad'
        }/*,
        title: {
            display:true,
            text:'Datos Estadisticos',
            fontFamily: "'Questrial', sans-serif",
            fontSize:16
        }*/
    }
});

var ch2 = document.getElementById('chart2').getContext('2d');
var chart_2 = new Chart(ch2, {
    type:'line',
    data: {
        labels: ['Reynosa','GDL','CDMX','Saltillo','Monterrey'],
        datasets: [{
            label: 'Centros Operativos',
            data: [25, 30, 40, 50, 90],
            borderColor: 'black',
            pointBackgroundColor: 'black'
        }]
    },
    options: {
        legend: {
            labels: {
                boxWidth: 0,
                fontSize: 16,
                fontFamily: "'Questrial', sans-serif"
            }
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});

var ch3 = document.getElementById('chart3').getContext('2d');
var chart_3 = new Chart(ch3, {
    type:'doughnut',
    data: {
        labels: ['Logistica','Operaciones','Soporte','Mercadotecnia','Analisis'],
        datasets: [{
            data: [25, 30, 40, 50, 90],
            backgroundColor: [ '#6a81a8', '#d85b13','#bde023','#543959','#034b56'],
            borderWidth: 1
        }]
    },
    options: {
        legend: {
            labels: {
                boxWidth: 7,
                fontFamily: "'Questrial', sans-serif"
            }
        },
        responsive:true,
        cutoutPercentage: 65,
    }
});

var ch4 = document.getElementById('chart4').getContext('2d');
var chart_4 = new Chart(ch4, {
    type:'radar',
    data: {
        labels: ['Cold Calls','Email','Ads','Red Social','Carteles'],
        datasets: [{
            label:'Enero',
            data: [40,70,30,70,65],
            backgroundColor: ['rgb(107, 145, 206, 0.3)'],
            fill:true
        }, {
            label:'Febrero',
            data:[60,50,40,80,50],
            backgroundColor: ['rgb(255, 123, 0, 0.3)'],
            fill:true
        }, {
            label:'Marzo',
            data:[80,20,60,40,70],
            backgroundColor: ['rgb(23, 181, 97, 0.3)'],
            fill:true
        }]
    },
    options: {
        scale: {
            ticks: {
                beginAtZero:true,
                max:100
            }
        },
        title: {
            display:true,
            text:'Efectividad de Mercadotecnia',
            fontFamily: "'Questrial', sans-serif",
            fontSize:14
        },
        legend: {
            labels: {
                boxWidth: 8,
                fontFamily: "'Questrial', sans-serif"
            }
        }
    }
});

var ch5 = document.getElementById('chart5').getContext('2d');
var chart_5 = new Chart(ch5, {
    type:'bubble',
    data: {
        labels: ['uno','dos'],
        datasets: [{
            label:'Roberto',
            data:[{'x':20, 'y':40, 'r':20}, {
                   'x':70, 'y':20, 'r':10}, {
                   'x':90, 'y':70, 'r':10}
            ],
            backgroundColor:['rgb(219, 10, 10, 0.6)',
                             'rgb(219, 10, 10, 0.6)',
                             'rgb(219, 10, 10, 0.6)']
        }, {
            label:'Mariana',
            data:[{'x':40, 'y':20, 'r':15}, {
                   'x':60, 'y':50, 'r':30}, {
                   'x':80, 'y':40, 'r':15}
            ],
            backgroundColor:['rgb(23, 181, 97, 0.6)',
                             'rgb(23, 181, 97, 0.6)',
                             'rgb(23, 181, 97, 0.6)']
        }, {
            label:'Rodrigo',
            data:[{'x':10, 'y':30, 'r':10}, {
                   'x':30, 'y':70, 'r':20}, {
                   'x':60, 'y':90, 'r':15}
            ],
            backgroundColor:['rgb(0, 185, 226, 0.4)',
                             'rgb(0, 185, 226, 0.4)',
                             'rgb(0, 185, 226, 0.4)']
        }]
    },
    options: {
        legend: {
            labels: {
                fontSize: 14,
                boxWidth: 8,
                fontFamily: "'Questrial', sans-serif"
            }
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    max:100
                }//,
                //type: 'category',
                //labels: ['uno','dos','tres']
            }],
            xAxes: [{
                ticks: {
                    beginAtZero: true,
                    max:100
                }
            }]
        }
    }
});


