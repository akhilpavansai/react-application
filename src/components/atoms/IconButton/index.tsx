import { ButtonBase, makeStyles } from '@material-ui/core';

const index = ({icon,iconwidth,iconheight,customstyle,...rest}:any) => {
    return (
        <ButtonBase style={customstyle}>
            <img src={icon} width={iconwidth} height={iconheight} />
        </ButtonBase>
    )
}

export default index


