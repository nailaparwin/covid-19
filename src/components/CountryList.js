import React, { useEffect, useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { GlobalContext } from '../context/GlobalState';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    
    
  },
}));



export default function CountryList() {
  const classes = useStyles();

  const [countryList, setCountryList] = useState();
  const [dataLoading, setDataLoading] = useState(false);


  const { updateTransaction } = useContext(GlobalContext);
  

  useEffect( () => {
      async function fetchGlobalData() {
          setDataLoading(true);
          const apiResponse = await fetch('https://api.thevirustracker.com/free-api?countryTotals=ALL')
          //console.log(apiResponse);
          const dataFromAPI = await apiResponse.json();
          //console.log(dataFromAPI);
          //console.log(dataFromAPI.countryitems[0]);
          setCountryList(Object.values(dataFromAPI.countryitems[0]));
          setDataLoading(false);
      }
      fetchGlobalData();
  },[])

  if (dataLoading)
  return(<div>data...</div>)
  
  return (
    <div className={classes.root}>
     
         
      <List component="nav" aria-label="main mailbox folders" >

      {countryList &&  countryList.map(t => (
        <ListItem button key={t.ourid} onClick={ () => { updateTransaction( 
            {code: t.code,
            source: t.source,
            title:t.title,
            key: t.ourid,
            total_cases: 0,
            active_cases: 0,
            recovered_cases: 0,
            fatalities:0}
            ) 
        }}>
        {
            <ListItemText primary={t.title} key={t.ourid}/>
           
        }
        </ListItem>
        )
            )}        
      </List>      
    </div>
  );
}
