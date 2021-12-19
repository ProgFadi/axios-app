import React, { useEffect, useState } from 'react';
import {Navigate} from 'react-router-dom'
import useAuth from '../hooks/useAuth';
import PCard from '../components/PCard'
import { Grid } from '@mui/material';
function Dashboard(props) {

    return (
       <Grid
       container
       spacing={2}
       >
           <Grid
           item
           xs={12}
           md={6}
           xl={3}
           >
                <PCard obj={{
                title:'t1',
                category:' C1',
                price:195,
                description:'Lorem up'
                
            }}/>
             
           
           </Grid>
           <Grid
           item
           xs={12}
           md={6}
           xl={3}
           >
                <PCard obj={{
                title:'t1',
                category:' C1',
                price:195,
                description:'Lorem up'
                
            }}/>
             
           
           </Grid>
           <Grid
           item
           xs={12}
           md={6}
           xl={3}
           >
                <PCard obj={{
                title:'t1',
                category:' C1',
                price:195,
                description:'Lorem up'
                
            }}/>
             
           
           </Grid>
           <Grid
           item
           xs={12}
           md={6}
           xl={3}
           >
                <PCard obj={{
                title:'t1',
                category:' C1',
                price:195,
                description:'Lorem up'
                
            }}/>
             
           
           </Grid>
           <Grid
           item
           xs={12}
           md={6}
           xl={3}
           >
                <PCard obj={{
                title:'t1',
                category:' C1',
                price:195,
                description:'Lorem up'
                
            }}/>
             
           
           </Grid>
       </Grid>
    );
}

export default Dashboard;