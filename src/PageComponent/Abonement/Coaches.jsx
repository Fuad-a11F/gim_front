import axios from 'axios'
import React from 'react'

import Coach from './Coach'


const Coaches = () => {
    let [coaches, setCoaches] = React.useState([])

    React.useEffect(() => {
        axios.get('http://127.0.0.2:8000/api/gim/coaches/', {headers: {Authorization: 'Bearer ' + localStorage.getItem('token')}})
            .then(data => setCoaches(data.data))
    }, [])

    return (
        <>
           <h2>Наши тренера</h2>
           <div className="coach__row">
               {coaches.map(item => <Coach coach={item}/>)}
           </div>
        </>
    )
}

export default Coaches
