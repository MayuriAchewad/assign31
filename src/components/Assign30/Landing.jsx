import { Card, CardContent, Grid } from "@mui/material";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { NavList } from "./NavList";
import { TableData } from "./TableData";

export const Landing=()=>{
    return(
        <BrowserRouter>
        <Card>
            <CardContent>
                <NavList/>
            </CardContent>
        </Card>
        <Card>
            <CardContent>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/table" element={<TableData/>}/>
            {/* <Route path="/catelist" element={<CateList/>}/>
            <Route path="/comments" element={<CommentsList/>}/> */}
        </Routes>
        </CardContent>
        </Card>
        </BrowserRouter>
    )
}