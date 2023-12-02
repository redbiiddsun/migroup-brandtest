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
          // borderColor: '#957CB6',
          // backgroundColor: '#957CB6',
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 2)',
          borderWidth: 1,
          
        },
      ],
    }}
    />

  )
}
