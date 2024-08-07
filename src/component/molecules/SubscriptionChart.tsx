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

// Chart.js bileşenlerini kaydet
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const SubscriptionChart: React.FC = () => {
  const totalDays = 365; // Toplam gün sayısı
  const remainingDays = 50; // Kalan gün sayısı

  const data = {
    labels: ['Abonelik'], // Tek bir etiket
    datasets: [
      {
        label: '',
        data: [totalDays-remainingDays], // Aboneliğin bitmesine kalan gün sayısı
        backgroundColor: 'rgb(252, 103, 54)', // Barın arka plan rengi
        borderColor: 'rgb(252, 103, 54)', // Barın sınır rengi
        borderWidth: 1,
        barThickness: 15, // Barın kalınlığı
      },
    ],
  };

  const options = {
    indexAxis: 'y' as const, // Yatay bar grafiği
    responsive: true,
    plugins: {
        legend: {
            display: false, // Legend'ı gizle
          },
      title: {
        display: true,
        text: 'Aboneliğin Bitmesine Kalan Günler',
      },
    },
    elements: {
      bar: {
        borderWidth: 1, // Barın sınır kalınlığı
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        max: totalDays, // X ekseninin maksimum değeri
        title: {
          display: true,
          
        },
        ticks: {
          stepSize: 50, // Adım boyutu (isteğe bağlı)
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
         
        },
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default SubscriptionChart;

