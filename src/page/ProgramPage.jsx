import React from 'react'
import AbonementHOC from '../hoc/AbonementHOC'
import Program from '../PageComponent/Program/Program'


const ProgramPage = () => {
    return (
        <div>
            <Program />
        </div>
    )
}

export default AbonementHOC(ProgramPage)
