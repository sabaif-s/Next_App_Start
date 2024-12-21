"use client";
import NavBar from '@/components/NavBar'
import FooterJsx from '@/components/Footer'
import React from 'react'
import { usePathname } from 'next/navigation';

function layout({children}) {
    const pathe=usePathname();
    console.log(pathe);
  return (
    <div>
        <NavBar/>
        {children}
        {
    pathe != "/school/alii" && (
        <FooterJsx/>
    )  
        }
        
    </div>
  )
}

export default layout