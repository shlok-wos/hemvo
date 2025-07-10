import React, { useEffect, useState } from "react";
import Chart from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Line } from "react-chartjs-2";
import { Loader } from "@/components/Loader";

Chart.register(ChartDataLabels);

export const LineChart = ({
  isLabel = true,
  isDataLabelVisible = false,
  data,
  isLoader = false,
}) => {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    if (data) {
      setChartData({
        labels: data?.months,
        datasets: [
          {
            label: "Nuvarande poäng",
            data: data?.gainedPoints,
            borderColor: "rgba(75, 192, 192, 1)",
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            fill: true,
            tension: 0.4,
            // pointBorderWidth: 2,
            pointRadius: 0,
            hidden: false,
          },
          {
            label: "Förväntad poängutveckling",
            data: data?.forecastPoints,
            borderColor: "rgba(42, 110, 244,0.8)",
            backgroundColor: "rgba(42, 110, 244, 0.3)",
            fill: true,
            tension: 0.4,
            // pointBorderWidth: 2,
            pointRadius: 0,
            borderDash: [10, 8],
            hidden: false,
          },
        ],
      });
    }
  }, [data]);

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
          font: { size: 14, weight: 400 },
          stepSize: 10,
        },
      },
      x: {
        beginAtZero: true,
        display: isLabel,
        ticks: { font: { size: 14, weight: 400 } },
        grid: { drawOnChartArea: false },
      },
    },
    plugins: {
      legend: {
        display: true,
        labels: {
          usePointStyle: true,
          font: {
            size: 14,
            weight: "bold",
            // family: "Exodus Sans",
          },
        },
        onHover: function (event) {
          event.native.target.style.cursor = "pointer";
        },
        onLeave: function (event) {
          event.native.target.style.cursor = "default";
        },
      },
      // Disable default legend
      //   tooltip: {
      //     callbacks: {
      //       label: function (context) {
      //         let yValue = context.parsed.y;
      //         let label = context.dataset.label || "";
      //         return `${label}: ${yValue}%`;
      //       },
      //     },
      //   },
      datalabels: {
        display: isDataLabelVisible,
        color: "#000",
        font: { weight: "bold" },
      },
    },
  };

  return (
    <>
      {chartData?.labels && chartData?.datasets ? (
        <Line
          width={"100%"}
          height={"100%"}
          data={chartData}
          options={options}
        />
      ) : null}

      <Loader isbgLight show={isLoader} />
    </>
  );
};
