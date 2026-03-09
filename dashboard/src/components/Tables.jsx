import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs) {
  return { name, calories, fat, carbs};
}

const rows = [
  createData('01', 'Infosys', '2,00,000', 210),
  createData('02', 'HCL', '2,00,000', 101),
  createData('03', 'Infosys', '2,00,000', 210),
  createData('04', 'HCL', '2,00,000', 101),
  createData('05', 'Infosys', '2,00,000', 210),
  createData('06', 'HCL','2,00,000', 101),
  createData('07', 'Infosys', '2,00,000', 210),
  createData('08', 'HCL', '2,00,000', 101),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper} sx={{maxHeight:'320px'}}>
      <Table sx={{ minWidth: 500 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Sr. no</TableCell>
            <TableCell align="center">Company Name</TableCell>
            <TableCell align="center">Amount</TableCell>
            <TableCell align="center">No. Of Mandates</TableCell>
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
  );
}
