import React from 'react'
import { Grid, Paper } from '@material-ui/core'
import DefaultBookCardsHolder from '../../components/templates/BookCardsHolder/index'
import AddToLibraryBookCardsHolder from '../../components/templates/AddToLibraryBookCardsHolder/index'
import { DefaultFooter } from '../../components/organisms/Footer/index.stories'
import { DefaultHeader } from '../../components/organisms/Header/index.stories'
import { DefaultExplorePoster } from '../../components/molecules/ExplorePoster/index.stories'
import { DefaultSearchBar } from '../../components/organisms/SearchBar/index.stories'
import { booksData } from '../../data/Data'

const index = () => {
    

    return (
        <>
            <div style={{display:'flex',justifyContent:'center',flexDirection:'column',width:'1440px'}}>
                <Grid container style={{justifyContent:'center',marginTop:'32px',marginBottom:'80px'}}>
                    <Grid item>
                        <DefaultExplorePoster />
                    </Grid>
                    <Grid item style={{width:'912px',marginTop:'58px'}}>
                        <DefaultSearchBar/>
                    </Grid>
                </Grid>
                <AddToLibraryBookCardsHolder booksData={booksData} numberofbooks="6" statusbar='False'>Trending Blinks</AddToLibraryBookCardsHolder>
                <AddToLibraryBookCardsHolder booksData={booksData} numberofbooks="3" statusbar='False'>Just added</AddToLibraryBookCardsHolder>
                <div style={{marginBottom:'76px'}}>
                    <AddToLibraryBookCardsHolder booksData={booksData} numberofbooks="3" statusbar='False'>Featured audio blinks</AddToLibraryBookCardsHolder>
                </div>
            </div>
        </>
    )
}

export default index
