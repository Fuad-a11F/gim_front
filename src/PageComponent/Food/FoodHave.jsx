import React from 'react'
import FoodModalDetail from './FoodModalDetail'
import dots_icon from '../icon/dots.png'

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
                    <div onClick={() => detail_open(food.id)} className='food-theme'></div>
                </div>
                <div>
                    <p>{food.title}</p>
                </div>
            </div>
            {modal && <FoodModalDetail id={id} setModal={setModal} />}
        </>
    )
}

export default FoodHave
