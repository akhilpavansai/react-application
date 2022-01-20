import { Grid } from '@material-ui/core'
import Tp from '../../atoms/Typography/index';
import Poster from '../../../assets/posters/exploreposter.png';

const index = () => {
    return (
        <>
            <Grid container style={{width:'912px',height:'264px',background:'#F1F6F4',position:'relative'}}>
                <Grid item container direction='column' wrap='nowrap' style={{width:'618px',justifyContent:'center',}}>
                    <Grid item style={{width:'319px',height:'90px',position:'absolute',margin:'45px 548px 129px 45px'}}>
                        <Tp type='h1' customstyle={{fontWeight: 'bold',color: '#03314B'}}>Explore Books on entrepreneurship</Tp>
                    </Grid>
                    <Grid item style={{width:'461px',height:'69px',position:'absolute',margin:'150px 406px 45px 45px'}}>
                        <Tp type='subtitle2' customstyle={{lineHeight: "23px",color: "#6D787E"}}>Everything you need to know about thriving on a shoestring budget, making your first million, and hiring right from the start</Tp>
                    </Grid>
                </Grid>
                <Grid item style={{width:'294px'}}>
                    <img src={Poster} width='249px' height='230px'></img>
                </Grid>
            </Grid>
        </>
    )
}

export default index
