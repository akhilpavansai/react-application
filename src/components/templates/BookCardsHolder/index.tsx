import { Box, Grid } from '@material-ui/core'
import BookCard from '../../molecules/BookCard/index';
import Tp from '../../atoms/Typography/index';
import ReadingStatus from '../../molecules/ReadingStatus/index';

const index = ({booksData=[],statusbar='True',fontsize='24px',children}:any) => {
    return (
        <>
            <Grid container direction='column' wrap='nowrap' style={{margin:'0 auto',width:"1440px",justifyContent:'center',alignItems:'center'}}>
                <Tp type='h1' customstyle={{width:'912px',marginTop:'59px',alignSelf:'left',fontWeight:"bold", color:"#03314B", display:"inline",fontSize:fontsize||'24px'}}>{children}</Tp>
                <Box style={{marginTop:'60px',marginBottom:'25px',display:(statusbar==='True')?'block':'none'}}>
                    <ReadingStatus></ReadingStatus>
                </Box>
                <Box display='flex' sx={{display: 'flex',flexWrap: 'wrap',width:'942px',maxWidth: 942,borderRadius: 1,}} >
                    {booksData.map((temp:any) => {
                        if(temp.status==="reading")
                        {
                            return(
                                <Box style={{marginRight:'30px',marginBottom:'25px'}}>
                                    <BookCard bookimage={temp.bookimage} cardtitle={temp.booktitle} authorname={temp.authorname} minutesread={temp.minutesread} bgcolor="#E1ECFC">
                                    </BookCard>
                                </Box>
                            )
                        }
                    })}
                </Box>
            </Grid>
        </>
    )
}

export default index

