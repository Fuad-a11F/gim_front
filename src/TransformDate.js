import moment from 'moment'

export default function TransformDate(date) {
    if (date == 'Сегодня') 
        return moment().format('YYYY-MM-DD')

    else if (date == 'Завтра')
        return moment().add(1, 'days').format('YYYY-MM-DD')

    else if (date == 'Послезавтра') 
        return moment().add(2, 'days').format('YYYY-MM-DD')
    
    return date.replaceAll(' ', '-');
}