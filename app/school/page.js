
import Link from 'next/link'
import React from 'react'

function  School() {
  return (
    <div> 
        home school
        <ul>
            <li>
                <Link href="/school/alii" >
                Alii
                </Link>
                 
            </li>
            <li>
                <Link href="/school/oda" >
                Oda
                </Link>
                 
            </li>
        </ul>
        
    </div>
  )
}

export default  School