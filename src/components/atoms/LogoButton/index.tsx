import { ButtonBase, makeStyles } from '@material-ui/core';

const index = (props:any) => {
    const logoStyles = makeStyles({
        root: {
            height: "26px",
            width: "124.09091186523438px",
        }
    })
    const classes = logoStyles();
    return (
        <ButtonBase className={classes.root} >
            <img src={props.image}  />
        </ButtonBase>
    )
}

export default index
