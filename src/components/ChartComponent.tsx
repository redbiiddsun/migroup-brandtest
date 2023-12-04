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

  return (
    <Radar
    updateMode='resize'
    datasetIdKey='id'
    
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
