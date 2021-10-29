import React from 'react'

const Tabs = ({ active, setActive }) => {
    let TAB = ['Основная информация', 'Контакты', 'О себе']

    return (
        <div className="profile__tabs">
            {TAB.map(item => (
                <div key={item} onClick={() => setActive(item)} className={"profile__tab " + (active == item ? "tab-active" : '')}>
                    <h4>{item}</h4>
                </div>
            ))}
        </div>
    )
}

export default Tabs
