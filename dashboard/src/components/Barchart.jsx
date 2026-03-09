import React, { useState } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import { Box, Button } from '@mui/material';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const ChartSwitcher = () => {
  const [chartType, setChartType] = useState('bar'); // toggle chart type

  // Define common data points
  const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug','Oct','Nov','Dec'];
  const values = [12, 19, 3, 5, 2, 3, 12, 19, 3, 5, 2, 3];

  // Dynamic color based on chart type
  const datasetColor =
    chartType === 'bar'
      ? {
          backgroundColor: 'rgba(246, 180, 0, 1)',
          borderColor: 'rgba(246, 180, 0, 1)',
        }
      : {
          backgroundColor: 'rgba(54, 162, 235, 1)', // light blue fill
          borderColor: 'rgba(54, 162, 235, 1)', // solid blue line
        };

  const data = {
    labels,
    datasets: [
      {
        label: 'Amount',
        data: values,
        ...datasetColor,
        borderWidth: 2,
        tension: 0.3,
        fill: chartType === 'line', // only fill area for line chart
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
    },
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ display: 'flex', flexDirection: 'row', gap: 14 }}>
        <Box>
          <h2>Total Amount Generated</h2>
        </Box>
        <Box sx={{ marginTop: '15px' }}>
            <Button
            variant={chartType === 'line' ? 'contained' : 'outlined'}
            onClick={() => setChartType('line')}
          >
            Line chart
          </Button>
          <Button
            variant={chartType === 'bar' ? 'contained' : 'outlined'}
            onClick={() => setChartType('bar')}
            style={{ marginLeft: '8px' }}
          >
            Bar chart
          </Button>
        </Box>
      </Box>

      <Box style={{ width: '600px' }}>
        {chartType === 'bar' ? (
          <Bar data={data} options={options} />
        ) : (
          <Line data={data} options={options} />
        )}
      </Box>
    </Box>
  );
};

export default ChartSwitcher;
