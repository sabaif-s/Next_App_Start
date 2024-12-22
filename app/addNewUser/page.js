"use client";

import React,{useState} from 'react'

function AddUser() {
    const [name,setName]=useState("");
    const [age,setAge]=useState(0);
    const [password,setPassword]=useState("");

    const addButtonHandler=async ()=>{
     let response=await fetch("api/post",{
        method:"POST",
        body:JSON.stringify({name,age,password})
     })
     response=await response.json();
     if(response.ok == true){
      alert(`user added sucessfully`);
     }
     else{
      alert("user not added");
     }
     console.log(response);
    }
  return (
    <div>
        <input className='bg-gray-300'  type='text' onChange={(e)=>{
              setName(e.target.value);
        }} value={name} />
        <input type='number' onChange={(e)=>{
              setAge(e.target.value);
        }} value={age} />
        <input type='password' onChange={(e)=>{
              setPassword(e.target.value);
        }} value={password} />
        <button onClick={addButtonHandler} >ADD</button>
    </div>
  )
}

export default AddUser