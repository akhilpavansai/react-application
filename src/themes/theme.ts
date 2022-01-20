import { createTheme } from '@mui/material';


const blinkistTheme = createTheme({
    palette:{
        primary:{
            main: '#2CE080'
        }
    },
    typography:{
        fontFamily: 'unset',
        subtitle1 :{
            fontSize: "24px",
            lineHeight: "32px",
        },
        subtitle2 :{
            fontSize: "18px",
            lineHeight: "24px",
        },
        h1: {
            fontSize: "36px",
            lineHeight: "45px",
        },
        body1:{
            fontSize: "16px",
            lineHeight: "24px",
        },
        body2:{
            fontSize: "16px",
            lineHeight: "24px",
        }
        ,
        caption:{
            fontSize: "14px",
            lineHeight: "22px",
        },
    }
})

export default blinkistTheme;