import React from 'react'

function AuthLayout(  {children}) {
  return (
    <div  className="flex justify-center items-center h-screen font-inter text-sm bg-gray-300 leading-6">
        {children}
    </div>
  )
}

export default AuthLayout