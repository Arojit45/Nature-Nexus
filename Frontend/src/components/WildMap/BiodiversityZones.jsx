import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BiodiversityZones = () => {
  const zones = [
    {
      label: "Red Zone",
      count: 5,
      description:
        "Critical biodiversity hotspots that are at risk of severe damage or extinction. Immediate conservation actions are needed.",
    },
    {
      label: "Blue Zone",
      count: 8,
      description:
        "High-priority areas with significant biodiversity value but not as endangered as red zones. Conservation efforts are ongoing.",
    },
    {
      label: "Green Zone",
      count: 4,
      description:
        "Areas with healthy biodiversity, requiring continued monitoring and management to preserve their status.",
    },
  ];

  // Chart data
  const data = {
    labels: zones.map((zone) => zone.label),
    datasets: [
      {
        label: "Biodiversity Hotspots",
        data: zones.map((zone) => zone.count),
        backgroundColor: ["#f44336", "#2196f3", "#4caf50"],
        borderColor: ["#f44336", "#2196f3", "#4caf50"],
        borderWidth: 1,
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    maintainAspectRatio: false, // Allows flexible resizing
    plugins: {
      tooltip: {
        callbacks: {
          label: (context) => {
            const zone = zones[context.dataIndex];
            return `${zone.label}: ${context.raw} hotspots - ${zone.description}`;
          },
        },
      },
    },
    scales: {
      x: {
        ticks: {
          font: {
            size: 12, // Adjusted for better readability
          },
        },
      },
      y: {
        ticks: {
          font: {
            size: 12,
          },
        },
      },
    },
    elements: {
      bar: {
        borderRadius: 8,
      },
    },
    barPercentage: 0.6,
    categoryPercentage: 0.8,
  };

  return (
    <div className="p-3 w-full md:w-[400px] rounded-lg shadow-md mx-auto">
      <div className="w-full h-[300px] sm:h-[350px] md:h-[400px] flex justify-center items-center">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default BiodiversityZones;
