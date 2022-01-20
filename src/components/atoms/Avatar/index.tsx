import React from 'react'
import Avatar from '@mui/material/Avatar';

const index = (props:any) => {
    return (
        <Avatar sx={{bgcolor: props.bgc,display: 'inline-flex' }}>{props.children}</Avatar>
    )
}

export default index
