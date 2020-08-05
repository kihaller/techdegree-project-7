//Line Chart
Chart.defaults.global.defaultFontColor = "#A7A7A7";

var lineChart = new Chart(document.getElementById("line-chart"), {
  type: "line",
  data: {
    datasets: [
      {
        data: [
          { x: "2020-03-16 13:00:00", y: 0 },
          { x: "2020-03-23 13:00:00", y: 500 },
          { x: "2020-03-29 13:00:00", y: 1000 },
          { x: "2020-04-02 13:00:00", y: 750 },
          { x: "2020-04-12 13:00:00", y: 1250 },
          { x: "2020-04-19 13:00:00", y: 1750 },
          { x: "2020-04-23 13:00:00", y: 1250 },
          { x: "2020-05-03 13:00:00", y: 1500 },
          { x: "2020-05-10 13:00:00", y: 1000 },
          { x: "2020-05-17 13:00:00", y: 1500 },
          { x: "2020-05-24 13:00:00", y: 2000 },
        ],
        borderColor: "#7477BF",
        fill: true,
        backgroundColor: "#7477BF4D",
        borderWidth: 1,
        lineTension: 0,
        pointBorderColor: "#7477BF",
        pointRadius: 5,
        pointBackgroundColor: "#FFF",
      },
    ],
  },
  options: {
    maintainAspectRatio: false,

    legend: {
      display: false,
    },
    scales: {
      yAxes: [
        {
          ticks: {
            max: 2500,
            min: 0,
            stepSize: 500,
          },
        },
      ],
      xAxes: [
        {
          type: "time",
          time: {
            min: "2020-04-24 13:00:00",
            unit: "week",
          },
        },
      ],
    },
  },
});

document.getElementById("button-hourly").addEventListener("click", (event) => {
  lineChart.options.scales.xAxes[0].time.unit = "hour";
  lineChart.options.scales.xAxes[0].time.min = "2020-05-23 13:00:00";
  lineChart.update();
});

document.getElementById("button-daily").addEventListener("click", (event) => {
  lineChart.options.scales.xAxes[0].time.unit = "day";
  lineChart.options.scales.xAxes[0].time.min = "2020-05-17 13:00:00";
  lineChart.update();
});

document.getElementById("button-weekly").addEventListener("click", (event) => {
  lineChart.options.scales.xAxes[0].time.unit = "week";
  lineChart.options.scales.xAxes[0].time.min = "2020-04-24 13:00:00";
  lineChart.update();
});

document.getElementById("button-monthly").addEventListener("click", (event) => {
  lineChart.options.scales.xAxes[0].time.unit = "month";
  lineChart.options.scales.xAxes[0].time.min = "2020-02-24 13:00:00";
  lineChart.update();
});

//Bar Chart

new Chart(document.getElementById("bar-chart"), {
  type: "bar",
  data: {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [
      {
        backgroundColor: "#7477BF",
        data: [100, 80, 150, 100, 200, 230, 75],
      },
    ],
  },
  options: {
    maintainAspectRatio: false,
    legend: { display: false },
    scales: {
      xAxes: [
        {
          barPercentage: 0.5,
        },
      ],
      yAxes: [
        {
          ticks: {
            max: 250,
            min: 0,
            stepSize: 50,
          },
        },
      ],
    },
  },
});

//Doughnut Chart

new Chart(document.getElementById("doughnut-chart"), {
  type: "doughnut",
  data: {
    labels: ["Phones", "Tablets", "Desktop"],
    datasets: [
      {
        data: [15, 15, 70],
        backgroundColor: ["#74B1BF", "#81C98F", "#7377BF"],
        borderWidth: 0,
      },
    ],
  },
  options: {
    maintainAspectRatio: false,
    legend: {
      position: "right",
      align: "center",
      labels: {
        fontColor: "#777",
        boxWidth: 15,
        padding: 20,
      },
    },
  },
});
