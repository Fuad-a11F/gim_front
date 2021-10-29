import React from 'react'

const Filter = () => {
    return (
        <div className='filter'>
            <h3>Фильтры</h3>
            <div className='filter_row'>
                <p>По году: </p>
                <div>
                    <select name="" id="">
                        <option value="1950">Мин</option>
                        <option value="1950">1950</option>
                        <option value="1950">1950</option>
                        <option value="1950">1950</option>
                    </select>
                    <select name="" id="">
                        <option value="1950">Макс</option>
                        <option value="1950">1950</option>
                        <option value="1950">1950</option>
                        <option value="1950">1950</option>
                    </select>
                </div>        
            </div>
            <div className='filter_row'>
                <p>По жанру: </p>
                <div>
                    <select name="" id="">
                        <option value="Все">Все</option>
                        <option value="Джаз">Джаз</option>
                        <option value="Рок-н-ролл">Рок-н-ролл</option>
                        <option value="Рэп">Рэп</option>
                        <option value="Рок">Рок</option>
                        <option value="Тяжелый рок">Тяжелый рок</option>
                        <option value="Шансон">Шансон</option>
                        <option value="Классическая">Классическая</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default Filter
