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
    responsive: false,
    Legend:{
      position:top
    },
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

