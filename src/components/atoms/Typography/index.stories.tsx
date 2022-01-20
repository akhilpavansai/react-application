import Typography from './index';

export default {
    title:'Atoms/Typography',
    component: Typography
}

export const Subtitle1 = () => <Typography type='subtitle1' customstyle={{color:'grey'}}>Bring Your Human To Work</Typography>
export const Heading1 = () => <Typography type='h1' customstyle={{fontweight:"bold", color:"#03314B", display:"inline"}}>My Library</Typography>
export const Body1 = () => <Typography type='body1' customstyle={{color:"#03314B", fontWeight:500,padding:"0px 6.7px 0px 0px"}}>My Library</Typography>