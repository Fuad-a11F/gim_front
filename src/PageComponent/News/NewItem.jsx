import React from 'react'
import CardNew from '../../Component/components/CardNew'
import image from './images/newImage.jpg'
import CommentForm from '../../Component/components/CommentForm'
import PopularComment from './PopularComment'
import CommentBottom from './CommentBottom'

const NewItem = ({ news, index }) => {
    return (
        <div className='new'>
            <CardNew title={news.title}>
                <div className="dark"></div>
                <img src={image} alt="" />
            </CardNew>
            <p>{news.text}</p>
            <PopularComment id={news.id} />
            <CommentForm index={index} id={news.id}/>
            <CommentBottom index={index} news={news} />
        </div>
    )
}

export default NewItem
