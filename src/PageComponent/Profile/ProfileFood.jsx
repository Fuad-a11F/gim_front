import axios from 'axios'
import React from 'react'

const ProfileFood = () => {
    let [food, setFood] = React.useState()

    React.useEffect(() => {
        axios.get('http://127.0.0.2:8000/api/food/get_food_active_program/', {headers: {Authorization: 'Bearer ' + localStorage.getItem('token')}})
            .then(data => setFood(data.data[0].foodItems))
    }, [])

    return (
        <div>
            <p>Программа питания: </p>
            {food && (
                <ul>
                    {food.map(item => <li>{item.number}. {item.text}</li>)}
                </ul>
            )}
        </div>
    )
}

export default ProfileFood
