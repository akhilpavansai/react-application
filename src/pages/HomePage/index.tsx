import React from 'react'
import DefaultBookCardsHolder from '../../components/templates/BookCardsHolder/index'
import { booksData } from '../../data/Data'

const index = () => {

    return (
        <>
            <div style={{marginBottom:'111px'}}>
                <DefaultBookCardsHolder booksData={booksData} fontsize='36px'>My Library</DefaultBookCardsHolder>
            </div>
        </>
    )
}

export default index
