import NavBar from '@/components/NavBar'
import FooterJsx from '@/components/Footer'
import React from 'react'

function layout({children}) {
  return (
    <div>
        <NavBar/>
        {children}
        <FooterJsx/>
    </div>
  )
}

export default layout