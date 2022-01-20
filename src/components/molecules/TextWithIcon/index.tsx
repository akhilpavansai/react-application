import IconButton from '../../atoms/IconButton/index';
import Tp from '../../atoms/Typography/index';


const index = ({icon,iconwidth,iconheight,type,children,customstyle}:any) => {
    return (
        <>
            <div style={{display:'flex',alignItems: 'center'}}>
                <Tp type={type} customstyle={customstyle.tp} >{children}</Tp>
                <IconButton icon={icon} width={iconwidth} height={iconheight} customstyle={customstyle.iconbutton}></IconButton>
            </div>
        </>
    )
}

export default index
