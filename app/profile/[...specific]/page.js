"use client";
import React from 'react'

function page({params}) {
    const {specific}=React.use(params)
    console.log(params);
    console.log(specific);
  return (
    <div>{specific}</div>
  )
}

export default page