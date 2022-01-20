import { makeStyles } from "@material-ui/core/styles";
import { Box, Button, ButtonBase, Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import Tp from '../../atoms/Typography/index';
import IconWithText from '../../molecules/IconWithText/index';
import ClockIcon from '../../../assets/icons/clockread.jpg';
import { Link } from "react-router-dom";
import { useState } from "react";
import AddIcon from '@mui/icons-material/Add';


const bookCardStyles = makeStyles({
    bookcard:{
        position: 'relative',
        height: "481px",
        width: "284px",
        borderRadius: "9px",
        border: "1px solid #E1ECFC",
        boxSizing: "border-box",
        boxShadow: 'none',
    },
    cardmedia:{
        width: "294.1007080078125px",
        height: "292px",
    },
    buttonlib: {
        width: "284px",
        height: "32px",
        bottom:0,
        left:0,
        marginBottom:'20px',
        background:'#FFFFFF',
        color:'#0365F2',
        position: "absolute",
        borderRadius: "0px 0px 8px 8px",
        fontSize:'16px',
        textTransform:'inherit', 
    },
    bottombox2: {
        width: "284px",
        height: "15px",
        bottom:0,
        left:0,
        position: "absolute",
        border: "1px solid #F1F6F4",
        boxSizing: "border-box",
        borderRadius: "0px 0px 8px 8px"
    }
});

const Index = (props:any) => {

    const [over,setOver] = useState(true);
    function changeBackground(e:any) {
            setOver(!over);
      }
    
      function changeBackgroundBack(e:any) {
            setOver(!over)
      }
    const classes= bookCardStyles();
    if(props.cardtitle=="")
    {
        return <span></span>
    }
    return (
        <>
            <Card className={classes.bookcard}>
                <CardMedia className={classes.cardmedia}
                    component="img"
                    image={props.bookimage}
                    alt="Beyond Entrepreneurship"
                />
                <CardContent style={{padding:"0px 0px"}}>
                    <Tp type='subtitle1' customstyle={{ fontSize:'18px',lineHeight:'23.29px',fontWeight:700,color:'#03314B',padding:'23px 0px 16px 16px'}}>
                        {props.cardtitle}
                    </Tp>
                    <Tp type='body1' customstyle={{ fontsize:"16px" ,lineheight:"24px" ,fontweight:500, color:"#6D787E", padding:"0px 0px 17px 16px"}}>
                        {props.authorname}
                    </Tp>
                    <IconWithText icon={ClockIcon} iconwidth="16.67px" iconheight="16.67px" type='caption' customstyle={{ tp:{padding:"0px 0px 0px 5.67px",color:"#6D787E"},iconbutton:{paddingLeft:"16px"} }}>{props.minutesread}</IconWithText>
                    {/* <Link to={`/bookdetails/${props.cardtitle}`}>
                    <IconButton iconwidth="18px" iconheight="4px" icon={MoreIcon} customstyle={{margin:"21px 29px 22px 0px", float:"right"}}></IconButton>
                    </Link> */}
                    {/* {/* <Box className={classes.bottombox1} bgcolor="#E1ECFC"></Box> */}
                    <Button className={classes.buttonlib} variant="text">
                        Read again
                    </Button>
                    <Box className={classes.bottombox2} bgcolor="#F1F6F4"></Box>
                </CardContent>
            </Card>
        </>
    )
}

export default Index
