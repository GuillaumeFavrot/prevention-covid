import React from 'react'

function Campaign() {
  return (
    <div className='container-fluid d-flex flex-column'>
        <h1 className='text-center mt-5 mb-3'>Campagne de vaccination</h1>
        <h4 className='text-center mb-5'>Retrouvez toutes les informations sur la campagne de vaccination en cours.</h4>
        <p>La stratégie vaccinale mise en place doit nous permettre de remplir trois objectifs de santé publique :</p>
        <ul>
            <li><strong>Faire baisser la mortalité</strong> et les formes graves de la maladie ;</li>
            <li><strong>Protéger les soignants</strong> et le système de soins ;</li>
            <li><strong>Garantir la sécurité</strong> des vaccins et de la vaccination.</li>
        </ul>
        <p className='bold'> Depuis le 15 juin 2021, la vaccination est accessible à tous, dès 12 ans, et depuis le 22 décembre 2021, la vaccination est possible pour tous les enfants âgés de 5 à 11 ans, à l’exception de ceux présentant des contre-indications (voir liste plus bas).</p>
        <p>Par ailleurs :</p>
        <ul>
            <li>La vaccination est recommandée dès le 1er trimestre de grossesse pour les femmes enceintes.</li>
            <li>La vaccination est recommandée pour les personnes souffrant de comorbidités associées à un risque de développer une forme grave de Covid-19.</li>
            <li>La vaccination n’est pas recommandée pour les adolescents ayant développé un syndrome inflammatoire multi-systémique pédiatrique (PIMS) à la suite d’une infection au Covid-19.</li>
        </ul>
        <p><strong>Depuis le 1er septembre 2021 une campagne de rappel a été mise en place</strong> pour stimuler le système immunitaire des plus vulnérables. Ciblant d’abord les personnes les plus vulnérables, elle a ensuite été étendue à toute la population de 18 ans et plus, puis à la population des 12-17 ans.</p>
        <p>Il convient d’attendre un délai de 3 mois (6 mois pour les 12-17 ans) entre la dernière dose reçue, complétant le schéma vaccinal initial, et cette dose de rappel. Ce délai est réduit à 4 semaines pour les personnes ayant reçu une dose de vaccin Janssen.</p>
        <p>Les rappels vaccinaux sont effectués uniquement avec des vaccins à ARNm (Pfizer-BioNTech ou Moderna). Ces deux vaccins peuvent être utilisés quel que soit le vaccin utilisé dans le cadre du premier schéma vaccinal, mais le vaccin Pfizer-BioNTech est recommandé pour les personnes de moins de 30 ans.</p>
        <h5 className='text-center mt-5 mb-5'>Les particuliers concernés</h5>
        <img className="w-100 text-center mb-5 d-none d-lg-block" src="https://solidarites-sante.gouv.fr/local/adapt-img/1024/10x/IMG/png/infog_vaccins_particuliers.png?1665069533" alt=""></img>
        <div className='w-100 text-center d-lg-none'><a className='btn btn-custom-big text-white' href='https://solidarites-sante.gouv.fr/local/adapt-img/1024/10x/IMG/png/infog_vaccins_particuliers.png?1665069533'>Visualisez l'infographie</a></div>
        <h5 className='text-center mt-5 mb-5'>Le rappel, pour qui? et où?</h5>
        <img className="w-100 text-center mb-5 d-none d-lg-block" src="https://solidarites-sante.gouv.fr/local/adapt-img/1024/10x/IMG/png/infographie_-dose_rappel_26-08.png?1661516635" alt=""></img>
        <div className='w-100 text-center d-lg-none'><a className='btn btn-custom-big text-white' href='https://solidarites-sante.gouv.fr/local/adapt-img/1024/10x/IMG/png/infographie_-dose_rappel_26-08.png?1661516635'>Visualisez l'infographie</a></div>
        <h5 className='text-center mt-5 mb-5'>Les professionnels concernés</h5>
        <img className="w-100 text-center mb-5 d-none d-lg-block" src="https://solidarites-sante.gouv.fr/local/adapt-img/1024/10x/IMG/png/infog_vaccins_professionnels.png?1660824328" alt=""></img>
        <div className="w-100 text-center mb-5 d-lg-none"><a className="btn btn-custom-big text-white" href="https://solidarites-sante.gouv.fr/local/adapt-img/1024/10x/IMG/png/infog_vaccins_professionnels.png?1660824328">Visualisez l'infographie</a></div>
    </div>
  )
}

export default Campaign