import React from 'react'
import Main from '../../Component/components/Main'
import SideBar from '../../Component/components/SideBar'
import WrapperColumns from '../../Component/components/WrapperColumns'
import './Favorites.css'

const Favorites = () => {
    return (
        <WrapperColumns>
            <SideBar>
                <ul>
                    <li>Все</li>
                    <li>Новости</li>
                    <li>Посты</li>
                </ul>
            </SideBar>
            <Main>
1   
            </Main>
        </WrapperColumns>
    )
}

export default Favorites
