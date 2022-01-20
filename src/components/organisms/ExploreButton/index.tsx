import { ButtonBase } from '@material-ui/core'
import React, { useState } from 'react'
import Tp from '../../atoms/Typography/index';
import IconButton from '../../atoms/IconButton/index';
import DropDownIcon from '../../../assets/icons/dropdown.jpg';
import DropUpIcon from '../../../assets/icons/dropup.png';
import GreenUnderLine from '../../atoms/FocusUnderLine/index';



const Index = (props:any) => {
    const [isDown,setIsDown] = useState(true);
    const handleIcon = () => {
        setIsDown(!isDown);
    }
    const handlingBothFunctions = () => {
        handleIcon();
        props.clickHandler();
    }
    return (
        <>
            <ButtonBase style={{display:'flex',alignItems:'center'}} onClick={handlingBothFunctions}>
                <Tp type='body1' customstyle={{color:"#03314B", fontWeight:500,padding:"0px 6.7px 0px 0px"}}>Explore</Tp>
                <IconButton icon={isDown?DropDownIcon:DropUpIcon} iconwidth="10.61px" iconheight="6.48px"></IconButton>
            </ButtonBase>
            <div style={{display:isDown?'none':'block'}}>
                <GreenUnderLine border="1px solid #2CE080"></GreenUnderLine>
            </div>
        </>
    )
}

export default Index
