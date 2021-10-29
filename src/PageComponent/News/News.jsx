import React from 'react'
import SideBar from '../../Component/components/SideBar'
import WrapperColumns from '../../Component/components/WrapperColumns'
import Main from '../../Component/components/Main'
import NewItem from './NewItem'
import Loading from '../../Loading/Loading'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { add_new } from '../../redux/newSlice'
import LastFivePerson from './LastFivePerson'
import './News.css'

const News = () => {
    let dispatch = useDispatch()
    let [loading, setLoading] = React.useState(true)
    let news = useSelector(state => state.new.new)
    const source = axios.CancelToken.source();

    function getAsyncNews() {
        return async dispatch => {
            setLoading(true)
            let data = await axios.get('http://127.0.0.2:8000/api/news/get_all/', {headers: {Authorization: 'Bearer ' + localStorage.getItem('token')}})
            dispatch(add_new(data.data))
            setLoading(false)
        }
    }

    React.useEffect(() => {
        dispatch(getAsyncNews())
        return () => {
            source.cancel();
        };

    }, [])

    return (
        <>
        <WrapperColumns>
            <SideBar>
                <LastFivePerson />
            </SideBar>
            <Main>
                {news.map((item, i) => {
                    return <NewItem key={item.id} index={i} news={item}/>
                })}
            </Main>
        </WrapperColumns>
        {loading && <Loading />}
        </>
    )
}

export default News
