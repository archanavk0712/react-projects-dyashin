import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PendingIcon from '@mui/icons-material/Pending';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

function createData(name, calories, fat, carbs) {
  return { name, calories, fat, carbs};
}

const rows = [
  createData('01', 'Waves', <span style={{display:'flex', justifyContent:'center'}}><CalendarTodayIcon/>20 Feb 2024<AccessTimeIcon/>9:19</span>,<span style={{display:'flex', justifyContent:'center'}}><PendingIcon color='warning'/>pending</span>),
  createData('02', 'HCL', <span style={{display:'flex', justifyContent:'center'}}><CalendarTodayIcon/>20 Feb 2024<AccessTimeIcon/>9:19</span>, <span style={{display:'flex', justifyContent:'center'}}><CheckCircleIcon color='success'/>delivered</span>),
  createData('03', 'Adidas', <span style={{display:'flex', justifyContent:'center'}}><CalendarTodayIcon/>20 Feb 2024<AccessTimeIcon/>9:19</span>, <span style={{display:'flex', justifyContent:'center'}}><CancelIcon color='error'/>canceled</span>),
  createData('04', 'HCL', <span style={{display:'flex', justifyContent:'center'}}><CalendarTodayIcon/>20 Feb 2024<AccessTimeIcon/>9:19</span>, <span style={{display:'flex', justifyContent:'center'}}><CheckCircleIcon color='success'/>delivered</span>),
  createData('05', 'Infosys', <span style={{display:'flex', justifyContent:'center'}}><CalendarTodayIcon/>20 Feb 2024<AccessTimeIcon/>9:19</span>, <span style={{display:'flex', justifyContent:'center'}}><PendingIcon color='warning'/>pending</span>),
  createData('06', 'HCL',<span style={{display:'flex', justifyContent:'center'}}><CalendarTodayIcon/>20 Feb 2024<AccessTimeIcon/>9:19</span>, <span style={{display:'flex', justifyContent:'center'}}><CancelIcon color='error'/>canceled</span>),
];

export function BasicTable2() {
  return (
    <Box sx={{width:'740px'}}>
    <TableContainer component={Paper}>
        <h2>Mandate table</h2>
      <Table sx={{ minWidth: 500 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Sr. no</TableCell>
            <TableCell align="center">Company Title</TableCell>
            <TableCell align="center">Date & Time</TableCell>
            <TableCell align="center">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.calories}</TableCell>
              <TableCell align="center">{row.fat}</TableCell>
              <TableCell align="center">{row.carbs}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Box>
  );
}
