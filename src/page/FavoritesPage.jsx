import React from 'react'
import AbonementHOC from '../hoc/AbonementHOC'
import Favorites from '../PageComponent/Favorites/Favorites'

const FavoritesPage = () => {
    return (
        <div>
            <Favorites />
        </div>
    )
}

export default AbonementHOC(FavoritesPage)
