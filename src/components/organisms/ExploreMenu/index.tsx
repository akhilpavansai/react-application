import { Box, Button, ButtonBase,Grid, Icon, makeStyles } from '@material-ui/core'
import IconWithText from '../../molecules/IconWithText/index';
import PoliticsIcon from '../../../assets/exploreicons/politics.png';
import EntrepreneurshipIcon from '../../../assets/exploreicons/entrepreneurship.png';
import MarketingAndSalesIcon from '../../../assets/exploreicons/marketingandsales.png';
import ScienceIcon from '../../../assets/exploreicons/science.png';
import HealthAndNutritionIcon from '../../../assets/exploreicons/healthandnutrition.png';
import PersonalDevelopmentIcon from '../../../assets/exploreicons/personaldevelopment.png';
import EconomicsIcon from '../../../assets/exploreicons/economics.png';
import HistoryIcon from '../../../assets/exploreicons/history.png';
import CommunicationSKillsIcon from '../../../assets/exploreicons/communicationskills.png';
import CorporateCultureIcon from '../../../assets/exploreicons/corporateculture.png';
import MotivationAndInspirationIcon from '../../../assets/exploreicons/motivationandinspiration.png';
import MoneyAndInvestmentsIcon from '../../../assets/exploreicons/moneyandinvestments.png';
import PsychologyIcon from '../../../assets/exploreicons/psychology.png';
import ProductivityIcon from '../../../assets/exploreicons/productivity.png';
import SexAndRelationshipIcon from '../../../assets/exploreicons/sexandrelationship.png';
import NatureAndEnvironmentIcon from '../../../assets/exploreicons/natureandenvironment.png';
import CarrerAndSuccessIcon from '../../../assets/exploreicons/careerandsuccess.png';
import EducationIcon from '../../../assets/exploreicons/education.png';
import Tp from '../../atoms/Typography/index';
import IconB from '../../atoms/IconButton/index';
import { Link, useNavigate } from 'react-router-dom';


