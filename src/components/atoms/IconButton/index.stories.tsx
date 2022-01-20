import React from "react";
import IconButton from './index';
import SearchIcon from '../../../assets/icons/search.jpg';


export default {
    title: 'Atoms/Icon Button',
}

export const CustomIconButton =  () => <IconButton icon={SearchIcon} iconwidth="20px" iconheight="20px"></IconButton>;
