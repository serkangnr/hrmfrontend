import React, { useEffect } from 'react';
import * as echarts from 'echarts'
import './permit.css'

// piebar script
const TrafficChart: React.FC = () => {
  useEffect(() => {
    const chartDom = document.getElementById('trafficChart')!;
    const myChart = echarts.init(chartDom);

    const option = {
      tooltip: {
        trigger: 'item',
      },
      legend: {
        top: '5%',
        left: 'center',
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: 'center',
          },
          emphasis: {
            label: {
              show: true,
              fontSize: '18',
              fontWeight: 'bold',
            },
          },
          labelLine: {
            show: false,
          },
          data: [
            { value: 1048, name: 'IT' },
            { value: 735, name: 'YONETIM' },
            { value: 580, name: 'ARGE' },
            { value: 484, name: 'LOJISTIK' },
            { value: 300, name: 'URETIM' },
          ],
        },
      ],
    };

    myChart.setOption(option);

    return () => {
      myChart.dispose();
    };
  }, []);

  return <div id="trafficChart" style={{ width: '100%' }} />;
};

export default TrafficChart;
