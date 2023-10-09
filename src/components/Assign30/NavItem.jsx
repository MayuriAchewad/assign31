import { Button, Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export const NavItem=({item})=>{
    return(
            <Grid item xs={item.xs}>
                <Link to={item.link}>
                    <Button variant="contained" fullWidth>{item.label}</Button>
                </Link>
            </Grid>
    )
}