import { Card, CardContent, Grid, TextField } from "@mui/material";
import React, { useState } from "react";

export const Paledrom=()=>{
    const[reverseName, setReverseName]=useState('')
    const[CaptilizeName, setCaptilizeName]=useState('')
   
    const[SqrNum, setSqrNum]=useState()

    return(
        <Grid container spacing={2} sx={{padding:"40px 40px", border:"7px inset brown"}} align="center"> 
            <Grid item xs={12}>
                <h1>Assignement-03</h1>
            </Grid>
            <Grid item xs={8}>
                <TextField placeholder="Reverese letter" value={reverseName} onChange={(e)=>setReverseName(e.target.value)} variant="outlined" fullWidth/>
            </Grid>
            <Grid item xs={4}>
                <Card sx={{height:55, bgcolor:"brown",color:"wheat"}}>
                    <CardContent>
                        <b style={{fontSize:25}}>{reverseName?(reverseName.split('').reverse()):`reverse`}</b>           
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={8}>
                <TextField placeholder="Convert into UpperCase" value={CaptilizeName} onChange={(e)=>setCaptilizeName(e.target.value)} variant="outlined" fullWidth/>
            </Grid>
            <Grid item xs={4}>
                <Card sx={{height:55, bgcolor:"brown",color:"wheat"}}>
                    <CardContent>
                        <b style={{fontSize:25}}>{CaptilizeName?(CaptilizeName.toUpperCase()):`PICKUPBIZ`}</b>                       
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={8}>
                <TextField placeholder="Square of Number" value={SqrNum} onChange={(e)=>setSqrNum(e.target.value)} variant="outlined" fullWidth/>
            </Grid>
            <Grid item xs={4}>
                <Card sx={{height:55, bgcolor:"brown",color:"wheat"}}>
                    <CardContent>
                        <b style={{fontSize:25}}>{SqrNum?(SqrNum**2):`X^2`}</b>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}