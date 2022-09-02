import React from "react";
import {
    ListItemText,
    ListItemIcon,
    List,
    ListItemButton,
    ListItem,
    Divider,
    OutlinedInput,
} from "@mui/material/";
import { Home, Lyrics, Info } from "@mui/icons-material";

export default function SideBar() {
    const handleSubmit = (e: any): any => {
        window.location.pathname = "/lyrics/" + e.target[0].value;
        e.preventDefault();
    };
    return (
        <nav aria-label="main" className="bg-slate-800  w-60 h-screen z-0">
            <List sx={{ color: "white" }} className="">
                <ListItem>
                    <form onSubmit={handleSubmit} className="">
                        <label>
                            <OutlinedInput
                                autoFocus
                                placeholder="search"
                                required
                                className="w-full h-12 text-white"
                                type="search"
                            />
                        </label>
                    </form>
                </ListItem>
                <ListItem disablePadding className="mb-3">
                    <ListItemButton href="/">
                        <ListItemIcon>
                            <Home color="action" />
                        </ListItemIcon>
                        <ListItemText primary="Ana Sayfa" />
                    </ListItemButton>
                </ListItem>
                <Divider />
                <ListItem disablePadding className="flex-grow">
                    <ListItemButton href="/lyrics/cakal">
                        <ListItemIcon>
                            <Lyrics />
                        </ListItemIcon>
                        <ListItemText primary="Lyrics" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding className="">
                    <ListItemButton href="/about">
                        <ListItemIcon>
                            <Info />
                        </ListItemIcon>
                        <ListItemText primary="About" />
                    </ListItemButton>
                </ListItem>
            </List>
        </nav>
    );
}
