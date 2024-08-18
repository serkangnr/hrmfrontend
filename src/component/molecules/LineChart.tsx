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
import { HrmDispatch, useAppSelector } from '../../store';
import { useDispatch } from 'react-redux';
import { setToken } from '../../store/feature/authSlice';

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
  const [femaleCount, setFemaleCount] = useState<number | null>(null);
  const [maleCount, setMaleCount] = useState<number | null>(null);
  const dispatch: HrmDispatch = useDispatch();
  const token = useAppSelector((state) => state.auth.token);

  useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            dispatch(setToken(token));
        }
    }, [dispatch]);

  

    useEffect(() => {
      const fetchData = async () => {
        if (!token) return; // Eğer token yoksa veri çekme işlemini yapma
  
        try {
          const femaleResponse = await fetch(`http://localhost:9094/api/v1/employee/get-female-employee-count?token=${token}`);
          const maleResponse = await fetch(`http://localhost:9094/api/v1/employee/get-male-employee-count?token=${token}`);
  
          if (femaleResponse.ok && maleResponse.ok) {
            const femaleData = await femaleResponse.json();
            const maleData = await maleResponse.json();
  
            setFemaleCount(femaleData); // Burada JSON yapısına göre ayarlama yapmanız gerekebilir
            setMaleCount(maleData); // Burada JSON yapısına göre ayarlama yapmanız gerekebilir
          } else {
            console.error('Error fetching employee counts');
          }
        } catch (error) {
          console.error('Error:', error);
        }
      };
  
      fetchData();
    }, [token]);

  const totalCount = (femaleCount ?? 0) + (maleCount ?? 0);

  const data = {
    labels: ['Kadın', 'Erkek'],
    datasets: [
      {
        label: 'Çalışan Sayısı',
        data: [femaleCount ?? 0, maleCount ?? 0],
        backgroundColor: [
          'rgb(255, 155, 210)', // Kadın
          'rgb(64, 162, 216)',  // Erkek
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
        position: 'top' as const,
        display: false,
      },
      title: {
        display: true,
        text: 'Kadın ve Erkek Çalışan Dağılımı',
        color: 'black',
        font: {
          size: 20,
        },
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


