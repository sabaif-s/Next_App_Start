import React from 'react'
import CodeJpg from '@/public/code.jpg'
import Image from 'next/image'
function  Images () {
  return (
    <div className='w-full h-screen' > Images
        
    <Image src={CodeJpg} alt="iMAGE" className='width-auto height-auto' />
    </div>

  )
}

export default  Images 