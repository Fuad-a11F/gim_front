import axios from 'axios'
import React from 'react'
import TimeCorrect from '../../CorrectTime'
import ModalComments from './ModalComments'
import like_active_icon from '../icon/like_active.png'
import like_icon from '../icon/like.png'
import comment_icon from '../icon/comment.png'

const CommentBottom = ({ news, index }) => {
    let [like, setLike] = React.useState({})
    const source = axios.CancelToken.source();
    let [modal, setModal] = React.useState(false)

    React.useEffect(() => {
        axios.get('http://127.0.0.2:8000/api/news/get_like_new/' + news.id, { headers: { Authorization: 'Bearer ' + localStorage.getItem('token') } })
            .then(data => setLike(data.data))

        return () => {
            source.cancel();
        };
    }, [])

    function set_like() {
        axios.post('http://127.0.0.2:8000/api/news/set_like_new/', {new_id: news.id}, {headers: {Authorization: 'Bearer ' + localStorage.getItem('token')}})
            .then(data => {
                if (data.data.result === 'Лайк поставлен') {
                    setLike({count: like.count += 1, isLike: !like.isLike})
                }
                else if (data.data.result === 'Лайк удален') {
                    setLike({count: like.count -= 1, isLike: !like.isLike})
                }
            })
    }

    return (
        <>
        <div className="new__row">
            <div className="new__buttons">
                {like && <img className='like_icon' onClick={() => set_like()} src={like.isLike ? like_active_icon : like_icon} alt="" width='30' height='30' />} 
                <span className='like_count'>{like.count}</span>
                <img className='comment_icon' src={comment_icon} alt='' onClick={() => setModal(true)} width='30' height='30'/> 
                <span>{news.commentCount}</span>
            </div>
            <div className="new__date">
                <p>{TimeCorrect(news.date, 'detail-date')}</p>
            </div>
        </div>
        {modal && <ModalComments index={index} id={news.id} setModal={setModal}/>}
        </>
    )
}

export default CommentBottom
