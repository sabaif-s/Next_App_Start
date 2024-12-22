import React from 'react'

const serverData= async () => {
    const data=await fetch("https://jsonplaceholder.typicode.com/posts");
    const jsonData=await data.json();
    return jsonData;
}

async function DataServer() {
    const data= await serverData();
    console.log("data:",data);
  return (
    <div> 
        <p className='bg-green-300' >
        DataServer
        </p>
         {data?.map((item,index)=>(
            <p key={index} >
               {item.title}
            </p>
         ))}
        </div>
  )
}

export default DataServer