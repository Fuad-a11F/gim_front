import React from 'react'
import Row from '../Component/components/Row'
import AbonementHOC from '../hoc/AbonementHOC'
import Food from '../PageComponent/Food/Food'

const FoodPage = () => {
    return (
        <>
            <Row>
                <Food />

            </Row>
        </>
    )
}

export default AbonementHOC(FoodPage)