const index = ({check=false}:any) => {

    const exploreHeaderStyles = {
            display: 'inline',
            fontWeight: 700,
            fontSize: '16px',
            lineHeight: '20px',
            color: '#116BE9'
        }
        const exploreHeaderStyles2 = {
            display: 'inline',
            fontWeight: 700,
            fontSize: '16px',
            lineHeight: '20px',
            color: '#6D787E'
        }
    
        const exploreRowStyles = makeStyles({
            button:{
                marginLeft:'4px',
                fontSize:'16px',
                fontWeight:500,
                width:'310px',
                height:'24px',
                color:'#6D787E', 
                textTransform:'none',
                padding:'0px',
                justifyContent:'flex-start',
                "&:hover":{
                    color:'#0365F2',
                    background: 'none'
                }
            },
            elementscontainer:{
                // height: "20px",
                // width: "940px",
                width: "880px",
                marginLeft: "250px",
                marginTop: "30px",
                // display: 'flex',
                // justifyContent:'space-between'
            },
            row: {
                marginTop:'28px'
            }
        })

        const classes = exploreRowStyles();

        

    return (
        <>
        {/* position:'absolute',top:'86.1px',zIndex:2 id='exploremodel'*/}
            <Box style={{width:'1440px',height:'398px',background: "#F1F6F4"}} >
                <div style={{height: "20px",width: "723px",marginLeft:'250px',paddingTop: '30px',display: 'flex',justifyContent:'space-between'}}>
                    <ButtonBase>
                    <Tp variant='subtitle2' customstyle={exploreHeaderStyles}>
                        Exlpore by category
                    </Tp>
                    </ButtonBase>
                    <ButtonBase>
                    <Tp variant='subtitle2' customstyle={exploreHeaderStyles2}>
                        See recently added titles
                    </Tp>
                    </ButtonBase>
                    <ButtonBase>
                    <Tp variant='subtitle2' customstyle={exploreHeaderStyles2}>
                        See popular titles
                    </Tp>
                    </ButtonBase>
                </div>
                <Grid container>
                        <Grid item style={{width:"940px",marginLeft:'250px'}}>
                            <hr style={{border: "1px solid #042330"}}/>
                        </Grid>
                </Grid>
                



                <Grid container style={{flexWrap:'nowrap'}} className={classes.elementscontainer}>
                    <Grid item container direction='column'>
                        <Grid item  >
                            <Link to="/entrepreneurshippage" style={{textDecoration:'none'}}>
                                {/* <IconWithText icon={EntrepreneurshipIcon} iconwidth="16px" iconheight="22.05px" type='body2' customstyle={{tp:{padding:"0px 0px 0px 12px",color:'#0365F2',lineHeight:'20.11px'}}}>Entrepreneurship</IconWithText> */}
                                <Button variant="text" className={classes.button} startIcon={<IconB iconwidth="16px" iconheight="22.05" icon={EntrepreneurshipIcon}></IconB>}>
                                    Entrepreneurship
                                </Button>
                            </Link>
                        </Grid>
                        <Grid item style={{paddingTop:'26px'}}>
                            <IconWithText icon={ScienceIcon} iconwidth="16.31px" iconheight="20px" type='body2' customstyle={{tp:{padding:"0px 0px 0px 11.48px",color:'#6D787E',lineHeight:'20.11px'}}}>Science</IconWithText>
                        </Grid>
                        <Grid item style={{paddingTop:'26px'}}>
                            <IconWithText icon={EconomicsIcon} iconwidth="18.68px" iconheight="21.68px" type='body2' customstyle={{tp:{padding:"0px 0px 0px 10px",color:'#6D787E',lineHeight:'20.11px'}}}>Economics</IconWithText>
                        </Grid>
                        <Grid item style={{paddingTop:'26px'}}>
                            <IconWithText icon={CorporateCultureIcon} iconwidth="20px" iconheight="20px" type='body2' customstyle={{tp:{padding:"0px 0px 0px 11.48px",color:'#6D787E',lineHeight:'20.11px'}}}>Coporate Culture</IconWithText>
                        </Grid>
                        <Grid item style={{paddingTop:'26px'}}>
                            <IconWithText icon={PsychologyIcon} iconwidth="18.27px" iconheight="20px" type='body2' customstyle={{tp:{padding:"0px 0px 0px 10.73px",color:'#6D787E',lineHeight:'20.11px'}}}>Psychology</IconWithText>
                        </Grid>
                        <Grid item style={{paddingTop:'26px',paddingBottom:'32px'}}>
                            <IconWithText icon={NatureAndEnvironmentIcon} iconwidth="18px" iconheight="19px" type='body2' customstyle={{tp:{padding:"0px 0px 0px 11px",color:'#6D787E',lineHeight:'20.11px'}}}>Nature & Environment</IconWithText>
                        </Grid>
                    </Grid>

                    <Grid item container direction='column' >
                        <Grid item >
                            <IconWithText icon={PoliticsIcon} iconwidth="20px" iconheight="20px" type='body2' customstyle={{tp:{padding:"0px 0px 0px 10px",color:'#6D787E',lineHeight:'20.11px'}}}>Politics</IconWithText>
                        </Grid>
                        <Grid item style={{paddingTop:'26px'}}>
                            <IconWithText icon={HealthAndNutritionIcon} iconwidth="22px" iconheight="20px" type='body2' customstyle={{tp:{padding:"0px 0px 0px 9px",color:'#6D787E',lineHeight:'20.11px'}}}>Health & Nutrition</IconWithText>                  
                        </Grid>
                        <Grid item style={{paddingTop:'26px'}}>
                            <IconWithText icon={HistoryIcon} iconwidth="22px" iconheight="18px" type='body2' customstyle={{tp:{padding:"0px 0px 0px 9px",color:'#6D787E',lineHeight:'20.11px'}}}>History</IconWithText>                
                        </Grid>
                        <Grid item style={{paddingTop:'26px'}}>
                            <IconWithText icon={MotivationAndInspirationIcon} iconwidth="16px" iconheight="21px" type='body2' customstyle={{tp:{padding:"0px 0px 0px 11.48px",color:'#6D787E',lineHeight:'20.11px'}}}>Motivation & Inspiration</IconWithText>                   
                        </Grid>
                        <Grid item style={{paddingTop:'26px'}}>
                            <IconWithText icon={ProductivityIcon} iconwidth="12px" iconheight="20px" type='body2' customstyle={{tp:{padding:"0px 0px 0px 14px",color:'#6D787E',lineHeight:'20.11px'}}}>Productivity</IconWithText>                
                        </Grid>
                        <Grid item style={{paddingTop:'26px'}}>
                            <IconWithText icon={CarrerAndSuccessIcon} iconwidth="20px" iconheight="20px" type='body2' customstyle={{tp:{padding:"0px 0px 0px 10px",color:'#6D787E',lineHeight:'20.11px'}}}>Carrer & Success</IconWithText>                
                        </Grid>
                    </Grid>

                    <Grid item container direction='column' >
                        <Grid item >
                            <IconWithText icon={MarketingAndSalesIcon} iconwidth="18.71px" iconheight="18px" type='body2' customstyle={{tp:{padding:"0px 0px 0px 10.29px",color:'#6D787E',lineHeight:'20.11px'}}}>Marketing & Sales</IconWithText>
                        </Grid>
                        <Grid item style={{paddingTop:'26px'}}>
                            <IconWithText icon={PersonalDevelopmentIcon} iconwidth="17px" iconheight="20px" type='body2' customstyle={{tp:{padding:"0px 0px 0px 11px",color:'#6D787E',lineHeight:'20.11px'}}}>Personal Development</IconWithText>
                        </Grid>
                        <Grid item style={{paddingTop:'26px'}}>
                            <IconWithText icon={CommunicationSKillsIcon} iconwidth="20px" iconheight="18px" type='body2' customstyle={{tp:{padding:"0px 0px 0px 10px",color:'#6D787E',lineHeight:'20.11px'}}}>Communication Skills</IconWithText>
                        </Grid>
                        <Grid item style={{paddingTop:'26px'}}>
                            <IconWithText icon={MoneyAndInvestmentsIcon} iconwidth="21px" iconheight="18px" type='body2' customstyle={{tp:{padding:"0px 0px 0px 11.48px",color:'#6D787E',lineHeight:'20.11px'}}}>Money & Investments</IconWithText>
                        </Grid>
                        <Grid item style={{paddingTop:'26px'}}>
                            <IconWithText icon={SexAndRelationshipIcon} iconwidth="22.5px" iconheight="18.5px" typr='body2' customstyle={{tp:{padding:"0px 0px 0px 8.5px",color:'#6D787E',lineHeight:'20.11px'}}}>Sex & Relationship</IconWithText>
                        </Grid>
                        <Grid item style={{paddingTop:'26px'}}>
                            <IconWithText icon={EducationIcon} iconwidth="22px" iconheight="18px" type='body2' customstyle={{tp:{padding:"0px 0px 0px 9px",color:'#6D787E',lineHeight:'20.11px'}}}>Education</IconWithText>
                        </Grid>
                    </Grid>
                </Grid>






{/*                 
                <Grid container className={classes.row} >
                    <Grid item >
                    <IconWithText icon={EntrepreneurshipIcon} iconwidth="16px" iconheight="22.05px" type='body2' customstyle={{tp:{padding:"0px 0px 0px 12px"}}}>13-minute read</IconWithText>
                    </Grid>
                    <Grid item >
                        <IconWithText icon={PoliticsIcon} iconwidth="20px" iconheight="20px" type='body2' customstyle={{tp:{padding:"0px 0px 0px 10px"}}}>Politics</IconWithText>
                    </Grid>
                    <Grid item >
                        <IconWithText icon={MarketingAndSalesIcon} iconwidth="18.71px" iconheight="18px" type='body2' customstyle={{tp:{padding:"0px 0px 0px 10.29px"}}}>Marketing & Sales</IconWithText>
                    </Grid>
                </Grid>

                
               <Grid container className={classes.row} style={{paddingTop:'28px'}}>
                    <Grid item >
                        <IconWithText icon={ScienceIcon} iconwidth="16.31px" iconheight="20px" type='body2' customstyle={{tp:{padding:"0px 0px 0px 11.48px"}}}>Science</IconWithText>
                    </Grid>
                    <Grid item >
                        <IconWithText icon={HealthAndNutritionIcon} iconwidth="22px" iconheight="20px" type='body2' customstyle={{tp:{padding:"0px 0px 0px 9px"}}}>Health & Nutrition</IconWithText>                  
                    </Grid>
                    <Grid item >
                        <IconWithText icon={PersonalDevelopmentIcon} iconwidth="17px" iconheight="20px" type='body2' customstyle={{tp:{padding:"0px 0px 0px 11px"}}}>Personal Development</IconWithText>
                    </Grid>
                </Grid>

 
                <Grid container className={classes.row} style={{paddingTop:'38px'}} >
                    <Grid item >
                        <IconWithText icon={EconomicsIcon} iconwidth="18.68px" iconheight="21.68px" type='body2' customstyle={{tp:{padding:"0px 0px 0px 10px"}}}>Economics</IconWithText>
                    </Grid>
                    <Grid item >
                        <IconWithText icon={HistoryIcon} iconwidth="22px" iconheight="18px" type='body2' customstyle={{tp:{padding:"0px 0px 0px 9px"}}}>History</IconWithText>                
                    </Grid>
                    <Grid item >
                        <IconWithText icon={CommunicationSKillsIcon} iconwidth="20px" iconheight="18px" type='body2' customstyle={{tp:{padding:"0px 0px 0px 10px"}}}>Communication Skills</IconWithText>
                    </Grid>
                </Grid>
                

                <Grid container className={classes.row} style={{paddingTop:'38px'}}>
                    <Grid item >
                        <IconWithText icon={CorporateCultureIcon} iconwidth="20px" iconheight="20px" type='body2' customstyle={{tp:{padding:"0px 0px 0px 11.48px"}}}>Coporate Culture</IconWithText>
                    </Grid>
                    <Grid item >
                        <IconWithText icon={MotivationAndInspirationIcon} iconwidth="16px" iconheight="21px" type='body2' customstyle={{tp:{padding:"0px 0px 0px 11.48px"}}}>Motivation & Inspiration</IconWithText>                   
                    </Grid>
                    <Grid item >
                        <IconWithText icon={MoneyAndInvestmentsIcon} iconwidth="21px" iconheight="18px" type='body2' customstyle={{tp:{padding:"0px 0px 0px 11.48px"}}}>Money & Investments</IconWithText>
                    </Grid>
                </Grid>

                <Grid container className={classes.row} style={{paddingTop:'38px'}}>
                    <Grid item >
                        <IconWithText icon={PsychologyIcon} iconwidth="18.27px" iconheight="20px" type='body2' customstyle={{tp:{padding:"0px 0px 0px 10.73px"}}}>Psychology</IconWithText>
                    </Grid>
                    <Grid item >
                        <IconWithText icon={ProductivityIcon} iconwidth="12px" iconheight="20px" type='body2' customstyle={{tp:{padding:"0px 0px 0px 14px"}}}>Productivity</IconWithText>                
                    </Grid>
                    <Grid item >
                        <IconWithText icon={SexAndRelationshipIcon} iconwidth="22.5px" iconheight="18.5px" typr='body2' customstyle={{tp:{padding:"0px 0px 0px 8.5px"}}}>Sex & Relationship</IconWithText>
                    </Grid>
                </Grid>

                <Grid container className={classes.row} style={{paddingTop:'38px'}}>
                    <Grid item >
                        <IconWithText icon={NatureAndEnvironmentIcon} iconwidth="18px" iconheight="19px" type='body2' customstyle={{tp:{padding:"0px 0px 0px 11px"}}}>Nature & Environment</IconWithText>
                    </Grid>
                    <Grid item >
                        <IconWithText icon={CarrerAndSuccessIcon} iconwidth="20px" iconheight="20px" type='body2' customstyle={{tp:{padding:"0px 0px 0px 10px"}}}>Carrer & Success</IconWithText>                
                    </Grid>
                    <Grid item >
                        <IconWithText icon={EducationIcon} iconwidth="22px" iconheight="18px" type='body2' customstyle={{tp:{padding:"0px 0px 0px 9px"}}}>Education</IconWithText>
                    </Grid>
                </Grid> */}

            </Box>
            
        </>
    )
}

export default index
