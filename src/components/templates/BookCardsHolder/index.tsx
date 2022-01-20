import { Box, Grid } from '@material-ui/core'
import { DefaultBookCard } from '../../molecules/BookCard/index.stories'
import BookCard from '../../molecules/BookCard/index';
import { Heading1 } from '../../atoms/Typography/index.stories';
import Tp from '../../atoms/Typography/index';
import ReadingStatus from '../../molecules/ReadingStatus/index';

const index = ({booksData=[],bookImagesData=[],statusbar='True',fontsize='24px',children}:any) => {
    
    return (
        <>
            <Grid container direction='column' wrap='nowrap' style={{margin:'0 auto',width:"1440px",justifyContent:'center',alignItems:'center'}}>
                {/* <Grid item container style={{justifyContent:'center',paddingBottom:'30px'}}  >
                    <Grid item container direction='column' wrap='nowrap' style={{marginTop:'59px'}}>
                    <Grid item>
                        <Heading1/>
                    </Grid>
                    <Grid item>
                        <Heading1/>
                    </Grid>
                </Grid>
                </Grid> */}

                {/* sx={{
                        p: 1,
                        m: 1,
                        border: '1px solid'}} */}

                {/* <Box style={{marginTop:'59px',}}> */}
                    <Tp type='h1' customstyle={{width:'912px',marginTop:'59px',alignSelf:'left',fontWeight:"bold", color:"#03314B", display:"inline",fontSize:fontsize||'24px'}}>{children}</Tp>
                {/* </Box> */}
                <Box style={{marginTop:'60px',marginBottom:'25px',display:(statusbar=='True')?'block':'none'}}>
                    <ReadingStatus></ReadingStatus>
                </Box>
                <Box display='flex' sx={{
          display: 'flex',
          flexWrap: 'wrap',
          maxWidth: 942,
          borderRadius: 1,
        }} >
                {booksData.map((temp: { bookimage: string | number; booktitle: any; authorname: any; minutesread: any; }) => {
                    
                    return(<Box style={{marginRight:'30px',marginBottom:'25px'}}>
                            <BookCard bookimage={temp.bookimage} cardtitle={temp.booktitle} authorname={temp.authorname} minutesread={temp.minutesread} bgcolor="#E1ECFC"></BookCard>
                    </Box>)
                    })}
                </Box>

                {/* <Grid item container style={{justifyContent:'center',paddingBottom:'30px'}}  >
                    <Grid item style={{paddingRight:'30px'}} >
                        <BookCard bookimage={BringYourHumanToWorkCover} cardtitle="Bring Your Human To Work" authorname="Erica Keswin" minutesread="13-minute read" bgcolor="#E1ECFC"></BookCard>
                    </Grid>
                    <Grid item style={{paddingRight:'30px'}}>
                        <DefaultBookCard></DefaultBookCard>
                    </Grid>
                    <Grid item>
                        <BookCard bookimage={DoesntHurtToAskCover} cardtitle="Doesn't Hurt To Ask" authorname="Trey Gowdy" minutesread="13-minute read" bgcolor="#E1ECFC"></BookCard>
                    </Grid>
                </Grid>
                <Grid item container style={{justifyContent:'center',paddingBottom:'30px'}}>
                    <Grid item style={{paddingRight:'30px'}}>
                        <BookCard bookimage={TheFateOfFoodCover} cardtitle="The Fate Of Food" authorname="Amanda Little" minutesread="12-minute read" bgcolor="#E1ECFC"></BookCard>
                    </Grid>
                    <Grid item style={{paddingRight:'30px'}}>
                        <BookCard bookimage={LivesOfTheStoicsCover} cardtitle="Lives Of The Stoics" authorname="Ryan Holiday, Stephen Hansel" minutesread="13-minute read" bgcolor="#E1ECFC"></BookCard>
                    </Grid>
                    <Grid item>
                        <BookCard bookimage={LovingYourBusinessCover} cardtitle="Loving Your Business" authorname="Debbie King" minutesread="13-minute read" bgcolor="#E1ECFC"></BookCard>
                    </Grid>
                </Grid>
                <Grid item container style={{justifyContent:'center',paddingBottom:'111px'}} >
                    <Grid item style={{paddingRight:'30px'}}>
                        <BookCard bookimage={TheLonelyCenturyCover} cardtitle="The Lonely Century" authorname="Noreena Hertz" minutesread="15-minute read" bgcolor="#E1ECFC"></BookCard>
                    </Grid>
                    <Grid item style={{paddingRight:'30px'}}>
                        <BookCard bookimage={EatBetterFeelBetterCover} cardtitle="Eat Better Feel Better" authorname="Giada De Laurentiis" minutesread="13-minute read" bgcolor="#E1ECFC"></BookCard>
                    </Grid>
                    <Grid item>
                        <BookCard bookimage={DropShippingCover} cardtitle="Drop Shipping" authorname="James Moore" minutesread="12-minute read" bgcolor="#E1ECFC"></BookCard>
                    </Grid>
                </Grid> */}
            </Grid>
        </>
    )
}

export default index

