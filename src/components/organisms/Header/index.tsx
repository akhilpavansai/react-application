import { ButtonBase, Grid, makeStyles } from '@material-ui/core'
import { useState} from 'react'
import { CustomIconButton } from '../../atoms/IconButton/index.stories'
import { DefaultLogoButton } from '../../atoms/LogoButton/index.stories'
import { Body1 } from '../../atoms/Typography/index.stories'
import { CustomAvatarWithIcon } from '../../molecules/AvatarWithIcon/index.stories'
import { DefaultTextWithIcon } from '../../molecules/TextWithIcon/index.stories'
import  ExploreMenu  from '../ExploreMenu/index'
import ExploreButton from '../ExploreButton/index';

const Index = (props:any) => {
    // var [exploreOpen, setExploreOpen] = useState(false);

    // const exploreHandling = () => {
    //     setExploreOpen(!exploreOpen);
    // }

    const headerStyles = makeStyles({
        headercontainer: {
            width: "1440px",
            height: "86px",
            margin:'0px auto',
            display:'flex',
            alignItems:'center',
            justifyContent:'center'
        }
    })

    const classes = headerStyles();

    return (
        <>
            <Grid container spacing={3} className={classes.headercontainer}>
                <Grid item style={{marginRight: '42.91px',padding:0}}>
                    <DefaultLogoButton/>
                </Grid>
                <Grid item style={{marginRight: '41.69px',padding:0}}>
                    <CustomIconButton />
                </Grid>
                <Grid item style={{marginRight: '40.7px',padding:0}}>
                    <ExploreButton clickHandler={props.clickHandler}/>
                </Grid>
                <Grid item style={{marginRight: '456px',padding:0}}>
                    <Body1 />
                </Grid>
                <Grid item style={{padding:0}}>
                    <CustomAvatarWithIcon/>
                </Grid>
            </Grid>
            {/* <ExploreMenu check={exploreOpen}/> */}
        </>
    )
}

export default Index
