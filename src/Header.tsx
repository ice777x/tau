import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import {
    AppBar,
    Toolbar,
    Button,
    IconButton,
    OutlinedInput,
    ThemeProvider,
    createTheme,
    Typography,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
} from "@mui/material";
import { Home } from "@mui/icons-material";
import { NavLink } from "react-router-dom";

const theme = createTheme({
    palette: {
        mode: "dark",
    },
    typography: {
        button: {
            bgcolor: "white",
        },
    },
});

export interface Props {
    search?: boolean;
}

export default function Header(props: Props) {
    return (
        <ThemeProvider theme={theme}>
            <nav className="flex  justify-between items-center flex-wrap">
                <AppBar position="sticky" sx={{ bgcolor: "#17202A" }}>
                    <Toolbar className="gap-4">
                        <IconButton color="primary">
                            <MenuIcon />
                        </IconButton>
                        <NavLink to="/">
                            <Button
                                sx={{ bgcolor: "#d16c00" }}
                                variant="contained"
                            >
                                Home
                            </Button>
                        </NavLink>
                        <NavLink to="/lyrics/cakal">
                            <Button
                                sx={{ bgcolor: "#d16c00" }}
                                variant="contained"
                            >
                                Lyrics
                            </Button>
                        </NavLink>
                        <NavLink to="/about">
                            <Button
                                sx={{ bgcolor: "#d16c00" }}
                                variant="contained"
                            >
                                About
                            </Button>
                        </NavLink>
                    </Toolbar>
                </AppBar>
            </nav>
        </ThemeProvider>
    );
}
