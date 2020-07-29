//Line Chart
Chart.defaults.global.defaultFontColor = "#A7A7A7";

new Chart(document.getElementById("line-chart"), {
  type: "line",
  data: {
    labels: [
      "16 - 22",
      "23 - 29",
      "30 - 5",
      "6 - 12",
      "13 - 19",
      "20 - 26",
      "27 - 3",
      "4 - 10",
      "11 - 17",
      "18 - 24",
      "25 - 31",
    ],
    datasets: [
      {
        data: [500, 1500, 750, 1250, 1750, 1250, 1500, 1000, 1500, 2000],
        label: "",
        borderColor: "#3e95cd",
        fill: false,
      },
    ],
  },
});

//Bar Chart

new Chart(document.getElementById("bar-chart"), {
  type: "bar",
  data: {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [
      {
        backgroundColor: [
          "#7477BF",
          "#7477BF",
          "#7477BF",
          "#7477BF",
          "#7477BF",
          "#7477BF",
          "#7477BF",
        ],
        data: [100, 80, 150, 100, 200, 230, 75],
      },
    ],
  },
  options: {
    legend: { display: false },
    scales: {
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
    legend: {
      position: "right",
      align: "middle",
      labels: {
        fontColor: "#777",
        boxWidth: 20,
        padding: 20,
      },
    },
  },
});
