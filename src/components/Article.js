import React from 'react'
import { useDispatch } from 'react-redux'
import {modifyPage} from './state/features/viewSlice'
function Article({article}) {

  const dispatch = useDispatch()

  const pageRequest = (e, request) => {
      e.preventDefault()
      dispatch(modifyPage(request))
  }

  return (
      <div className="card mb-3" >
        <div className="card-body">
          <h3 className="card-title">{article.title}</h3>
          <p className='bold'>{article.date}</p>
          <p className="card-text">{article.abstract}</p>
          <div className='w-100 text-end'>
            <a href="#" onClick={(e) => pageRequest(e, 'article')} className="btn btn-custom-med text-white">
            En savoir plus
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" className="bi bi-arrow-right ms-1" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
            </svg>
            </a>
          </div>
        </div>
    </div>
  )
}

export default Article