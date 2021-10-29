import React from 'react'
import InputText from '../../../Component/components/InputText'

const SocialMedia = () => {
    return (
        <div>
            <h1>Прикрепите ссылки на свои соц. сети</h1>
            <InputText name='name' label='Instagram' placeholder='https://www.instagram.com/'/>
            <InputText name='name' label='Facebook' placeholder='https://www.facebook.com/'/>
            <InputText name='name' label='Twitter' placeholder='https://www.twitter.com/'/>
        </div>
    )
}

export default SocialMedia
