// components/Chart.js
import React from "react";
import { Line } from "react-chartjs-2";

function Chart({ data }) {
  const chartData = {
    labels: data.map((sensor) => new Date(sensor.timestamp).toLocaleTimeString()),
    datasets: [
      {
        label: "Sensor Data",
        data: data.map((sensor) => sensor.value),
        borderColor: "rgba(75,192,192,1)",
        fill: false,
      },
    ],
  };

  return <Line data={chartData} />;
}

export default Chart;
