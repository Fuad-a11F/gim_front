import axios from 'axios'
import React from 'react'
import CardDraft from './CardDraft'

const Draft = () => {
    let [draft, setDraft] = React.useState([])
    let [draftVariant, setDraftVariant] = React.useState('Program')

    React.useEffect(() => {
        if (draftVariant == 'Program') {
            axios.get('http://127.0.0.2:8000/api/gim/get_draft_program/', {headers: {Authorization: 'Bearer ' + localStorage.getItem('token')}})
                .then(data => setDraft(data.data))
        }

        else if (draftVariant == 'Food') {
            axios.get('http://127.0.0.2:8000/api/food/get_draft_food/', {headers: {Authorization: 'Bearer ' + localStorage.getItem('token')}})
                .then(data => setDraft(data.data))
        }
    }, [draftVariant])

    return (
        <div>
            <h2>Черновик</h2>
            <select onChange={(e) => setDraftVariant(e.target.value)} name="" id="">
                <option value="Program">Программа</option>
                <option value="Food">Еда</option>
            </select>
            {draft.length != 0 && (
                draft.map(item => {
                    return  <CardDraft card={item} />
                })
            )}
      

        </div>
    )
}

export default Draft
