import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import IconButton from './components/atoms/IconButton/index';
import Search from './components/assets/icons/search.jpg';
import { Box, Grid, ThemeProvider } from '@material-ui/core';
import blinkistTheme from './themes/theme';
import HomePage from './pages/HomePage/index';
import BookDetailsPage from './pages/BookDetailView/index';
import EntrepreneurshipPage from './pages/EntrepreneurPage/index';
import  Header from './components/organisms/Header/index';
import { DefaultFooter } from './components/organisms/Footer/index.stories';
import { DefaultExploreMenu } from './components/organisms/ExploreMenu/index.stories';
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
import FinishedReadingPage from './pages/FinishedReading/index';
import { DefaultNewCard } from './components/organisms/AddToLibraryCards/index.stories';



function App() {
  
  const [exploreOn,setExploreOn] = useState(false);

  const clickHandler = () => {
    setExploreOn(!exploreOn);
  }
  return (
    <ThemeProvider  theme={blinkistTheme}>
      <div className="App">
      <BrowserRouter  >
        <Grid container direction='column' wrap='nowrap' alignItems='center'>
          <Grid item style={{zIndex:5}}>
            <Header clickHandler={clickHandler}/>
          </Grid>
          
          <Grid item style={{display:exploreOn?'block':'none',position:'absolute',zIndex:5,marginTop:'86.1px'}}>
            <DefaultExploreMenu/>
          </Grid>
          
          {/* <Grid item style={{display:exploreOn?'block':'none',marginTop:'86.1px',position:'absolute',zIndex:2}}>
            <Box style={{background: "rgba(157, 163, 166, 0.45)",width:'1440px',height:'2172px'}}></Box>
          </Grid> */}
          
            
          

          <Grid item style={{position:'relative'}}>
          {/* style={{background: exploreOn?"rgba(157, 163, 166, 0.45)":"none"}} */}
            {/* <HomePage/> */}
            {/* <EntrepreneurshipPage/> */}
            {/* <BookDetailsPage/> */}
              <Box style={{margin:'0 auto',display:exploreOn?'block':'none',background: "rgba(157, 163, 166, 0.45)",width:'1440px',height:'100%',position:'absolute',zIndex:3}}></Box>
              <Routes >
                <Route path="/" element={<HomePage/>} />
                <Route path="/finishedreadingpage" element={<FinishedReadingPage/>} />
                <Route path="/bookdetails/:id" element={<BookDetailsPage/>} />
                <Route path="/entrepreneurshippage" element={<EntrepreneurshipPage/>} />
              </Routes>
          </Grid>
          
          <Grid item style={{position:'relative'}}>
            {/* <DefaultNewCard/> */}
            <Box style={{display:exploreOn?'block':'none',background: "rgba(157, 163, 166, 0.45)",width:'1440px',height:'100%',position:'absolute',zIndex:3}}></Box>
            <DefaultFooter/>
          </Grid>

        </Grid>
        {/* <HomePage/> */}
        {/* <EntrepreneurshipPage/> */}
        {/* <BookDetailsPage/> */}
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
function createBrowserHistory() {
  throw new Error('Function not implemented.');
}

