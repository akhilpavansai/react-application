import React from "react";
import IconWithText from './index';
import ClockIcon from '../../../assets/icons/clockread.jpg';


export default {
    title: 'Molecules/IconWithText',
    component: IconWithText
}

export const DefaultIconWithText = () => <IconWithText icon={ClockIcon} iconwidth="16.67px" iconheight="16.67px" type='caption' customstyle={{tp:{color:"#6D787E", padding:"0px 0px 0px 5.67px"}}}>13-minute read</IconWithText>