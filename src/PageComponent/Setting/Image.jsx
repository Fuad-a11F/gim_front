import React from 'react'
import avatarka from './images/none_ava.png'
import change_image_icon from '../icon/change_image.svg'

const Image = ({ image, setImage }) => {
    let readFile = React.useRef()
    let [img, setImg] = React.useState('')

    function image_update(e) {
        if (readFile.current.files[0]) {
            let reader = new FileReader()
            console.log(e.target.files);
            reader.readAsDataURL(e.target.files[0])

            setImage(readFile.current.files[0])
            
            reader.onload = function() {
                setImg(reader.result)
            }
        }
    }

    return (
        <div className='setting__image'>
            <input ref={readFile} onChange={(e) => image_update(e)} type="file" className='file_input' />
            <div onClick={() => readFile.current.click()} className='file_add_button'>
                <img className='add_image-icon' src={change_image_icon} alt="" />
            </div>
            <img className='avatarka_img' src={image ? image : avatarka} alt="" />
        </div>
    )
}

export default Image
