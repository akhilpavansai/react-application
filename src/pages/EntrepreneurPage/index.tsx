import React from 'react'
import { Grid, Paper } from '@material-ui/core'
import DefaultBookCardsHolder from '../../components/templates/BookCardsHolder/index'
import AddToLibraryBookCardsHolder from '../../components/templates/AddToLibraryBookCardsHolder/index'
import { DefaultFooter } from '../../components/organisms/Footer/index.stories'
import { DefaultHeader } from '../../components/organisms/Header/index.stories'
import { DefaultExplorePoster } from '../../components/molecules/ExplorePoster/index.stories'
import { DefaultSearchBar } from '../../components/organisms/SearchBar/index.stories'
import { trendingBlinksData,justAddedBlinksData,featuredAudioBlinksData } from '../../data/Data'

const index = () => {
    

    return (
        <>
        {/* <Paper style={{margin:'0px auto',width:'1440px'}}> */}
        <div style={{display:'flex',justifyContent:'center',flexDirection:'column',width:'1440px'}}>
            <Grid container style={{justifyContent:'center',marginTop:'32px',marginBottom:'80px'}}>
                <Grid item>
                    <DefaultExplorePoster />
                </Grid>
                <Grid item style={{width:'912px',marginTop:'58px'}}>
                    <DefaultSearchBar/>
                </Grid>
            </Grid>
            <AddToLibraryBookCardsHolder booksData={trendingBlinksData}  statusbar='False'>Trending Blinks</AddToLibraryBookCardsHolder>
            <AddToLibraryBookCardsHolder booksData={justAddedBlinksData}  statusbar='False'>Just added</AddToLibraryBookCardsHolder>
            <div style={{marginBottom:'76px'}}>
            <AddToLibraryBookCardsHolder booksData={featuredAudioBlinksData}  statusbar='False'>Featured audio blinks</AddToLibraryBookCardsHolder>
            </div>
            </div>
        {/* </Paper> */}
            
        </>
    )
}

export default index
