import React, { useEffect, useState } from 'react';
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
import { useAppSelector } from '../../store';

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
  const [remainingDays, setRemainingDays] = useState<number | null>(null);
  const token =useAppSelector((state) => state.auth.token);

  useEffect(() => {
  
    const fetchSubscriptionRemovalDay = async () => {
      try {
        const response = await fetch(`http://localhost:9092/api/v1/manager/get-subscription-removal-day?token=${token}`);
        if (!response.ok) {
          throw new Error('Ağ hatası');
        }
        const daysLeft = await response.json();
        setRemainingDays(daysLeft);
      } catch (error) {
        console.error('Hata:', error);
      }
    };

    fetchSubscriptionRemovalDay();
  }, [token]);

  if (remainingDays === null) {
    return <div>Yükleniyor...</div>;
  }

  const totalDays = 365; 

  const data = {
    labels: ['Abonelik'], // Tek bir etiket
    datasets: [
      {
        label: '',
        data: [ remainingDays], // Aboneliğin bitmesine kalan gün sayısı
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


