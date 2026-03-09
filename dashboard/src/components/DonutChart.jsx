import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { Box } from '@mui/material';

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChartComponent = () => {
  // Define your chart data
  const data = {
    labels: ['Jan-12 invoices Generated', 'Feb-19 invoices Generated', 'Mar-30 invoices Generated'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 30],
        backgroundColor: [
          'rgba(0, 106, 255, 1)',
          'rgba(247, 194, 0, 0.74)',
          'rgba(37, 246, 5, 0.86)',
        ],
        borderColor: [
          'rgba(9, 32, 136, 0.69)',
          'rgba(245, 196, 1, 1)',
          'rgba(70, 238, 3, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  // Define your chart options (optional)
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
      },
      title: {
        display: true,
      },
    },
    cutout: '50%', // Adjust the size of the inner hole for doughnut chart
  };

  return (
    <Box sx={{display:'flex', flexDirection:'column', width:'500px'}}>
      <h2 style={{marginTop:'30px'}}>Doughnut Chart</h2>
      <Box sx={{height:'450px',width:'500px'}}>
      <Doughnut data={data} options={options}/>
      </Box>
    </Box>
  );
};

export default DoughnutChartComponent;