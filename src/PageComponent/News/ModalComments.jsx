import axios from 'axios'
import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import CommentForm from '../../Component/components/CommentForm'
import Comment from '../../Component/components/Comment'
import Modal from '../../Modal/Modal'
import { comment_new_add } from '../../redux/newSlice'
import news_image from './images/newImage.jpg'
import { Button, makeStyles } from '@material-ui/core'

const ModalComments = ({ setModal, id, index }) => {
    let dispatch = useDispatch()
    let new_comment = useSelector(state => state.new.comment_new)
    let [comment, setComment] = React.useState([])
    let [nextComment, setNextComment] = React.useState('')

    let styles = makeStyles({
        btn: {
            color: 'white',

        }
    })
    
    React.useEffect(() => {
        dispatch(comment_new_add(id))
        axios.get('http://127.0.0.2:8000/api/news/get_all_comment/' + id, {headers: {Authorization: 'Bearer ' + localStorage.getItem('token')}})
            .then(data => {
                setComment(data.data.results);
                setNextComment(data.data.next);
            })
    }, [])

    function next_page_comment() {
        axios.get(nextComment, {headers: {Authorization: 'Bearer ' + localStorage.getItem('token')}})
            .then(data => {
                setComment(prev => [...prev, ...data.data.results]);
                setNextComment(data.data.next);
            })
    }

    return (
        <Modal setModal={setModal}>
            <div className='modalComments'>
                <div className="modalComments__image">
                    {new_comment && <img src={new_comment.image ?? news_image} alt="" />}
                </div>
                
                <div className="modalComments__comment">
                    {new_comment && <p>{new_comment.text}</p>}
                </div>

                <p>Комментарии {new_comment.commentCount}</p>

                <CommentForm id={id} index={index} />

                {comment.map(item => {
                    return (
                        <Comment comment={item} setCommentLike={setComment}/>
                    )
                })}
                {nextComment != null && (
                    <div className='load_more-wrapper'>
                        <Button className={styles().btn} onClick={() => next_page_comment()}>Загрузить еще</Button>
                    </div>
                )}
            </div>
        </Modal>
    )
}

export default ModalComments
