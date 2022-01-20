import IconButton from '../../atoms/IconButton/index';
import Tp from '../../atoms/Typography/index';

const index = ({icon,iconwidth="16.67px",iconheight="16.67px",type='body1',children,customstyle={},...rest}:any) => {
    return (
        <>
            <div style={{alignItems: 'center',display:'flex'}}>
                <IconButton icon={icon} iconwidth={iconwidth} iconheight={iconheight} customstyle={customstyle.iconbutton} ></IconButton>
                <Tp type={type} customstyle={customstyle.tp}>{children}</Tp>
            </div>
        </>
    )
}

export default index
