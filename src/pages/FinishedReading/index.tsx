import React from 'react'
import FinishedBookCardsHolder from '../../components/templates/FinishedBookCardsHolder/index';
import { booksData  } from '../../data/Data';
const index = () => {
    console.log(" in finished reading page ");
    return (
        <>
        <div style={{marginBottom:'254px'}}>
            <FinishedBookCardsHolder booksData={booksData} fontsize='36px' >My Library</FinishedBookCardsHolder>
            </div>
        </>
    )
}

export default index
