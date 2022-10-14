import React from 'react'
import { useDispatch } from 'react-redux'
import {modifyPage} from './state/features/viewSlice'

function Localization() {

    const dispatch = useDispatch()

    const pageRequest = (e, request) => {
        e.preventDefault()
        dispatch(modifyPage(request))
    }

    return (
        <div className='container-fluid d-flex flex-column'>
            <h1 className='text-center mt-5 mb-3'>Trouvez un centre de vaccination proche de chez vous</h1>
            <div className='w-100 text-center mb-4'><input className='input' placeholder='Quel est votre code postal ?'></input></div>
            <div className='w-100 text-center mb-5'><a onClick={(e) => pageRequest(e, 'centers')} className='btn btn-custom-big text-white pt-3' href="#" ><h5>Trouver</h5></a></div>
        </div>
    )
}

export default Localization