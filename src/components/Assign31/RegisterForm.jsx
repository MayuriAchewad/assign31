import React, { useState } from "react"
import { Button, Card, CardContent, Grid, TextField } from "@mui/material"
import { Link } from "react-router-dom"

export const RegisterForm=()=>{
    const[name, setName]=useState("")
    const[email, setEmail]=useState("")
    const[mobile, setMobile]=useState("")
    const[username, setUserName]=useState("")
    const[confirmPassword, setConfirmPassword]=useState("")
    const[password, setPassword]=useState("")
    const[data, setData]=useState([])

    const handleSave=()=>{
        setData([...data,{username,password,name,email,mobile,confirmPassword}])
        console.log(data)
    }

    const handleCancel=()=>{
        setUserName("")
        setPassword("")
    }
    return(
        <Grid container spacing={2}> 

        <Card sx={{margin:"10px 450px"}}>
            <CardContent>
            <Grid container spacing={2} >
        
        <Grid item xs={12}>
            <h1 align="center">Registration Form</h1>
        </Grid>
        <Grid item xs={12}>
            <TextField onChange={(e)=>setName(e.target.value)} variant="outlined" fullWidth placeholder="Name"/>
        </Grid>
        <Grid item xs={12}>
            <TextField onChange={(e)=>setEmail(e.target.value)} variant="outlined" fullWidth placeholder="email id"/>
        </Grid>
        <Grid item xs={12}>
            <TextField onChange={(e)=>setMobile(e.target.value)} variant="outlined" fullWidth placeholder="Mobile Number"/>
        </Grid>
        <Grid item xs={12}>
            <TextField onChange={(e)=>setUserName(e.target.value)} variant="outlined" fullWidth placeholder="UserName"/>
        </Grid>
        <Grid item xs={12}>
            <TextField onChange={(e)=>setPassword(e.target.value)} type="password" variant="outlined" fullWidth placeholder="Password"/>
        </Grid>
        <Grid item xs={12}>
            <TextField onChange={(e)=>setConfirmPassword(e.target.value)} type="password" variant="outlined" fullWidth placeholder="Confirm Password"/>
        </Grid>
        <Grid item xs={6}>
            <Button onClick={handleSave} variant="contained" fullWidth>Submit</Button>
        </Grid>
        <Grid item xs={6}>
            <Button onClick={handleCancel} variant="contained" fullWidth>Cancel</Button>
        </Grid>
        <Grid item xs={12}>
            <p>
                You have already registered. <Link to="/">
                <span style={{color:"red"}}>Login Here</span>
                </Link>
            </p>
        </Grid>
        </Grid>
        </CardContent>
        </Card>
        <Grid container spacing={2}> 

            {
                data.map((item)=>(
                        <Grid item xs={4}>
                    <Card>
                <CardContent>
                <p><b>Name: </b>{item.name}</p>
                 <p><b>email id: </b>{item.email}</p>
                 <p><b>Mobile Number: </b>{item.mobile}</p>
                 <p><b>User Name: </b>{item.username}</p>
                 <p><b>Password: </b><span style={{display:"hidden"}}>{item.password?"######":""}</span></p>
                 <p><b>Confirm Password: </b><span style={{display:"hidden"}}>{item.confirmPassword?"######":""}</span></p>
                
                </CardContent>
          </Card>
        </Grid>
                ))
            }
       
        </Grid>
        </Grid>
            
       
    )
}