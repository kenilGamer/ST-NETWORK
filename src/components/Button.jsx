/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

function Button({title, icon = null}) {
  return (
    <div className=' flex items-center justify-center py-4 px-5 min-w-40 rounded-full button '>
     <div>
      <button className={`text-md  font-semibold text-center uppercase flex items-center gap-2`}>{icon} {title} </button>
     </div>
    </div>
  )
}

export default Button