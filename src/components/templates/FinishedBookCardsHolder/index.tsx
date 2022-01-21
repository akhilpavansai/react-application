import { Box, Grid } from '@material-ui/core'
import FinishedReadingCard from '../../organisms/FinishedReadingCards/index';
import Tp from '../../atoms/Typography/index';
import ReadingStatus from '../../molecules/ReadingStatus/index';

const Index = ({booksData=[],statusbar='True',fontsize='24px',children}:any) => {
    
    return (
        <>
            <Grid container direction='column' wrap='nowrap' style={{margin:'0 auto',width:"1440px",justifyContent:'center',alignItems:'center'}}>
                <Tp type='h1' customstyle={{marginTop:'59px',width:'912px',alignSelf:'left',fontWeight:"bold", color:"#03314B", display:"inline",fontSize:fontsize||'24px'}}>{children}</Tp>
                <Box style={{marginTop:'60px',marginBottom:'25px',display:(statusbar==='True')?'block':'none'}}>
                    <ReadingStatus underColor1="false" underColor2="true"></ReadingStatus>
                </Box>
                <Box display='flex' sx={{display: 'flex',flexWrap: 'wrap',width:'942px',maxWidth: 942,borderRadius: 1,}} >
                    {booksData.map((temp:any ) => {
                        if(temp.status==="finished")
                        {
                            return(
                            <Box style={{marginRight:'30px',marginBottom:'25px'}}>
                                <FinishedReadingCard bookimage={temp.bookimage} cardtitle={temp.booktitle} authorname={temp.authorname} minutesread={temp.minutesread} bgcolor="#E1ECFC"></FinishedReadingCard>
                            </Box>)
                        }
                    })}
                </Box>
            </Grid>
        </>
    )
}

export default Index

