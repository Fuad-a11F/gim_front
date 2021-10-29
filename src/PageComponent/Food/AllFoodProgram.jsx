import axios from 'axios'
import React from 'react'
import { NavLink } from 'react-router-dom'
import ModalFoodDetail from './ModalFoodDetail'

const AllFoodProgram = ({ setActive }) => {
    let [allProgram, setAllProgram] = React.useState([])
    let [modal, setModal] = React.useState(false)
    let [id, setId] = React.useState(-1)

    React.useEffect(() => {
        axios.get('http://127.0.0.2:8000/api/food/get_food_program/', {headers: {Authorization: 'Bearer ' + localStorage.getItem('token')}})
            .then(data => setAllProgram(data.data))
    }, [])

    function more(itemId) {
        setModal(true)
        setId(itemId)
    }


    return (
        <>
            <div>
                <button onClick={() => setActive(true)}>назад</button>
                {allProgram.map(item => {
                    return (
                        <div key={item.id} className='allFoodProgram'>
                            {item.isNew && <div className='new-food'>Новая</div>}
                            <div>
                                <div>
                                    <div className='allFood__row'>
                                        <p>Тренер: </p>
                                        <NavLink to={'/profile/' + item.user.id}>{item.user.name} {item.user.lastname}</NavLink>                               
                                    </div>
                                    <div className='allFood__row'>
                                        <p>Отправлено в: {item.date}</p>                             
                                    </div>
                                    <div className='allFood__row'>
                                        <p>Описание: {item.text}</p>                             
                                    </div>
                                </div>
                                <button onClick={() => more(item.id)}>Подробнее</button>
                            </div>
                        </div>
                    )
                })}
            </div>
            {modal && <ModalFoodDetail setModal={setModal} id={id}/>}
        </>
    )
}

export default AllFoodProgram
