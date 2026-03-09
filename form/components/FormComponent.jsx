import { use, useState } from 'react'
import { Button, Form } from 'react-bootstrap'

function FormComponent({getUserData}) {

  const[userData,setUserData]=useState({
    empId:"",
    empName:"",
    empEmail:"",
    empPhone:""
  })

  const [validateErrors, setvalidateErrors] = useState({})

  const validateDate=()=>{
    let error={}
    if(!userData.empId.trim()){
        error.empId="Employee ID is required"
    }else if(!/^DT\d{6}$/.test(userData.empId)){
        error.empId="Invalid Employee ID"
    }

    if(!userData.empName.trim()){
        error.empName="Employee name is required"
    }else if(!/^[a-zA-Z\s]{2,30}$/.test(userData.empName)){
        error.empName="Invalid Employee Name"
    }

    if(!userData.empEmail.trim()){
        error.empEmail="Employee email is required"
    }else if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(userData.empEmail)){
        error.empEmail="Invalid Employee Email"
    }

    if(!userData.empPhone.trim()){
        error.empPhone="Employee phone number is required"
    }else if(!/^[6-9]\d{9}$/.test(userData.empPhone)){
        error.empPhone="Invalid Employee phone number"
    }
    return error;
  }

  const handleChange=(event)=>{
    setUserData({
        ...userData,
        [event.target.name]:event.target.value,
    })
  }
  const saveData=(event)=>{
  event.preventDefault();
  let errors=validateDate();
  if(Object.keys(errors).length>0){
      setvalidateErrors(errors);
  }else{
      alert("Form submitted successfully")
      getUserData({...userData});   // clone fix
      setUserData({                 // clear form
        empId:"",
        empName:"",
        empEmail:"",
        empPhone:""
      })
      setvalidateErrors({});
  }
}

  return (
    <div style={{width:"80%",border:"1px solid rgb(211,211,2112)",borderRadius:'10px', padding:'2%'}}>
     
       <Form>

      <Form.Group className="mb-3" controlId="formBasicEmpID">
        <Form.Label>Employee ID</Form.Label>
        <Form.Control 
            type="text" 
            placeholder="DT102400"
            name="empId"
            value={userData.empId}
            onChange={handleChange} 
        />
        {validateErrors.empId && (<p className="text-danger fs-6">{validateErrors.empId}</p>)}
    </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Employee Name</Form.Label>
        <Form.Control 
            type="text" 
            placeholder="Sample" 
            name="empName"
            value={userData.empName}
            onChange={handleChange}
        />
        {validateErrors.empName && (<p className="text-danger fs-6">{validateErrors.empName}</p>)}
    </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Employee Email</Form.Label>
        <Form.Control 
            type="text" 
            placeholder="example@abc.com"
            name="empEmail"
            value={userData.empEmail}
            onChange={handleChange} 
            />
            {validateErrors.empEmail && (<p className="text-danger fs-6">{validateErrors.empEmail}</p>)}
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPhone">
        <Form.Label>Employee Phone Number</Form.Label>
        <Form.Control 
            type="text" 
            placeholder="9999999999" 
            name="empPhone"
            value={userData.empPhone}
            onChange={handleChange}
        />
        {validateErrors.empPhone && (<p className="text-danger fs-6">{validateErrors.empPhone}</p>)}
    </Form.Group>
     
      
      <Button variant="primary" type="submit" onClick={saveData}>
        Submit✅
      </Button>
    </Form>

    </div>
  )
}

export default FormComponent