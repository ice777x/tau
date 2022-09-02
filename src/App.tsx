import React from "react";
import { Stack } from "@mui/material";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";
export default function App() {
    return (
        <Stack direction={"row"}>
            <SideBar />
            <Outlet />
        </Stack>
    );
}
