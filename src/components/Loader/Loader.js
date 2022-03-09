import React from 'react'

const Loader = ({text}) => {
  return (
    <div className="container md:mx-auto px-40 divide-y divide-gray-100">
      <h1 className="mt-2 mb-2 p-4">{text}</h1>
    </div>
  )
}

export default Loader