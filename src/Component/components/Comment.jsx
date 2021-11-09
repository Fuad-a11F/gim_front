import axios from 'axios'
import React from 'react'
import { NavLink } from 'react-router-dom'
import TimeCorrect from '../../CorrectTime'
import none from './images/none_ava.png'
import like_active_icon from '../../PageComponent/icon/like_active.png'
import like_icon from '../../PageComponent/icon/like.png'

function setLike(array, comment_id, action) {
    if (!Array.isArray(array)) {
        return action == 'plus' ? {...array, likeCount: array.likeCount + 1, isLike: true} :
                action == 'minus' && {...array, likeCount: array.likeCount - 1, isLike: false}
    }
    let array_new = []
    for (let i = 0; i < array.length; i++) {
        if (array[i].id == comment_id){
            action == 'plus' ? array_new.push({...array[i], likeCount: array[i].likeCount + 1, isLike: true}) :
            action == 'minus' && array_new.push({...array[i], likeCount: array[i].likeCount - 1, isLike: false})
        }
        else 
            array_new.push(array[i])
    }
    return array_new
}

const Comment = ({ comment, setCommentLike }) => {
    function set_like(comment_id) {
        axios.post('http://127.0.0.2:8000/api/news/set_like_comment/', {comment_id}, {headers: {Authorization: 'Bearer ' + localStorage.getItem('token')}})            .then(data => {
            if (data.data.result === 'Лайк поставлен') {
                setCommentLike(prev => setLike(prev, comment_id, 'plus'))
            }

            else if (data.data.result === 'Лайк удален') {
                setCommentLike(prev => setLike(prev, comment_id, 'minus'))
            }
        })
    }
    
    return (
        <div className='comment'>
            <div className='comment__grid'>
                <div className='comment__image'>
                    <img src={comment.user.image ? comment.user.image : none} alt="" />
                </div>
                <div className='comment__text'>
                    <NavLink className='user-name' to={'/profile/' + comment.user.id}>{comment.user.username} {comment.user.lastname}</NavLink>
                    <span className='comment__time'>{TimeCorrect(comment.date, 'all')}</span>
                    <p>{comment.text}</p>
                </div>
                <div className='comment__like' onClick={() => set_like(comment.id)}>
                    <img className='comment-like_icon' src={comment.isLike ? like_active_icon : like_icon} alt='' width='30' height='30' />
                    <span>{comment.likeCount}</span>
                </div>
            </div>
        </div>
    )
}

export default Comment
