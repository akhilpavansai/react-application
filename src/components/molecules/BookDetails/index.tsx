import { Box, Button, ButtonBase, Grid} from '@material-ui/core';
import { DefaultUnderLine, GreenUnderLine } from '../../atoms/FocusUnderLine/index.stories';
import Tp from '../../atoms/Typography/index';
import { DefaultIconWithText } from '../IconWithText/index.stories';
import { booksData } from '../../../data/Data';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Link } from 'react-router-dom';
import React from 'react';





const Index = (book:{booktitle:string,authorname:string,bookimage:string,synopsis:string}) => {

    const [isOn,setIsOn] = React.useState("0");

    const colorChanger = (newValue: string) => {
        setIsOn(newValue);
    }


    const handleFinish = (bookname: string) => {
        let deletingBook = booksData.find(e=>e.booktitle===bookname);
        let ifBookNotExsist;
        deletingBook?(deletingBook.status = "finished"):(ifBookNotExsist=true);
    }

    return (
        <>
        <Grid container justifyContent='center' style={{marginTop:'40px'}}>
            <Grid item container style={{width:'912px',height:'304px',position:'relative'}}>
                <Grid item container direction='column' wrap='nowrap' style={{width:'608px',}}>
                    <Grid item>
                        <Tp type='h1' customstyle={{height:'45px',fontSize:'36px',fontWeight: 'bold',color: '#03314B'}}>{book.booktitle}</Tp>
                    </Grid>
                    <Grid item style={{marginTop:'24px'}}>
                        <Tp type='subtitle2' customstyle={{height:'25px',fontSize:'20px',lineHeight:'25px',color: '#03314B'}}>Turning Your Business into an Enduring Great Company</Tp>
                    </Grid>
                    <Grid item style={{marginTop:'24px'}}>
                        <Tp type='body1' customstyle={{height:'20px',color: '#6D787E',lineHeight:'20px'}}>{book.authorname}</Tp>
                    </Grid>
                    <Grid item style={{marginTop:'16px'}}>
                        <DefaultIconWithText/>
                    </Grid>
                    <Grid item container direction='row' wrap='nowrap' style={{paddingTop:'83px',width:'608px'}}>
                        <Grid item style={{width:'122px',height:'44px',marginRight:'30px'}}>
                            <Button variant="outlined" style={{width:'122px',height:'44px',border:'1px solid #042330',color:'#22C870',textTransform:'none',fontSize:'16px'}}>
                                Read now
                            </Button>
                        </Grid>
                        <Grid item style={{width:'170px',height:'44px',marginRight:'30px'}}>
                            <Link to="/finishedreadingpage" style={{textDecoration:'none'}} onClick={()=>handleFinish(book.booktitle)}>
                            <Button variant="contained" style={{boxShadow:'none',width:'170px',height:'44px',background:'#2CE080',color:'#03314B',textTransform:'none',fontSize:'16px'}}>
                                Finished Reading
                            </Button>
                            </Link>
                        </Grid>
                        <Grid item style={{width:'151px',height:'44px',marginRight:'30px'}}>
                            <Button style={{width:'151px',height:'44px',color:'#6D787E',alignItems:'center',textTransform:'none',fontSize:'16px'}} endIcon={<ArrowRightAltIcon/>}>
                                Send to kindle
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <img src={book.bookimage} width='304px' height='304px'></img>
                </Grid>
            </Grid>
            <Grid item container style={{width:'912px'}}>
                <Grid item container direction='column' wrap='nowrap' style={{width:'608px',marginTop:'58px'}}>
                    <Grid item container direction='row' wrap='nowrap'>
                        <Grid item style={{width:'200px'}}>
                            <ButtonBase onClick={()=>colorChanger("0")}>
                            <Tp type='body1' customstyle={{color:'#03314B',marginBottom:'16px'}}>Synopsis</Tp>
                            </ButtonBase>
                            {isOn=="0"?<GreenUnderLine/>:<DefaultUnderLine/>}
                        </Grid>
                        <Grid item style={{width:'200px'}}>
                            <ButtonBase onClick={()=>colorChanger("1")}>
                            <Tp type='body1' customstyle={{color:'#6D787E',marginBottom:'16px'}}>Who is it for?</Tp>
                            </ButtonBase>
                            {isOn=="1"?<GreenUnderLine/>:<DefaultUnderLine/>}
                        </Grid>
                        <Grid item style={{width:'200px'}}>
                            <ButtonBase onClick={()=>colorChanger("2")}>
                            <Tp type='body1' customstyle={{color:'#6D787E',marginBottom:'16px'}}>About the author</Tp>
                            </ButtonBase>
                            {isOn=="2"?<GreenUnderLine/>:<DefaultUnderLine/>}
                        </Grid>
                    </Grid>
                    <Grid item style={{display:isOn=="0"?'block':'none'}}>
                        <Tp type='body2' customstyle={{color:'#03314B',marginTop:'20px'}} >{book.synopsis}</Tp>
                    </Grid>
                    <Grid item style={{display:isOn=="1"?'block':'none'}}>
                        <Tp type='body2' customstyle={{color:'#03314B',marginTop:'20px'}} >who is it for</Tp>
                    </Grid>
                    <Grid item style={{display:isOn=="2"?'block':'none'}}>
                        <Tp type='body2' customstyle={{color:'#03314B',marginTop:'20px'}} >Basic about author</Tp>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <Box width="912px" style={{marginTop:'80px'}}>
                    <DefaultUnderLine/>
                </Box>
            </Grid>
        </Grid>
    </>)
}

export default Index
