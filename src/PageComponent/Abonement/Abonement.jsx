import React from 'react'
import Row from '../../Component/components/Row'
import Advantages from './Advantages'
import CardItem from './Carditem'
import Coaches from './Coaches'
import './Abonement.css'

const Abonement = () => {
    return (
        <div className='abonement'>
            <h1>Необходимо приобрести абонемент!</h1>
            {/* <Advantages /> */}
            <Coaches />
            <h2>Одиночный абонемент</h2>
            <Row>
                <CardItem period='день' coast='132'/>
                <CardItem period='неделя' coast='324'/>
                <CardItem period='месяц' coast='34'/>
                <CardItem period='год' coast='432'/>
            </Row>
        </div>
    )
}

export default Abonement
