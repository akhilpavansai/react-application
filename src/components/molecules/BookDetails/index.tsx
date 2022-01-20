import { Box, Button, ButtonBase, Grid,Tabs,Tab } from '@material-ui/core';
import BeyondEntrepreneurship from '../../../assets/bookcovers/beyondentrepreneurship.png';
import { DefaultUnderLine, GreenUnderLine } from '../../atoms/FocusUnderLine/index.stories';
import Tp from '../../atoms/Typography/index';
import { DefaultIconWithText } from '../IconWithText/index.stories';
import { DefaultBookDetails } from './index.stories';
import RightArrowIcon from '../../../assets/icons/rightarrow.png';
import { currentlyReadingBooksData, finishedBooksData } from '../../../data/Data';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import React from 'react';


// import Tab from '@mui/material/Tab';
// import TabContext from '@mui/lab/TabContext';
// import TabList from '@mui/lab/TabList';
// import TabPanel from '@mui/lab/TabPanel';
// import React from 'react';
// import { createTheme, ThemeProvider } from '@mui/material';




const Index = (book:{booktitle:string,authorname:string,bookimage:string,synopsis:string}) => {

    const [value, setValue] = React.useState('0');

    const handleChange = (event: any, newValue: React.SetStateAction<string>) => {
      setValue(newValue);
    };

    const [isOn,setIsOn] = React.useState("0");

    const colorChanger = (newValue: string) => {
        setIsOn(newValue);
    }


    const handleFinish = (bookname: string) => {
        let deletingBook = currentlyReadingBooksData.find(e=>e.booktitle===bookname);
        let deletingIndex = currentlyReadingBooksData.findIndex(i => i.booktitle === bookname);
        currentlyReadingBooksData.splice(deletingIndex,1);
        finishedBooksData.push({ bookimage: deletingBook?deletingBook.bookimage:'', booktitle: deletingBook?deletingBook.booktitle:'', authorname: deletingBook?deletingBook.authorname:'', minutesread: deletingBook?deletingBook.minutesread:'', users: deletingBook?deletingBook.users:'', synopsis: deletingBook?deletingBook.synopsis:'' });
        
    }

    console.log("received book in book detials is : "+book.booktitle+" "+book.authorname);
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
                            {/* <ButtonBase style={{border: "1px solid #042330",borderRadius:'4px'}}>
                                <Tp type='body1' customstyle={{width:'75px',height:'20px',padding:'12px 24px 12px 23px',color:'#22C870'}}>Read now</Tp>
                            </ButtonBase> */}
                            <Button variant="outlined" style={{width:'122px',height:'44px',border:'1px solid #042330',color:'#22C870',textTransform:'none',fontSize:'16px'}}>
                                Read now
                            </Button>
                        </Grid>
                        <Grid item style={{width:'170px',height:'44px',marginRight:'30px'}}>
                            {/* <ButtonBase style={{background:'#2CE080'}}>
                                <Tp type='body1' customstyle={{width:'128px',height:'20px',padding:'12px 21px 12px 21px',color:'#03314B',fontWeight:500}}>Finished Reading</Tp>
                            </ButtonBase> */}
                            <Link to="/finishedreadingpage" style={{textDecoration:'none'}} onClick={()=>handleFinish(book.booktitle)}>
                            <Button variant="contained" style={{boxShadow:'none',width:'170px',height:'44px',background:'#2CE080',color:'#03314B',textTransform:'none',fontSize:'16px'}}>
                                Finished Reading
                            </Button>
                            </Link>
                        </Grid>
                        <Grid item style={{width:'151px',height:'44px',marginRight:'30px'}}>
                            {/* <ButtonBase >
                                <div style={{display:'flex',alignItems:'center'}}>
                                    <Tp type='body1' customstyle={{width:'110px',height:'20px',padding:'12px 11px 12px 21px',color:'#6D787E'}}>Send To Kindle</Tp>
                                    <img src={RightArrowIcon}></img>
                                </div>
                            </ButtonBase> */}
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




             {/*<Box sx={{borderBottom:'1px ridge #E1ECFC', width:'600px', marginBottom:'20px',marginTop:'58px'}}>
                     <TabContext value={value} >
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList onChange={handleChange} aria-label="lab API tabs example">
                            <Tab label="Synopsis" value="1" st"Entrepreneurship Readers"yle={{width:'200px',fontSize: "16px",lineHeight: "20px",color: "#03314B",textTransform:'none',borderColor:'red'}}/>
                            <Tab label="Who is it for{{alignItems:'baseline',textAlign:'left',width:'200px',fontSize: "16px",lineHeight: "20px",color: "#03314B",textTransform:'none',}}?" value="2" style={{width:'200px',fontSize: "16px",lineHeight: "20px",color: "#6D787E",textTransform:'none'}}/>
                            <Tab label="About the author" value="3" style={{width:'200px',fontSize: "16px",lineHeight: "20px",color: "#6D787E",textTransform:'none'}}/>
                            </TabList>
                        </Box>
                        <TabPanel value="1" style={{padding:'0',width:'608px'}}><Tp type='body2' customstyle={{color:'#03314B',marginTop:'20px',}} >{book.synopsis}</Tp></TabPanel>
                        <TabPanel value="2" style={{padding:'0',width:'608px'}}><Tp type='body2' customstyle={{color:'#03314B',marginTop:'20px',}} >More about who is it for</Tp></TabPanel>
                        <TabPanel value="3" style={{padding:'0',width:'608px'}}><Tp type='body2' customstyle={{color:'#03314B',marginTop:'20px',}} >In detail about the author </Tp></TabPanel>
                    </TabContext> */}


                        {/* <Tabs value={value} onChange={handleChange} style={{height:'36px',width:'600px'}}>
                            <Tab label="Synopsis" value="0" style={{alignItems:'baseline',width:'200px',fontSize: "16px",lineHeight: "20px",textTransform:'none',color: "#03314B",paddingLeft:'0px'}}/>
                            <Tab label="Who is it for?" value="1" style={{alignItems:'baseline',width:'200px',fontSize: "16px",lineHeight: "20px",color: "#6D787E",textTransform:'none',paddingLeft:'0px'}}/>
                            <Tab label="About the author" value="2" style={{alignItems:'baseline',width:'200px',fontSize: "16px",lineHeight: "20px",color: "#6D787E",textTransform:'none',paddingLeft:'0px'}}/>
                        </Tabs>
                        
                    </Box>
                    {value === "0" && 
                        <Tp type='body2' customstyle={{color:'#03314B',marginTop:'20px',width:'608px'}} >{book.synopsis}</Tp>
                    }
                    {value === "1" && <Tp type='body2' customstyle={{color:'#03314B',marginTop:'20px',width:'608px'}} >More about who is it for</Tp>}
                    {value === "2" && <Tp type='body2' customstyle={{color:'#03314B',marginTop:'20px',width:'608px'}} >In detail about the author </Tp>}
                     */}


            </Grid>
            <Grid item>
                <Box width="912px" style={{marginTop:'80px'}}>
                    <DefaultUnderLine/>
                </Box>
            </Grid>
            </Grid>
        </>
    )
}

export default Index
