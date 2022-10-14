
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {modifyPage} from './state/features/viewSlice'

function Header() {

    const view = useSelector(state => state.view)

    const dispatch = useDispatch()

    const pageRequest = (e, request) => {
        e.preventDefault()
        dispatch(modifyPage(request))
    }

    return (
        <div className='d-flex flex-column'>
            <div className='d-flex flex-row justify-content-between container-fluid'>
                <img className='rep-fr d-none d-lg-block' src="https://upload.wikimedia.org/wikipedia/fr/thumb/2/22/Republique-francaise-logo.svg/1200px-Republique-francaise-logo.svg.png"></img>
                <div className="dropdown d-lg-none mt-3">
                    <button className="btn btn-custom text-white" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                        </svg>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a className="dropdown-item" href="#" onClick={(e) => pageRequest(e, 'home')}>Acceuil</a></li>
                        <li><a className="dropdown-item" href="#" onClick={(e) => pageRequest(e, 'news')}>Publications</a></li>
                        <li><a className="dropdown-item" href="#" onClick={(e) => pageRequest(e, 'campaign')}>Campagne de vaccination</a></li>
                        <li>                            
                            <a className="dropdown-item text-link" href="#" onClick={(e) => pageRequest(e, 'localization')}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill me-1" viewBox="0 0 16 16">
                                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                                </svg>
                                Trouver un centre de vaccination
                            </a>
                        </li>
                    </ul>
                </div>       
                <nav className="navbar navbar-white navbar-expand-lg bg-white w-lg-100 d-flex justify-content-between">
                    <ul className="navbar-nav mb-2 mb-lg-0 ps-2 d-none d-lg-flex">
                        <li className="nav-item">
                            <a className="nav-link me-5 text-black" href="#" onClick={(e) => pageRequest(e, 'home')}>
                                Accueil
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link me-5 text-black" href="#" onClick={(e) => pageRequest(e, 'news')}>
                                Publications
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link me-5 text-black" href="#" onClick={(e) => pageRequest(e, 'campaign')}>
                                Campagne de vaccination
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-link" href="#" onClick={(e) => pageRequest(e, 'localization')}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill me-1" viewBox="0 0 16 16">
                                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                                </svg>
                                Trouver un centre de vaccination
                            </a>
                        </li>
                    </ul>
                </nav>
                <img className='tousanticovid mt-2 me-5 me-lg-2 mb-2' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Logo_TousAntiCovid.svg/1200px-Logo_TousAntiCovid.svg.png" alt="tousanticovid"></img>
                <img className='rep-fr d-lg-none ms-3' src="https://upload.wikimedia.org/wikipedia/fr/thumb/2/22/Republique-francaise-logo.svg/1200px-Republique-francaise-logo.svg.png"></img>
            </div>
            <div className='bg-main'>
                
            </div>
        </div>
    )
}

export default Header