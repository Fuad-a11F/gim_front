import React from 'react'
import styles from './Loading.module.css'
import picture from './images/loadingPicture.jpg'
import icon from './images/loading.png'

const Loading = () => {
    let [loading, setLoading] = React.useState('Загрузка')

    function count(str) {
        if (!str.includes('.')) return 0
        let count = 0
        for (let i = 0; i < str.length; i++) {
            if (str[i] == '.') count++
        }
        return count
    }

    React.useEffect(() => {
        setInterval(() => {
            setLoading(prev => prev+='.')
        }, 900)
    }, [])

    React.useEffect(() => {
        if (count(loading) > 3) {
            setLoading('Загрузка')
        }
    }, [loading])

    return (
        <div className={styles.loading__wrapper}>
            <div className={styles.dark}></div>
            <img className={styles.theme} src={picture} alt="" />
            <img className={styles.icon} src={icon} alt="" width='90' height='90' />
            <p className={styles.label}>{loading}</p>
        </div>
    )
}

export default Loading
