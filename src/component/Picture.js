import React, { useState } from 'react'

export default function Picture({imageName, index, handleRemove}) {
    const [showCloseBtn, setShowCloseBtn] = useState(-1);
  return (
    <div>
      <div className='relative' key={index} onMouseEnter={()=> setShowCloseBtn(index)} onMouseLeave={()=> setShowCloseBtn(-1)}>
        <button className={`bg-white w-5 h-5 pb-1 font-thin rounded-xl text-center flex justify-center items-center absolute text-red-500 right-0 text-sm focus:outline-none ${index === showCloseBtn ? '' : 'hidden' }`} onClick={()=> handleRemove(index)}>x</button>
        <img className="w-40 mx-auto" src={imageName} alt="logo"/>
        </div>
    </div>
  )
}
