import React from 'react'
import { useSelector } from 'react-redux'
import Legal from './Legal'

function Legals() {

    const content = useSelector(state => state.content)

    return (
        <div className='container-fluid'>
            <h1 className='text-center mt-5 mb-3'>Mentions légales</h1>
            <p>Conformément aux dispositions de l'article 6 III 1° de la loi n°2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique, nous vous informons des éléments suivants :</p>
            <div className='mt-3'>
                {content.mentions.map((mention)=>(
                    <Legal key={mention.title} mention={mention}/>
                ))}       
            </div>
        </div>
    )
}

export default Legals