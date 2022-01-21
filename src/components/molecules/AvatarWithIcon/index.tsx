import React from 'react'
import AvatarIcon from '../../atoms/Avatar/index';
import CustomIconButton from '../../atoms/IconButton/index';


const index = ({bgcolor,icon,iconwidth,iconheight,children,customstyle,...rest}:any) => {
    return (
        <>
            <div style={{alignItems: 'center',display:'flex'}}>
                <AvatarIcon bgc={bgcolor}>{children}</AvatarIcon>
                <CustomIconButton icon={icon} iconwidth={iconwidth} iconheight={iconheight} customstyle={customstyle.iconbutton}></CustomIconButton>
            </div>
        </>
    )
}

export default index
