import React, { useState } from "react"
import { Button, Card, CardContent, Grid, TextField } from "@mui/material"
import { Link } from "react-router-dom"

export const LoginForm=()=>{
    const[username, setUserName]=useState("")
    const[password, setPassword]=useState(" ")
    const[data, setData]=useState([])

    const handleSave=()=>{
        setData([...data,{username,password}])
        console.log(data)
    }

    const handleCancel=()=>{
        setUserName('')
        setPassword('')
    }
    
    return(
        <Grid container spacing={2}> 

        <Card sx={{margin:"50px 450px"}}>
            <CardContent>
            <Grid container spacing={2} align="center">
        
        <Grid item xs={12}>
            <h1 align="center">Login Form</h1>
        </Grid>
        <Grid item xs={12}>
            <TextField onChange={(e)=>setUserName(e.target.value)} variant="outlined" fullWidth placeholder="UserName"/>
        </Grid>
        <Grid item xs={12}>
            <TextField onChange={(e)=>setPassword(e.target.value)} type="password" variant="outlined" fullWidth placeholder="Password"/>
        </Grid>
        <Grid item xs={6}>
            <Button onClick={handleSave} variant="contained" fullWidth>Submit</Button>
        </Grid>
        <Grid item xs={6}>
            <Button onClick={handleCancel} variant="contained" fullWidth>Cancel</Button>
        </Grid>
        <Grid item xs={12}>
            <p>
                If you don't have and account? <Link to="register">
                <span style={{color:"red"}}>Register Here</span>
                </Link>
            </p>
        </Grid>
        </Grid>
        </CardContent>
        </Card>
        <Grid container spacing={2} > 

            {
                data.map((item)=>(
                        <Grid item xs={4}>
                    <Card>
                <CardContent>
                <p><b>UserName: </b>{item.username}</p>
                 <p><b>Password: </b><span style={{display:"hidden"}}>{item.password?"######":""}</span></p>
                </CardContent>
          </Card>
        </Grid>
                ))
            }
       
        </Grid>
        </Grid>
            
       
    )
}