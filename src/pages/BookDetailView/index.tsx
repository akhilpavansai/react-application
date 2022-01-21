import { Box } from '@material-ui/core'
import React from 'react'
import DefaultBookDetails from '../../components/molecules/BookDetails/index'
import Tp from '../../components/atoms/Typography/index';
import { useParams } from 'react-router-dom'
import { booksData } from '../../data/Data'

const Index = (props:any) => {
    const { id } = useParams();
    let str="";
    if(id=="Beyond Entrepreneurship")
    {
        str=id+" 2.0";
    }
    const v = booksData.find(temp => temp.booktitle==id);
    
    return (
        <>
            <Box style={{justifyContent:'center',marginTop:'60px',marginBottom:'177px',width:'1440px'}}>
                <Tp type='body2' customstyle={{lineHeight:'20px',color:'#03314B',width:'912px',margin:'0 auto',marginBottom:'40px'}}>Get the key ideas from</Tp>
                <div>
                    <DefaultBookDetails booktitle={v?v.booktitle:''} authorname={v?v.authorname:''} bookimage={v?v.bookimage:''} synopsis={v?v.synopsis:''} />
                </div>
            </Box>
        </>
    )
}

export default Index
