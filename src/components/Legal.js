import React from 'react'

function Legal ({mention}) {
  return (
    <div>
        <h3 className='mt-5 mb-3'>{mention.title}</h3>
        <p>{mention.text}</p>
        {mention.list ? 
            <ul className='mt-3'>
                {mention.list.map((line)=>(
                    <li key={line}>
                        {line}
                    </li>
                ))}       
            </ul> : ""
        }
    </div>
  )
}

export default Legal