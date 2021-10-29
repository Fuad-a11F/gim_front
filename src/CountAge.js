import moment from 'moment'

export function CountAge(date) {
    if (date == 'Загрузка...') return
    return moment(date, "YYYYMMDD").fromNow().slice(0, 2)
}