
$(function () {
 
  var myChart = echarts.init(document.getElementById('main'));

  var option = {
    title: {
        text: 'Diagram of status'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['Vibration', 'Noise']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        },
        right: 30
    },
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name:'Vibration',
            type:'line',
            step: 'start',
            data:[98, 88, 64, 85, 88, 81, 82]
        },
        {
            name:'Noise',
            type:'line',
            step: 'middle',
            data:[71, 71, 81, 76, 77, 68, 85]
        },
        // {
        //     name:'Step End',
        //     type:'line',
        //     step: 'end',
        //     data:[450, 432, 401, 454, 590, 530, 510]
        // }
    ]
};


  myChart.setOption(option);
})