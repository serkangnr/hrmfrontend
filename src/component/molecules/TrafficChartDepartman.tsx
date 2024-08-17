import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";
import ReactECharts from 'echarts-for-react';
import { useAppSelector } from "../../store";

interface DepartmanResponseDto {
    departmanName: string;
  count: number;
}


const TrafficChartDepartman: React.FC = () => {
  const [data, setData] = useState<DepartmanResponseDto[]>([]);
  const managerId = useAppSelector((state) => state.manager.manager?.id);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:9094/api/v1/employee/departments?managerId='+managerId);
        const result: DepartmanResponseDto[] = await response.json();
        setData(result);
      } catch (error) {
        console.error("Veri çekilirken bir hata oluştu:", error);
      }
    };

    fetchData();
  }, []);

  const getOption = () => {
    return {
      title: {
        
        left: 'center'
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
      },
      legend: {
        orient: 'vertical',
        left: 'left',
        data: data.map((item) => item.departmanName)
      },
      series: [
        {
          name: 'Sectors',
          type: 'pie',
          radius: '50%',
          data: data.map((item) => ({
            value: item.count,
            name: item.departmanName
          })),
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    };
  };

  return (
    <div>
      <ReactECharts option={getOption()} style={{ height: '450px' }} />
    </div>
  );
};
export default TrafficChartDepartman;
