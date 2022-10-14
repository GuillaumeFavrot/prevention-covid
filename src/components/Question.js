import React from 'react'

function Question({question}) {

    let targeter = '#selector'+question.id

    let target = 'selector'+question.id

    return (
        <div>
            <div className='card mb-3 p-3'>
                <div className='d-flex justify-content-between'>
                    <h3>{question.question}</h3>
                    <button className="btn btn-custom" type="button" data-bs-toggle="collapse" data-bs-target={targeter} aria-expanded="false" aria-controls="collapseExample">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" className="bi bi-plus-lg" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
                        </svg>
                    </button>                
                </div>
                <div className="collapse" id={target}>
                    <div className="card-body">
                        {question.answer}
                        {question.list ? 
                            <ul className='mt-3'>
                                {question.list.map((line)=>(
                                    <li key={line}>
                                        {line}
                                    </li>
                                ))}       
                            </ul> : ""
                        }
                    </div>
                </div>        
            </div>
        </div>
    )
}

export default Question