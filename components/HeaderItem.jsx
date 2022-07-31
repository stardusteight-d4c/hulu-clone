import React from 'react'

const HeaderItem = ({ title, Icon }) => {
  return (
    <div className="flex flex-col items-center w-12 cursor-pointer group sm:w-20 hover:text-white">
      <Icon className="w-8 mb-1 group-hover:animate-bounce" /> 
      <p className="tracking-widest transition-opacity duration-200 opacity-0 group-hover:opacity-100">
        {title}
      </p>
    </div>
  )
}

export default HeaderItem
