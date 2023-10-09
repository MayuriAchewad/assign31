import React,{useState,useEffect} from "react";
import { Grid,Card,CardContent } from "@mui/material";
import { TableItem } from "./TableItem";
import axios from "axios";

export const TableData=()=>{
    const obj = { id: "1", name: "user22", age: "26", work: "programmer" };
    const [itemHeaders,setItemHeaders]=useState([]);
    const [itemRow,setItemRow]=useState([]);
    const [data, setData]=useState([])

    useEffect(()=>{
        const keys=Object.keys(obj);
        setItemHeaders(keys);

        const values= Object.values(obj);
        setItemRow(values)
       
    },[])
    return(
            <Card>
                <CardContent>
                <Grid container spacing={2}>   
                    <TableItem itemHeaders={itemHeaders} itemRow={itemRow} />
                </Grid>
    
                </CardContent>
            </Card>
       
    );
}