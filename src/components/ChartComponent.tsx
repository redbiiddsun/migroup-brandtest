import Chart from 'chart.js/auto';
import { Radar } from 'react-chartjs-2';

export default function ChartComponent({data}: any) {

    return(
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
              // backgroundColor: '#957CB6'
            },
          ],
        }}
      />
    )
}
