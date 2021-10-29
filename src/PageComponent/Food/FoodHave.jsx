import React from 'react'
import FoodModalDetail from './FoodModalDetail'

const FoodHave = ({ food }) => {
    let [modal, setModal] = React.useState(false)
    let [id, setId] = React.useState()

    function detail_open(food_id) {
        setModal(true)
        setId(food_id)
    }

    return (
        <>
            <div>
                <div className='foodHave'>
                    <img src={food.image} alt="" />
                </div>
                <div>
                    <p>{food.title}</p>
                    <button onClick={() => detail_open(food.id)} className='button'>Подробнее</button>
                </div>
            </div>
            {modal && <FoodModalDetail id={id} setModal={setModal} />}
        </>
    )
}

export default FoodHave
