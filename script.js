// https://ui-themez.smartinnovates.net/items/geekfolio/dark/page-about.html
//chart.js
const ctx = document.getElementById('myChart');
const bubble = document.getElementById('bubbleChart');

new Chart(ctx, {
  type: 'doughnut',
  data: {
      datasets: [{
        label: 'Projects Earnings in April',
        data: [100, 300, 100],
        backgroundColor: [
          '#E4E6EF',
          'darkred',
          'darkorange'
        ],
        hoverOffset: 4,
      }]
  },
  // options: {
  //   responsive: false,
  //   legend:{
  //       position:'top'
  //   }
  // }
});

new Chart(bubble, {
  type: 'bubble',
  data: {
  datasets: [
    {label: 'Social Campaigns',
    data: [{ x:700, y:0, r:0}, { x:0, y:700, r:0}, { x:125, y:300, r:40}],
    backgroundColor: '#3E97FF'},
    {label: 'Email Newsletter',
    data: [{ x:250, y:350, r:35}],
    backgroundColor: '#50cd89'},
    {label: 'courses',
    data: [{ x:350, y:450, r:30}],
    backgroundColor: '#ffc700'},
    {label: 'courses',
    data: [{ x:450, y:250, r:25}],
    backgroundColor: '#f1416c'},
    {label: 'courses',
    data: [{ x:500, y:500, r:30}],
    backgroundColor: '#7239ea'},
    {label: 'courses',
    data: [{ x:600, y:250, r:28}],
    backgroundColor: 'rgb(67, 206, 215)'},
  ]},
  options: {
    reponsive: false,
    scales: {
      x:{
        title: {
          display: true,
          text: 'Clicks'
        }
      },
      y:{
        title: {
          display: true,
          text: '(단위: k) $'
        }
      }
    },
  }
});

//line
var options = {
  series: [{
  name: 'Inbound Calls',
  data: [31, 40, 28, 51, 42, 109, 100]
}, {
  name: 'Outbound CallS',
  data: [11, 32, 45, 32, 34, 52, 41]
}],
  chart: {
  height: 350,
  type: 'area'
},
dataLabels: {
  enabled: false
},
stroke: {
  curve: 'smooth'
},
xaxis: {
  type: 'datetime',
  categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
},
tooltip: {
  x: {
    format: 'dd/MM/yy HH:mm'
  },
},
};

var chart = new ApexCharts(document.querySelector("#spline-chart"), options);
chart.render();

//arealine-chart
var options = {
  chart: {
    height: 280,
    type: "area"
  },
  dataLabels: {
    enabled: false
  },
  series: [
    {
      name: "Earings",
      data: [45, 52, 38, 45, 19, 23, 2]
    }
  ],
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.7,
      opacityTo: 0.9,
      stops: [0, 90, 100]
    }
  },
  xaxis: {
    categories: [
      "10AM",
      "10.30AM",
      "11AM",
      "11.30AM",
      "12PM",
      "1PM",
      "2PM"
    ]
  }
};

var chart2 = new ApexCharts(document.querySelector("#arealine-chart"), options);

chart2.render();
