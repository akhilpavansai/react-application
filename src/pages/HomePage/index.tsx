import { Box, Paper } from '@material-ui/core'
import DefaultBookCardsHolder from '../../components/templates/BookCardsHolder/index'
import { DefaultFooter } from '../../components/organisms/Footer/index.stories'
import { DefaultHeader } from '../../components/organisms/Header/index.stories'
import { Heading1 } from '../../components/atoms/Typography/index.stories'
import { DefaultReadingStatusBar } from '../../components/molecules/ReadingStatus/index.stories'
import { booksData } from '../../data/Data'

const index = () => {

    return (
        <>
        {/* <Paper style={{margin:'0px auto',width:'1440px'}}> */}
        <div style={{marginBottom:'111px'}}>
            <DefaultBookCardsHolder booksData={booksData} fontsize='36px'>My Library</DefaultBookCardsHolder>
        </div>
        {/* </Paper> */}
        </>
    )
}

export default index
