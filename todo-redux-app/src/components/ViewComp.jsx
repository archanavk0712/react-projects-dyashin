import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, ListGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { deleteData } from '../slices/dataSlice';


function ViewComp() {
const data =useSelector((state)=>state.data)
const dispatch=useDispatch();

    function deleteHandler(ind){
   dispatch( deleteData(ind))
    }
   
  return (
    <div>
      <h3>Todo List</h3>
      <Card style={{ width: '18rem' }}>
      <ListGroup variant="flush">
        {
            data.map((data,ind)=><ListGroup.Item>
                {data}
                <button onClick={()=>deleteHandler(ind)}>Delete</button>
            </ListGroup.Item>)
        }
      </ListGroup>
    </Card>
    </div>
  )
}

export default ViewComp
