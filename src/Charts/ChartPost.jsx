import React from 'react';
import { Bar } from 'react-chartjs-2';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function MyChartPost({dates, arg}) {

//console.log(totalQuantityDay);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: '',
    },
  },
};

const labels = dates;
const datasets = [...arg]

const data = {
  labels,
  datasets,
};

  return (
    <div style={{ width: "500px", height: "200px" }}>
   <Bar options={options} data={data} />
   </div>
   );
  }
  export default MyChartPost;
