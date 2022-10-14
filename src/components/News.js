import React from 'react'
import { useSelector, useDispatch  } from 'react-redux'
import Article from './Article'
import {modifyPage} from './state/features/viewSlice'

function News() {

    const content = useSelector(state => state.content)

    const dispatch = useDispatch()

    const pageRequest = (e, request) => {
        e.preventDefault()
        dispatch(modifyPage(request))
    }
    return (
        <div className='container-fluid'>
            <h1 className='text-center mt-5 mb-3'>Lutons ensemble contre la COVID-19</h1>
            <h5 className='text-center mb-4'>Retrouvez toutes nos actualités et nos publications</h5>
            <div>
                <div className='d-flex container'>
                    <div className='w-100 text-center mb-4'><input className='input' placeholder='Que recherchez vous ?'></input></div>
                    <i className="position-relative ms-3 glass">
                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="#017eba" className="bi bi-search " viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                        </svg>
                    </i>
                </div>                
            </div>
            <div className='text-end'>
                <button className='btn btn-green text-white'>
                    Filtrer
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" className="bi bi-filter-left ms-1" viewBox="0 0 16 16">
                        <path d="M2 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
                    </svg>
                </button>                
            </div>
            <div className='mt-3 mb-5'>
                {content.articles.map((article)=>(
                    <Article key={article.id} article={article}/>
                ))}       
            </div>
            <a href="#" onClick={(e) => pageRequest(e, 'centers')} className="text-black"><h6 className='text-decoration-underline text-center mb-5'>voir plus de résultats</h6></a>
        </div>
    )
}

export default News