import {
	Chart as ChartJS,
	RadialLinearScale,
	PointElement,
	LineElement,
	Filler,
	Tooltip,
	Legend,
	ChartOptions,
	ChartData,
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(
	RadialLinearScale,
	PointElement,
	LineElement,
	Filler,
	Tooltip,
	Legend
);

export default function ChartComponent({ data }: { data: summaryData }) {
	const options: ChartOptions<"radar"> = {
		scales: {
			r: {
				suggestedMin: 0,
				suggestedMax: 5,
				ticks: {
					stepSize: 1,
				},
			},
		},
		plugins: {
			legend: {
				display: false,
				labels: {
					font: {
						size: 20, // Set your desired font size for labels
					},
				},
			},
		},
		maintainAspectRatio: true,
		responsive: true,
	};

	const chartData: ChartData<"radar", number[]> = {
		labels: data?.chartData?.labels,
		datasets: [
			{
				label: data.chartData.datasets.label,
				data: data.chartData.datasets.data,
				backgroundColor: data.animalDetail.bgcolor,
				borderColor: data.animalDetail.color,
				borderWidth: 1,
			},
		],
	};

	return (
		<Radar
			updateMode="resize"
			datasetIdKey="id"
			options={options}
			data={chartData}
		/>
	);
}
