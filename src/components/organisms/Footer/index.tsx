import { Box, Grid, makeStyles } from '@material-ui/core'
import { DefaultLogoButton } from '../../atoms/LogoButton/index.stories'
import Tp from '../../atoms/Typography/index';

const index = () => {
    const footerStyles = makeStyles({
        footercontainer: {
                height: "370px",
                width: "1440px",
        }
    })
    const classes = footerStyles();

    const listHeadingStyles = {
        fontWeight: 700,
        color: '#03314B'
    }
    return (
        <>
            <Box className={classes.footercontainer} bgcolor="#F1F6F4" style={{position:'relative'}}>

                <Grid direction="column" wrap='nowrap' container style={{padding:'38px 244px 108px 244px',boxSizing:'border-box',width:'952px',height:'224px'}}>

                    <Grid item container wrap='nowrap' style={{width:'952px',minHeight:'224px',maxHeight:'224px'}}>
                        <Grid item container direction="column" wrap='nowrap' style={{width:'378px'}}>
                            <Grid item>
                                <DefaultLogoButton/>
                            </Grid>
                            <Grid item style={{
                                position: "static",
                                width: "378px",
                                height: "64px",
                                left: "0px",
                                top: "56px",

                                flex: "none",
                                order: 1,
                                flexGrow: 0,
                                margin: "32px 0px",
                            }}>
                                <Tp type='subtitle1' customstyle={{fontWeight:500,color:'#0365F2'}}>Big ideas in small packages<br/>Start learning now</Tp>
                            </Grid>
                        </Grid>

                        <Grid item container wrap='nowrap' style={{width:'542px'}}>

                            <Grid item container direction='column' wrap='nowrap' style={{marginRight:'27px',minWidth:'214px',maxWidth:'214px',gap:16}}>
                                <Grid item>
                                    <Tp type='body1' customstyle={listHeadingStyles}>Editorial</Tp>
                                </Grid>
                                <Grid item>
                                    <Tp type='body2' customstyle={{color:'#6D787E'}}>Book lists</Tp>
                                </Grid>
                                <Grid item>
                                    <Tp type='body2' customstyle={{color:'#6D787E'}}>What is Nonfiction?</Tp>
                                </Grid>
                                <Grid item>
                                    <Tp type='body2' customstyle={{color:'#6D787E'}}>What to read next?</Tp>
                                </Grid>
                                <Grid item>
                                    <Tp type='body2' customstyle={{color:'#6D787E'}}>Benefits of reading?</Tp>
                                </Grid>
                            </Grid>

                            <Grid item container direction='column' wrap='nowrap' style={{marginRight:'20px',gap:16}}>
                                <Grid item>
                                    <Tp type='body1' customstyle={listHeadingStyles}>Useful links</Tp>
                                </Grid>
                                <Grid item>
                                    <Tp type='body2' customstyle={{color:'#6D787E'}}>Pricing</Tp>
                                </Grid>
                                <Grid item>
                                    <Tp type='body2' customstyle={{color:'#6D787E'}}>Blinkist business</Tp>
                                </Grid>
                                <Grid item>
                                    <Tp type='body2' customstyle={{color:'#6D787E'}}>Gift cards</Tp>
                                </Grid>
                                <Grid item>
                                    <Tp type='body2' customstyle={{color:'#6D787E'}}>Blinkist magaine</Tp>
                                </Grid>
                                <Grid item>
                                    <Tp type='body2' customstyle={{color:'#6D787E'}}>Contact & help</Tp>
                                </Grid>
                            </Grid>

                            <Grid item container direction='column' style={{gap:16}} wrap='nowrap' >
                                <Grid item>
                                    <Tp type='body1' customstyle={listHeadingStyles}>Company</Tp>
                                </Grid>
                                <Grid item>
                                    <Tp type='body2' customstyle={{color:'#6D787E'}}>About</Tp>
                                </Grid>
                                <Grid item>
                                    <Tp type='body2' customstyle={{color:'#6D787E'}}>Careers</Tp>
                                </Grid>
                                <Grid item>
                                    <Tp type='body2' customstyle={{color:'#6D787E'}}>Partners</Tp>
                                </Grid>
                                <Grid item>
                                    <Tp type='body2' customstyle={{color:'#6D787E'}}>Code of conduct</Tp>
                                </Grid>
                            </Grid>

                         
                        </Grid>

                    </Grid>
                    <Grid item container style={{width:'952px',paddingTop:'48px',boxSizing:'border-box'}}>
                        <Grid item style={{marginRight: '25px'}}>
                            <Tp type='caption' customstyle={{color: '#6D787E'}}>&copy; Blinkist 2021 Sitemap &nbsp;&nbsp;&nbsp;| </Tp>
                        </Grid>
                        <Grid item style={{marginRight: '25px'}}>
                            <Tp type='caption' customstyle={{color: '#6D787E'}}>Imprint  &nbsp;&nbsp;&nbsp;|</Tp>
                        </Grid>
                        <Grid item style={{marginRight: '25px'}}>
                            <Tp type='caption' customstyle={{color: '#6D787E'}}>Terms of Service  &nbsp;&nbsp;&nbsp;| </Tp>
                        </Grid>
                        <Grid item style={{marginRight: '25px'}}>
                            <Tp type='caption' customstyle={{color: '#6D787E'}}>Privacy Policies</Tp>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default index
