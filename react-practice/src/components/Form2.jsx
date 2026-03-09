import  { useState } from 'react'

function Form2() {


const [name, setname] = useState("");
const [address, setaddress] = useState("");
const [age, setage] = useState("");
const [submitted, setsubmitted] = useState(null);
const [error, seterror] = useState("");

const handleSubmit=(e)=>{
    e.preventDefault();

    if(name.trim()==""){
        seterror("Name cannot be empty")
        return;
    }

     if(address.trim()==""){
        seterror("Address cannot be empty")
        return;
    }

     if(age.trim()==""){
        seterror("Age cannot be empty")
        return;
    }

     if(Number(age)< 18){
        seterror("Must be 18 or above")
        return;
    }

    seterror("");
    setsubmitted({name,address,age});

}

    return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" value={name} onChange={(e)=>setname(e.target.value)} />
      
        <label htmlFor="address">Address</label>
        <input type="text" value={address} onChange={(e)=>setaddress(e.target.value)}/>

        <label htmlFor="age">Age</label>
        <input type="number" value={age} onChange={(e)=>setage(e.target.value)} />

        <button type="submit">Submit</button>
        
      </form>

      {error && <p style={{color:"red"}}> {error}</p>}
      {submitted && (
            <div>
                <p>Name: {submitted.name}</p>
                <p>Address: {submitted.address}</p>
                <p>Age: {submitted.age}</p>
            </div>
        )}
    </div>
  )
}


export default Form2