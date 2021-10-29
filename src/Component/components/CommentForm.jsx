import React from 'react'
import InputText from './InputText'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { change_count_comment } from '../../redux/newSlice'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';
import send_icon from '../../PageComponent/icon/send.png'

const CommentForm = ({ id, index }) => {
    let [value, setValue] = React.useState('')
    let dispatch = useDispatch()

    let useStyles = makeStyles({
        btn: {
            backgroundColor: 'orange',

            '&:hover': {
                background: "orange",
            },
        },
        
    })
    
    function create_comment(e) {
        e.preventDefault()
        axios.post('http://127.0.0.2:8000/api/news/create_comment/', {new: id, text: value}, {headers: {Authorization: 'Bearer ' + localStorage.getItem('token')}})
            .then(() => {
                setValue('')
                dispatch(change_count_comment({index, action: 'plus'}))
            })
    }

    return (
        <form action="#" onSubmit={(e) => create_comment(e)}>
            <div className="comment__form">
                <InputText value={value} setValue={setValue} placeholder='Оставить комментарий'/>
                <Button type='submit' className={useStyles().btn} variant="outlined"> <img src={send_icon} width='30' height='30' alt="" /> </Button>
            </div>
        </form>
    )
}

export default CommentForm
