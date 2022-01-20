import React from "react";
import AvatarWithIcon from './index';
import DropDownIcon from '../../../assets/icons/dropdown.jpg';

export default {
    title: 'Molecules/AvatarWithIcon',
    component: AvatarWithIcon
}

export const CustomAvatarWithIcon = () => <AvatarWithIcon bgcolor='#69A6E3' icon={DropDownIcon} iconwidth='10.6px' iconheight='6.4px' customstyle={{iconbutton:{paddingLeft:"6.7px"}}}>A</AvatarWithIcon>