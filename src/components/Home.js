import React from 'react'
import { useSelector } from 'react-redux'
import Question from './Question'


function Home() {


    const content = useSelector(state => state.content)


    return (
        <div className='container-fluid'>
            <h1 className='text-center mt-5 mb-4'>Qu'est-ce que la vaccination ?</h1>
            <h4 className='text-center mb-3'>Des doutes relatifs à la vaccination ? </h4>
            <h4 className='text-center mb-3'>Consultez nos questions / Réponses !</h4>
            <div className='mt-3'>
                {content.faq.map((question)=>(
                    <Question key={question.question} question={question}/>
                ))}       
            </div>
        </div>
    )
}

export default Home