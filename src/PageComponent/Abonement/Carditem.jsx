import React from 'react'
import Column from '../../Component/components/Column'
import Card from '../../Component/components/Card'
import icon from './images/abonement.jpg'
import Link from '../../Component/components/Link'

const CardItem = ({ period, coast }) => {
    let period_time = ''

    switch (period) {
        case 'день':
            period_time = 'day'
            break;

        case 'неделя':
            period_time = 'week'
            break;

        case 'месяц':
            period_time = 'month'
            break;

        case 'год':
            period_time = 'year'
            break;
    }

    return (
        <Column>
            <Card>
                <div className='dark'></div>
                <img src={icon} alt="" />
                <p>Период: <span>{period}</span></p>
                <p>Стоимость: <span>{coast}</span></p>
            </Card>
            <Link to={`/pay?abonement=true&period=${period_time}&coach=false`} title='Купить'/>
        </Column>
    )
}

export default CardItem
