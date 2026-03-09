import React, { useCallback, useState } from 'react'
import Count from './Count';
import Button from './Button';

function Parent1() {
    const [salary, setsalary] = useState(15000);
    const [age, setage] = useState(18);

     const incrementSalary = () => {
        setsalary(salary + 500);
        }

    const incrementAge =() => {
        setage(age + 1);
        }


    // const incrementSalary = useCallback(() => {
    //     setsalary(salary + 500);
    //     },[salary])

    // const incrementAge = useCallback(() => {
    //     setage(age + 1);
    //     },[age])

    return (
        <div>
            <Count text={"Salary"} value={salary}/>
            <Button text={"Increment salary"} handleClick={incrementSalary}/>

            <Count text={"Age"} value={age}/>
            <Button text={"Increment Age"} handleClick={incrementAge}/>
        </div>
    )
}

export default Parent1
