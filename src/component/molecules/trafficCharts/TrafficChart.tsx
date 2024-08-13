import React, { useEffect, useState } from 'react';
import ReactECharts from 'echarts-for-react';

interface SectorDTO {
  sektorName: string;
  count: number;
}

const TrafficChart: React.FC = () => {
  const [data, setData] = useState<SectorDTO[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:9093/api/v1/company/sectors');
        const result: SectorDTO[] = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
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
        data: data.map((item) => item.sektorName)
      },
      series: [
        {
          name: 'Sectors',
          type: 'pie',
          radius: '50%',
          data: data.map((item) => ({
            value: item.count,
            name: item.sektorName
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

export default TrafficChart;
