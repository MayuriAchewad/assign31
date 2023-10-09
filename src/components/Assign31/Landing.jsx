import { Card, CardContent, Grid } from "@mui/material";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginForm } from "./LoginForm";
import { RegisterForm } from "./RegisterForm";

export const Landing=()=>{
    return(
        <BrowserRouter>
        
        <Card>
            <CardContent>
        <Routes>
            <Route path="/" element={<LoginForm/>}/>
            <Route path="/register" element={<RegisterForm/>}/>
        </Routes>
        </CardContent>
        </Card>
        </BrowserRouter>
    )
}