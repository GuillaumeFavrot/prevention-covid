import React from 'react'

function Center({center}) {
  return (
    <div className='border-bottom border-dark'>
        <h3 className='mt-5 mb-3'>{center.name}</h3>
        <p>{center.address}</p>
    </div>
  )
}

export default Center