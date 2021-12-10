import * as React from 'react';
import Paper from '@mui/material/Paper';
import {useEffect, useState} from "react";
import { InputBase } from '@mui/material';
import Box from "@mui/material/Box";
import {useStyles} from "./styles/ProductCardsStyles";
import Card from './Card'
import axios from "./axios/axios";

export default function ProductsCards() {
    const classes = useStyles()

    useEffect( ()=>{
         axios.get('/products?limit=8').then((response)=>{
             let data = response.data.map((obj) => {
                 /* remove unnecessary words since the titles returned from the api are to long */
                 obj.title = obj.title.replace('-', '').split(" ").splice(0,2).join(" ")
                 return obj })
             setRows(data)
             setSearchRows(data)
        }).catch((error)=>{
            console.log(error)
        })
    },[])


    /* for search and adding products */
    const [rows, setRows] = useState([]);
    const [searchRows, setSearchRows] = useState([]);


    /* search for product by name */
    const requestSearch = (searchedVal) => {
        const filteredRows = rows.filter((obj) => {
            if(!searchedVal){
                return obj
            } else if (obj.title.toLowerCase().includes(searchedVal.toLowerCase()))
            return obj;
        });
        setSearchRows(filteredRows);
    };

    console.log(rows)


    return (
            <Box>
                <Paper
                    component="form"
                    sx={{ p: '.4em', display: 'flex',  width: '50%' }}
                >
                    <InputBase
                        className={classes.SearchBarStyle}
                        placeholder="Search for Product"
                        type='text'
                        inputProps={{className: classes.SearchBarStyle}}
                        onChange={(event) => requestSearch(event.target.value)}
                    />
                </Paper>

                <Box className={classes.ProductsContainer}>
                    {searchRows.map((object, i) => <Card obj={object} key={i}   buttonText={'add to cart'}/>)}
                </Box>
            </Box>
    );
}
