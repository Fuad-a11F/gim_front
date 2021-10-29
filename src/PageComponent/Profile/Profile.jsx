import axios from 'axios'
import React from 'react'
import { useDispatch } from 'react-redux'
import { add_user } from '../../redux/UserSlice'
import AboutMe from './AboutMe'
import Avatar from './Avatar'
import Contact from './Contact'
import MainInfo from './MainInfo'
import './Profile.css'
import Tabs from './Tabs'
import WrapperColumns from '../../Component/components/WrapperColumns'
import SideBar from '../../Component/components/SideBar'
import Main from '../../Component/components/Main'
import Navigations from './Navigations'
import { Route, Switch } from 'react-router'
import ProgramPart from './parts/ProgramPart'
import FriendPart from './parts/FriendPart'
import AbonementPart from './parts/AbonementPart'
import InvitationPart from './parts/InvitationPart'

const Profile = () => {
    let [active, setActive] = React.useState('Основная информация')
    let dispatch = useDispatch()
    let array_of_path = window.location.pathname.split('/')
    let user_id = 0

    array_of_path.forEach(item => {
        try {
            if (Number(item)) {
                user_id = item
            }
        } catch (error) {}
    })

    React.useEffect(() => {
        axios.get('http://127.0.0.2:8000/api/user/get_user/' + user_id, {headers: {Authorization: 'Bearer ' + localStorage.getItem('token')}})
            .then(data => dispatch(add_user(data.data)))
    }, [user_id])

    return (
        <div className='profile'>
            <div className="profile__row">
                <Avatar />
                <div className="profile__info-wrapper">
                    <Tabs active={active} setActive={setActive} />
                    {active === 'Основная информация' && <MainInfo user_id={user_id} />}
                    {active === 'Контакты' && <Contact user_id={user_id}/>}
                    {active === 'О себе' && <AboutMe />}
                </div>
            </div>
            <hr />
            <WrapperColumns>
                <SideBar>
                    <Navigations user_id={user_id}/>
                </SideBar>
                <Main>
                    <Switch>
                        <Route path='/profile/:id/programs' render={() => <ProgramPart />} />
                        <Route path='/profile/:id/friend' render={() => <FriendPart />} />
                        <Route path='/profile/:id/invitations' render={() => <InvitationPart />} />
                        <Route path='/profile/:id/abonement' render={() => <AbonementPart />} />
                    </Switch>
                </Main>
            </WrapperColumns>
        </div>
    )
}

export default Profile
