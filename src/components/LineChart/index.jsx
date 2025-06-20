import React from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";

export const LineChart = ({
  data,
  isLabel = true,
  isDataLabelVisible = false,
}) => {
  const options = {
    maintainAspectRatio: false,
    aspectRatio: 2.5,
    animation: { duration: 0 },
    transitions: { resize: { animation: { duration: 0 } } },
    hover: { animationDuration: 0 },
    tension: 0.4,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          font: { size: 14, family: "Onest", weight: 400 },
          color: "rgba(126, 122, 136, 1)",
          stepSize: 10,
        },
      },
      x: {
        display: isLabel,
        ticks: { font: { size: 14, family: "Onest", weight: 400 } },
        grid: { drawOnChartArea: false },
      },
    },
    plugins: {
      usePointStyle: "circle",
      legend: {
        labels: {
          usePointStyle: true,
        },
        position: "top",
      },

      tooltip: {
        callbacks: {
          label: function (context) {
            let yValue = context.parsed.y;
            let label = context.dataset.label || "";
            return `${label}: ${yValue}%`;
          },
        },
      },
      datalabels: {
        display: isDataLabelVisible,
        color: "#000",
        font: { weight: "bold" },
      },
    },
  };

  return <Line data={data} options={options} />;
};
