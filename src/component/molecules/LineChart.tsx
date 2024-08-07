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
import { color } from 'echarts';

// Chart.js bileşenlerini kaydet
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const GenderDistributionChart: React.FC = () => {
  const data = {
    labels: [ 'Kadın', 'Erkek'],
    datasets: [
      {
        label: 'Toplam Çalışan Sayısı',
        data: [350, 700], 
        backgroundColor: [
          'rgb(255, 155, 210)', // (Kadın)
          'rgb(64, 162, 216)', // Koyu gri (Erkek)
        ],
        borderColor: [
          'rgba(211, 211, 211, 1)', 
          'rgba(128, 128, 128, 1)', 
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const, // Sabit değer olarak belirtiyoruz
      },
      title : {
        display: true,
        text : 'Kadın ve Erkek Çalışan Dağılımı' ,
        
        color: 'black',
        font:  {
        size: 20,
        

       }
       
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default GenderDistributionChart;

