import React from 'react'
import InputCheck from '../../../Component/components/InputCheck'

const ParametersPart = () => {
    let [photo, setPhoto] = React.useState()
    let [write, setWrite] = React.useState()
    return (
        <div>
            <InputCheck value={photo} setValue={setPhoto} >Мою фотографию могут видеть только друзья.</InputCheck>
            <InputCheck value={write} setValue={setWrite} >Мне могут писать только друзья.</InputCheck>
        </div>
    )
}

export default ParametersPart
