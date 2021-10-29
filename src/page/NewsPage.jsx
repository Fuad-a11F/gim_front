import React from 'react'
import AbonementHOC from '../hoc/AbonementHOC'
import News from '../PageComponent/News/News'

const NewsPage = () => {
    return (
        <div>
            <News />
        </div>
    )
}

export default AbonementHOC(NewsPage)
