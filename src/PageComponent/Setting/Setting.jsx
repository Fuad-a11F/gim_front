import React from 'react'
import { NavLink, Switch, Route } from 'react-router-dom'
import Main from '../../Component/components/Main'
import SideBar from '../../Component/components/SideBar'
import WrapperColumns from '../../Component/components/WrapperColumns'
import SideBarNav from '../../Component/components/SideBarNav'
import ChangePasswordPart from './parts/ChangePasswordPart'
import MainPart from './parts/MainPart'
import ParametersPart from './parts/ParametersPart'
import axios from 'axios'
import './Setting.css'
import CoachSetting from './parts/CoachSetting'
import StudentSetting from './parts/StudentSetting'
import SocialMedia from './parts/SocialMedia'
import SideBarNavItem from '../../Component/components/SideBarNavItem'

const Setting = () => {
    let [position, setPosition] = React.useState()

    React.useEffect(() => {
        axios.get('http://127.0.0.2:8000/api/user/check_position/', {headers: {Authorization: 'Bearer ' + localStorage.getItem('token')}})
            .then(data => setPosition(data.data))
    }, [])


    return (
        <div className='wrapper'>
            <div className="setting__wrapper">
                <WrapperColumns>
                    <SideBar>
                        <SideBarNav>
                            <SideBarNavItem link='/setting' title='Общие настройки' />
                            {position === 'student' && <SideBarNavItem link='/setting/student_setting' title='Пользовательские настройки' />}
                            {position === 'coach' && <SideBarNavItem link='/setting/coach_setting' title='Настройки для тренера' />}
                            <SideBarNavItem link='/setting/social_media' title='Соц. сети' />
                            <SideBarNavItem link='/setting/change_password' title='Сменить пароль' />
                            <SideBarNavItem link='/setting/parameters' title='Параметры' />
                        </SideBarNav>
                    </SideBar>
                    <Main>
                        <Switch>
                            <Route path='/setting/student_setting' render={() => <StudentSetting />} />
                            <Route path='/setting/social_media' render={() => <SocialMedia />} />
                            <Route path='/setting/coach_setting' render={() => <CoachSetting />} />
                            <Route path='/setting/change_password' render={() => <ChangePasswordPart />} />
                            <Route path='/setting/parameters' render={() => <ParametersPart />} />
                            <Route path='/setting' render={() => <MainPart />} />
                        </Switch>
                    </Main>
                </WrapperColumns>

            </div>
        </div>
    )
}

export default Setting
