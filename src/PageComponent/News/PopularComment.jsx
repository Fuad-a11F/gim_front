import axios from 'axios'
import React from 'react'
import Comment from '../../Component/components/Comment'

const PopularComment = ({ id }) => {
    let [popularComment, setPopularComment] = React.useState({})
    const source = axios.CancelToken.source();

    React.useEffect(() => {
        axios.get('http://127.0.0.2:8000/api/news/get_popular_comment/' + id, {headers: {Authorization: 'Bearer ' + localStorage.getItem('token')}})
            .then(data => setPopularComment(data.data))

        return () => {
            source.cancel();
        };
    }, [])

    return (
        <div className='popular__comment'>
            {popularComment.new == null && <p>Комментариев нет!</p>}
            {popularComment.new && <Comment comment={popularComment} setCommentLike={setPopularComment} />}
        </div>
    )
}

export default PopularComment
