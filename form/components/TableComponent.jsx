import Table from 'react-bootstrap/Table';

function TableComponent({allUsers}) {
    return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>EmpId</th>
          <th>EmpName</th>
          <th>EmpEmail</th>
          <th>EmpPhone</th>
        </tr>
      </thead>
      <tbody>
 
      {allUsers.map((user,ind)=>{
         return (
        <tr key={ind}>
          <td>{user.empId}</td>
          <td>{user.empName}</td>
          <td>{user.empEmail}</td>
          <td>{user.empPhone}</td>
        </tr>
      )})}
      </tbody>
    </Table>
  );
}

export default TableComponent;
