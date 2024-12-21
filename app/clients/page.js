"use client";
import React,{useEffect} from 'react'

function page() {

    useEffect(() => {
        console.log('This will only run on the client');
      }, []);
  return (
    <div>page</div>
  )
}

export default page