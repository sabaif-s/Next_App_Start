"use client";

import React from 'react'
import { Roboto } from 'next/font/google'


const roboto=Roboto({subsets:["latin"],weight:"400"});
function Fonts() {
    
  return (
    <div>  
        <div>
            Fonts
        </div>
        <p className={roboto.className} >
            Helloo fonts
        </p>
          </div>
  )
}

export default Fonts