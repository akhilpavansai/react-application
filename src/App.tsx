import React, { useState } from "react";
import "./App.css";
import { Box, Grid, ThemeProvider } from "@material-ui/core";
import blinkistTheme from "./themes/theme";
import HomePage from "./pages/HomePage/index";
import BookDetailsPage from "./pages/BookDetailView/index";
import EntrepreneurshipPage from "./pages/EntrepreneurPage/index";
import Header from "./components/organisms/Header/index";
import { DefaultFooter } from "./components/organisms/Footer/index.stories";
import { DefaultExploreMenu } from "./components/organisms/ExploreMenu/index.stories";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FinishedReadingPage from "./pages/FinishedReading/index";

function App() {
    const [exploreOn, setExploreOn] = useState(false);

    const clickHandler = () => {
        setExploreOn(!exploreOn);
    };
    return (
        <ThemeProvider theme={blinkistTheme}>
            <div className="App">
                <BrowserRouter>
                    <Grid
                        container
                        direction="column"
                        wrap="nowrap"
                        alignItems="center"
                    >
                        <Grid item style={{ zIndex: 5 }}>
                            <Header clickHandler={clickHandler} />
                        </Grid>

                        <Grid
                            item
                            style={{
                                display: exploreOn ? "block" : "none",
                                position: "absolute",
                                zIndex: 5,
                                marginTop: "86.1px",
                            }}
                        >
                            <DefaultExploreMenu />
                        </Grid>

                        <Grid item style={{ position: "relative" }}>
                            <Box
                                style={{
                                    margin: "0 auto",
                                    display: exploreOn ? "block" : "none",
                                    background: "rgba(157, 163, 166, 0.45)",
                                    width: "1440px",
                                    height: "100%",
                                    position: "absolute",
                                    zIndex: 3,
                                }}
                            ></Box>
                            <Routes>
                                <Route path="/" element={<HomePage />} />
                                <Route
                                    path="/finishedreadingpage"
                                    element={<FinishedReadingPage />}
                                />
                                <Route
                                    path="/bookdetails/:id"
                                    element={<BookDetailsPage />}
                                />
                                <Route
                                    path="/entrepreneurshippage"
                                    element={<EntrepreneurshipPage />}
                                />
                            </Routes>
                        </Grid>

                        <Grid item style={{ position: "relative" }}>
                            <Box
                                style={{
                                    display: exploreOn ? "block" : "none",
                                    background: "rgba(157, 163, 166, 0.45)",
                                    width: "1440px",
                                    height: "100%",
                                    position: "absolute",
                                    zIndex: 3,
                                }}
                            ></Box>
                            <DefaultFooter />
                        </Grid>
                    </Grid>
                </BrowserRouter>
            </div>
        </ThemeProvider>
    );
}

export default App;
