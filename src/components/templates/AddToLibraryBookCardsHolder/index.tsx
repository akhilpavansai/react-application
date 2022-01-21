import { Box, Grid } from '@material-ui/core'
import AddToLibraryBookCard from '../../organisms/AddToLibraryCards/index';
import Tp from '../../atoms/Typography/index';

const Index = ({booksData=[],fontsize='24px',numberofbooks="0",children}:any) => {
    let numbers = []; 
    let min, max, r, n, p;
    min = 0;
    max = 10;
    r = numberofbooks;
    for (let i = 0; i < r; i++) {
    do {
        n = Math.floor(Math.random() * (max - min + 1)) + min;
        p = numbers.includes(n);
        if(!p){
        numbers.push(n);
        }
    }
    while(p);

    }
    return (
        <>
            <Grid container direction='column' wrap='nowrap' style={{margin:'0 auto',width:"942px",justifyContent:'center'}}>
                <Box style={{marginTop:'59px'}}>
                    <Tp type='h1' customstyle={{fontWeight:"bold", color:"#03314B", display:"inline",fontSize:fontsize||'24px'}}>{children}</Tp>
                </Box>
                <Box display='flex' sx={{display: 'flex',flexWrap: 'wrap',maxWidth: 942,borderRadius: 1}} >
                        {
                            numbers.map((temp: any) => {
                                let tempbook = booksData[temp];
                                return(<Box style={{marginRight:'30px',marginBottom:'25px'}}>
                                        <AddToLibraryBookCard bookimage={tempbook.bookimage} cardtitle={tempbook.booktitle} authorname={tempbook.authorname} minutesread={tempbook.minutesread} bgcolor="#E1ECFC"></AddToLibraryBookCard>
                                </Box>)
                            })
                        }
                </Box>
            </Grid>
        </>
    )
}

export default Index

