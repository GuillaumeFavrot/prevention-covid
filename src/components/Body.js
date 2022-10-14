import React from 'react'
import { useSelector } from 'react-redux'
import ArticlePage from './ArticlePage'
import Campaign from './Campaign'
import Centers from './Centers'
import Home from './Home'
import Legals from './Legals'
import Localization from './Localization'
import News from './News'

function Body() {

    const view = useSelector(state => state.view)



    return (
        <div>
            <div name="Accueil" className={view.page === "home" ? "d-block" : "d-none"}>
                <Home/>
            </div>
            <div name="news" className={view.page === "news" ? "d-block" : "d-none"}>
               <News /> 
            </div>
            <div name="article" className={view.page === "article" ? "d-block" : "d-none"}>
                <ArticlePage />
            </div>
            <div name="campaign" className={view.page === "campaign" ? "d-block" : "d-none"}>
                <Campaign />
            </div>
            <div name="localization" className={view.page === "localization" ? "d-block" : "d-none"}>
                <Localization />
            </div>
            <div name="centers" className={view.page === "centers" ? "d-block" : "d-none"}>
                <Centers />
            </div>
            <div name="legals" className={view.page === "legals" ? "d-block" : "d-none"}>
                <Legals />
            </div>
        </div>
    )
}

export default Body