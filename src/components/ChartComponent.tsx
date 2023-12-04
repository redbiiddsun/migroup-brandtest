import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export default function ChartComponent({ data }: any) {

  const options = {
    scales: {
      r: {
        suggestedMin: 0,  // Set your minimum value
        suggestedMax: 5, // Set your maximum value
        ticks: {
          beginAtZero: true,
          stepSize: 1,     // Set your desired step size
        },
      },
    },
    plugins: {
      legend: {
        display: false, // Set to false to hide the legend
      },
    },
  };

  return (
    <Radar
      updateMode='resize'
      datasetIdKey='id'
      options={options}
      data={{

        labels: data?.chartData?.labels,
        datasets: [
          {
            label: data?.chartData?.datasets?.label,
            data: data?.chartData?.datasets?.data,
            backgroundColor: data?.animalDetail?.bgcolor,
            borderColor: data?.animalDetail?.color,
            borderWidth: 1,
          },
        ],
      }}
    />
  )
}
