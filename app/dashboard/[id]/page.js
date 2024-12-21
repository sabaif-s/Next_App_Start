import { redirect } from 'next/navigation';
import React from 'react'

function Id({params}) {
    const {id}=React.use(params);
    if(id == 3){
        redirect("/login")
    }
  return (
    <div>{id}</div>
  )
}

export default Id