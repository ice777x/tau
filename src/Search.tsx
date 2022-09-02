import React from "react";
import { useLocation } from "react-router-dom";
export default function Search() {
    const location = useLocation();
    console.log(window.location.href);
    location.pathname = "/searchrew";
    return <div>Search Page</div>;
}
