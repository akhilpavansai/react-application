import { ButtonBase, Grid } from '@material-ui/core'
import React, { useState } from 'react'
import UnderLine from '../../atoms/FocusUnderLine/index';
import Tp from '../../atoms/Typography/index';
import {Link} from 'react-router-dom';

const Index = ({underColor1="true",underColor2="false"}:any) => {
    return (
        <>
            <Grid container>
                <Link to="/" style={{textDecoration:'none'}} >
                <Grid item style={{width:'304px'}}>
                    <Tp type='subtitle1' customstyle={{marginBottom:'16px',fontWeight:"bold",fontSize:"18px",lineHeight:"23px",color:underColor1=="true"?"#22C870":"#6D787E"}}>Currently reading</Tp>
                    <UnderLine border={underColor1=="true"?"2px solid #2CE080":"2px solid #E1ECFC"}></UnderLine>
                </Grid>
                </Link>
                <Link to="/finishedreadingpage" style={{textDecoration:'none'}}>
                <Grid item style={{width:'304px'}}>
                    <Tp type='subtitle1' customstyle={{marginBottom:'16px',fontWeight: "bold",fontSize: "18px",lineHeight: "23px",color:underColor2=="true"? "#22C870":"#6D787E"}}>Finished</Tp>
                    <UnderLine border={underColor2=="true"? "2px solid #2CE080":"2px solid #E1ECFC"}></UnderLine>
                </Grid>
                </Link>
                <Grid item style={{width:'304px',alignSelf:'end'}}>
                    <UnderLine border="2px solid #E1ECFC"></UnderLine>
                </Grid>
            </Grid>
        </>
    )
}

export default Index
