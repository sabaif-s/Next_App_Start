"use client";

import React,{use, useEffect,useState} from 'react'

function Data() {
    const [products,setProducts]=useState([]);

    useEffect(()=>{
    async function  FetchData() {
         const data=await fetch("https://jsonplaceholder.typicode.com/posts");
         const datas=await data.json();
         console.log(datas);
         setProducts(datas);
    }

    FetchData();
    },[]);
  return (
    <div>
        <p>
            Data
        </p>
        <ul>
        {
            products?.map((item,index)=>(
                   <li key={index} >
                       {item.id}
                   </li>
            ))
        }
        </ul>
    </div>
  )
}

export default Data