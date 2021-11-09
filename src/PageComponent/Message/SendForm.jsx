import { Button, makeStyles } from '@material-ui/core'
import React from 'react'
import InputText from '../../Component/components/InputText'
import addForm from '../icon/addFile.png'
import send from '../icon/send.png'


const SendForm = () => {
    let useStyles = makeStyles({
        btn: {
            backgroundColor: 'orange',
            marginTop: '6px',
            '&:hover': {
                background: "orange",
            },
        },
        
    })
    return (
        <div className='message__bottom'>
            <div className='send__row'>
                <div className='send__image'>
                    <img src={addForm} width='21' height='22' alt="" />
                </div>
                <input type="text" />
                <Button className={useStyles().btn}><img src={send} width='30' height='30' alt="" /></Button>
            </div>
        </div>
    )
}

export default SendForm
