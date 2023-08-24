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
    maintainAspectRatio: false,
    plugins: {
      legend:{
      position: 'bottom',
      align:'start'
    }
    },
    scales: {
      x:{
        title: {
          display: true,
          text: 'Clicks',
        }
      },
      y:{
        title: {
          display: true,
          text: '(단위: k) $'
        }
      },
    },
  }
}); //mdn window.resize chart.js reposive 문서 확인

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

am5.ready(function() {

// Create root element
// https://www.amcharts.com/docs/v5/getting-started/#Root_element
var root = am5.Root.new("chartdiv");

// Set themes
// https://www.amcharts.com/docs/v5/concepts/themes/
root.setThemes([
  am5themes_Animated.new(root)
]);

// Create chart
// https://www.amcharts.com/docs/v5/charts/radar-chart/
var chart = root.container.children.push(
  am5radar.RadarChart.new(root, {
    panX: false,
    panY: false,
    wheelX: "panX",
    wheelY: "zoomX",
    innerRadius: am5.percent(40),
    radius: am5.percent(70),
    arrangeTooltips: false
  })
);

// Add cursor
// https://www.amcharts.com/docs/v5/charts/radar-chart/#Cursor
var cursor = chart.set("cursor", am5radar.RadarCursor.new(root, {
  behavior: "zoomX"
}));

cursor.lineY.set("visible", false);

// Create axes and their renderers
// https://www.amcharts.com/docs/v5/charts/radar-chart/#Adding_axes
var xRenderer = am5radar.AxisRendererCircular.new(root, {
  minGridDistance: 30
});
xRenderer.labels.template.setAll({
  textType: "radial",
  radius: 10,
  paddingTop: 0,
  paddingBottom: 0,
  centerY: am5.p50,
  fontSize: "0.8em"
});

xRenderer.grid.template.setAll({
  location: 0.5,
  strokeDasharray: [2, 2]
});

var xAxis = chart.xAxes.push(
  am5xy.CategoryAxis.new(root, {
    maxDeviation: 0,
    categoryField: "name",
    renderer: xRenderer,
    tooltip: am5.Tooltip.new(root, {})
  })
);

var yRenderer = am5radar.AxisRendererRadial.new(root, {
  minGridDistance: 30
});

var yAxis = chart.yAxes.push(
  am5xy.ValueAxis.new(root, {
    renderer: yRenderer
  })
);

yRenderer.grid.template.setAll({
  strokeDasharray: [2, 2]
});

// Create series
// https://www.amcharts.com/docs/v5/charts/radar-chart/#Adding_series
var series1 = chart.series.push(
  am5radar.RadarLineSeries.new(root, {
    name: "Cash held outside",
    xAxis: xAxis,
    yAxis: yAxis,
    valueYField: "value1",
    categoryXField: "name"
  })
);

series1.strokes.template.setAll({
  strokeOpacity: 0
});

series1.fills.template.setAll({
  visible: true,
  fillOpacity: 0.5
});

var series2 = chart.series.push(
  am5radar.RadarLineSeries.new(root, {
    name: "Cash held in US",
    xAxis: xAxis,
    yAxis: yAxis,
    valueYField: "value2",
    categoryXField: "name",
    stacked: true,
    tooltip: am5.Tooltip.new(root, {
      labelText: "Outside: {value1}\nInside:{value2}"
    })
  })
);

series2.strokes.template.setAll({
  strokeOpacity: 0
});

series2.fills.template.setAll({
  visible: true,
  fillOpacity: 0.5
});

var legend = chart.radarContainer.children.push(
  am5.Legend.new(root, {
    width: 150,
    centerX: am5.p50,
    centerY: am5.p50
  })
);
legend.data.setAll([series1, series2]);

// Set data
// https://www.amcharts.com/docs/v5/charts/radar-chart/#Setting_data
var data = [
  {
    name: "Openlane",
    value1: 160.2,
    value2: 66.9
  },
  {
    name: "Yearin",
    value1: 150.1,
    value2: 50.5
  },
  {
    name: "Goodsilron",
    value1: 120.7,
    value2: 32.3
  },
  {
    name: "Condax",
    value1: 89.4,
    value2: 74.5
  },
  {
    name: "Opentech",
    value1: 78.5,
    value2: 29.7
  },
  {
    name: "Golddex",
    value1: 77.6,
    value2: 102.2
  },
  {
    name: "Isdom",
    value1: 69.8,
    value2: 22.6
  },
  {
    name: "Plusstrip",
    value1: 63.6,
    value2: 45.3
  },
  {
    name: "Kinnamplus",
    value1: 59.7,
    value2: 12.8
  },
  {
    name: "Zumgoity",
    value1: 54.3,
    value2: 19.6
  },
  {
    name: "Stanredtax",
    value1: 52.9,
    value2: 96.3
  },
  {
    name: "Conecom",
    value1: 42.9,
    value2: 11.9
  },
  {
    name: "Zencorporation",
    value1: 40.9,
    value2: 16.8
  },
  {
    name: "Iselectrics",
    value1: 39.2,
    value2: 9.9
  },
  {
    name: "Treequote",
    value1: 36.6,
    value2: 36.9
  },
  {
    name: "Sumace",
    value1: 34.8,
    value2: 14.6
  },
  {
    name: "Lexiqvolax",
    value1: 32.1,
    value2: 35.6
  },
  {
    name: "Sunnamplex",
    value1: 31.8,
    value2: 5.9
  },
  {
    name: "Faxquote",
    value1: 29.3,
    value2: 14.7
  },
  {
    name: "Donware",
    value1: 23.0,
    value2: 2.8
  },
  {
    name: "Warephase",
    value1: 21.5,
    value2: 12.1
  },
  {
    name: "Donquadtech",
    value1: 19.7,
    value2: 10.8
  },
  {
    name: "Nam-zim",
    value1: 15.5,
    value2: 4.1
  },
  {
    name: "Y-corporation",
    value1: 14.2,
    value2: 11.3
  }
];

series1.data.setAll(data);
series2.data.setAll(data);
xAxis.data.setAll(data);

// Animate chart and series in
// https://www.amcharts.com/docs/v5/concepts/animations/#Initial_animation
series1.appear(1000);
series2.appear(1000);
chart.appear(1000, 100);

}); // end am5.ready()