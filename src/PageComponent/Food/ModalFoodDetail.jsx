import axios from 'axios'
import React from 'react'
import Modal from '../../Modal/Modal'
import { NavLink } from 'react-router-dom'
import ButtonLink from '../../Component/components/ButtonLink'

const ModalFoodDetail = ({ id, setModal }) => {
    let [food, setFood] = React.useState([])

    React.useEffect(() => {
        axios.get('http://127.0.0.2:8000/api/food/get_food_program_detail/' + id, {headers: {Authorization: 'Bearer ' + localStorage.getItem('token')}}).then(data => setFood(data.data[0]))
    }, [])

    function set_active_program(active, id) {
        if (active) {
            axios.put('http://127.0.0.2:8000/api/food/delete_food_active_program/' + id, {headers: {Authorization: 'Bearer ' + localStorage.getItem('token')}}).then(() => {
                setFood(prev => {return {...prev, isActive: false}})
            })
        }

        else if (!active) {
            axios.put('http://127.0.0.2:8000/api/food/set_food_active_program/', {id}, {headers: {Authorization: 'Bearer ' + localStorage.getItem('token')}}).then(() => {
                setFood(prev => {return {...prev, isActive: true}})
            })
        }
    }

    return (
        <Modal setModal={setModal}>
            <div className="food__detail">
                {food.length != 0 && (
                    <div>
                        <p>Программа питания отправлена  <NavLink to={'/profile/' + food.user.id}>{food.user.username} {food.user.lastname}</NavLink>.</p>
                        <div className="food__row">
                            <p>Данная программа {!food.isActive && 'не'} выбрана в качестве основной.</p>
                            <ButtonLink onClick={() => set_active_program(food.isActive, food.id)} className='btn-food' title={food.isActive ? 'Убрать из основной' : 'Сделать основной'} />
                        </div>
                        
                        <p>Программа питания:</p>
                        {food.foodItems.map(item => {
                            return (
                                <p key={item.id}>{item.number}) {item.text}</p>
                            )
                        })}
                    </div>
                )}
                <p>{food.date}</p>
            </div>
        </Modal>
    )
}

export default ModalFoodDetail
