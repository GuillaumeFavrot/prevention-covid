import React from 'react'
import { useSelector, useDispatch  } from 'react-redux'
import Center from './Center'
import {modifyPage} from './state/features/viewSlice'

function Centers() {

    const content = useSelector(state => state.content)

    const dispatch = useDispatch()

    const pageRequest = (e, request) => {
        e.preventDefault()
        dispatch(modifyPage(request))
    }
    return (
        <div className='container-fluid'>
            <h1 className='text-center mt-5 mb-3'>Liste des centres de vaccination proches de chez vous</h1>
            <h5 className='text-center'>Dernière mise à jour le: 14/10/2022</h5>
            <div className='mt-3 mb-5'>
                {content.centers.map((center)=>(
                    <Center key={center.id} center={center}/>
                ))}       
            </div>
            <a href="#" onClick={(e) => pageRequest(e, 'centers')} className="text-black"><h6 className='text-decoration-underline text-center mb-5'>voir plus de résultats</h6></a>
        </div>
    )
}

export default Centers