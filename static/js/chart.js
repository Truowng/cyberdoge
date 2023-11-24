Highcharts.chart('container', {
    chart: {
        type: 'pie',
        plotBackgroundColor: null,
        backgroundColor: null,
        width: 490,
        height: 490,
    },
    title: {
        text: '',
    },
    tooltip: {
        pointFormat: '<b>{point.percentage:.1f}%</b>'
    },
    credits: {
        enabled: false
    },
    accessibility: {
      point: {
        valueSuffix: '%'
      }
    },
    plotOptions: {
        pie: {
            states: {
                inactive: {
                    opacity: 0.4
                }
            },
            borderWidth: 0,
            allowPointSelect: true,
            cursor: 'pointer', 
            dataLabels: {
                enabled: true,
                distance: -25,
                format: '',
                style: {
                    fontSize: '12px',
                    fontFamily: 'Helvetica, Arial, sans-serif',
                    fontWeight: 'bold',
                    color: '#fff',
                    textOutline: 'none'
                },
                background: {
                    enabled: false,

                },
                dropShadow: {
                    enabled: false,
                }
            }, 
            showInLegend: false,
        },
    }, 
    series: [{
        type: 'pie',
        innerSize: '60%',
        data: [{
            name: 'Burned',
            y: 50,
            color: '#AFC5FF',
          }, {
            name: 'Liquidity',
            color: '#FDEBB3',
            y: 30
          },  {
            name: 'Marketing',
            color: '#ACF2C4',
            y: 12
          }, {
            name: 'Technology',
            color: '#CDBDF3',
            y: 7
          }, {
            name: 'Airdrop',
            color: '#E89F8E',
            y: 1
          }]
    }]

  });
