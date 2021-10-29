import React from 'react'
import AbonementHOC from '../hoc/AbonementHOC'
import Music from '../PageComponent/Music/Music'
import Subscribe from '../PageComponent/Music/Subscribe'

const MusicPage = () => {
    let [paid, setPaid] = React.useState(true)

    return (
        <div>
            {!paid && <Subscribe />}
            {paid && (window.location.pathname.lastIndexOf('/') == 0 ? <Music /> : <Music path={window.location.pathname} />)}
        </div>
    )
}

export default AbonementHOC(MusicPage)
