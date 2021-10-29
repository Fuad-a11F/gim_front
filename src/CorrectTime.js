import moment from "moment"

export default function TimeCorrect(str, full_time = 'time') {
    if (full_time == 'all') {
        let day = moment(str.slice(0, str.indexOf('T'))).format('D')
        let month = moment(str.slice(0, str.indexOf('T'))).format('M')
        return day + MonthWithWord(Number(month)) + ' ' + str.slice(str.indexOf('T') + 1, str.lastIndexOf('.'))
    }
    
    else if (full_time == 'detail-date') {
        let month = moment(str.slice(0, str.indexOf('T'))).format('M')
        let day = moment(str.slice(0, str.indexOf('T'))).format('D')
        return day + MonthWithWord(Number(month))
    }
    
    else if (full_time == 'date') {
        return str.slice(0, str.indexOf('T'))
    }

    else if (full_time == 'time') {
        return str.slice(str.indexOf('T') + 1, str.lastIndexOf('.'))
    }

}


function MonthWithWord(month) {
    switch (month) {
        case 1:
            return ' январь'
            
        case 2:
            return ' февраль'
            
        case 3:
            return ' март'
            
        case 4:
            return ' апрель'
            
        case 5:
            return ' май'
            
        case 6:
            return ' июнь'
            
        case 7:
            return ' июль'
            
        case 8:
            return ' август'
            
        case 9:
            return ' сентябрь'
            
        case 10:
            return ' октябрь'
            
        case 11:
            return ' ноябрь'
            
        case 12:
            return ' декабрь'
            
    }
}