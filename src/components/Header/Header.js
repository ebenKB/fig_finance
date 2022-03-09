import React from 'react'
import Search from '../Search/Search'

const Header = ({title}) => {
  return (
    <div className="p-8 bg-slate-900">
      <div className="flex justify-around">
        <h1 className="text-2xl font-bold text-white">{title}</h1>
        <Search />
      </div>
    </div>
  )
}

export default Header