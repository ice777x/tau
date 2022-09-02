import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Lyrics from "./Lyrics";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Search from "./Search";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import LyricsDetail from "./LyricsDetail";
import LyricsPage from "./LyricsPage";

const darkTheme = createTheme({
    palette: {
        mode: "dark",
    },
    typography: {
        body2: {
            fontSize: 16,
        },
    },
});

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

root.render(
    <React.StrictMode>
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<App />}>
                        <Route index={true} element={<Home />} />
                        <Route path="lyrics/:query" element={<Lyrics />} />
                        <Route path="lyrics" element={<LyricsPage />} />
                        <Route
                            path="lyrics/text/:url"
                            element={<LyricsDetail />}
                        />
                        <Route path="about" element={<About />} />
                        <Route path="search" element={<Search />} />
                    </Route>
                </Routes>
            </Router>
        </ThemeProvider>
    </React.StrictMode>
);
