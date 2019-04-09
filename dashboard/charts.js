var ch1 = document.getElementById('chart1').getContext('2d');
var chart_1 = new Chart(ch1, {
    type:'bar',
    data: {
        labels: ['Enero','Febrero','Marzo','Abril'],
        datasets: [{
            label:'Produccion Tetramestral',
            data: [203, 154, 250, 173],
            backgroundColor: [ '#6a81a8', '#6a81a8','#6a81a8','#6a81a8']
            //borderColor: ['black','black','black','black'],
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

var ch2 = document.getElementById('chart2')
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
})