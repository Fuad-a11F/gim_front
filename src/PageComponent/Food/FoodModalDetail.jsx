import axios from 'axios'
import React from 'react'
import Modal from '../../Modal/Modal'

const FoodModalDetail = ({ setModal, id }) => {
    let [detail, setDetail] = React.useState()
    
    React.useEffect(() => {
        axios.get('http://127.0.0.2:8000/api/food/get_detail_food/'+id, {headers: {Authorization: 'Bearer ' + localStorage.getItem('token')}}).then(data => setDetail(data.data))
    }, [])

    return (
        <Modal setModal={setModal} >
            <div className='FoodModalDetail'>
                {detail && (
                    <>
                        <div className='foodModalDetail__row'>
                            <div className='food__description-wrapper'>
                                <p className='food__description'>{detail.description}</p>
                            </div>
                            <div className='food__kilo-wrapper'>
                                <p>Белков: {detail.proteins}</p>
                                <p>Жиров: {detail.fats}</p>
                                <p>Углеводов: {detail.carbohydrates}</p>
                            </div>
                        </div>
                        <hr className='FoodModalDetail__hr'/>
                        <div>
                            <p>Стоимость: {detail.price}</p>
                        </div>
                    </>     
                )}
            </div>   
        </Modal>
    )
}

export default FoodModalDetail
