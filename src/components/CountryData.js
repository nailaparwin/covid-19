import React, { useEffect, useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import NumberFormat from 'react-number-format';
import { GlobalContext } from '../context/GlobalState';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: "20%",
      height: theme.spacing(16),
      
    },
  },
}));

export default function CountryData() {
  const classes = useStyles();

  const { updateTransaction } = useContext(GlobalContext);
  const [countryData, setCountryData] = useState();
  const { transactions } = useContext(GlobalContext);
  

  let a = transactions[0].code
  let b = transactions[0].source
  let c = transactions[0].title
  let d = transactions[0].key
  //console.log(transactions[0]);
  

  useEffect( () => {
      async function fetchCountryData() {
          
          const apiResponse = await fetch('https://api.thevirustracker.com/free-api?countryTotal=' + a);
          //console.log(apiResponse);
          const dataFromAPI = await apiResponse.json();
          //console.log(dataFromAPI);
          setCountryData(dataFromAPI);
          //console.log(dataFromAPI.countrydata[0])
          updateTransaction( 
            {code: a,
            source: b,
            title:c,
            key: d,
            total_cases: dataFromAPI.countrydata[0].total_cases,
            active_cases: dataFromAPI.countrydata[0].total_active_cases,
            recovered_cases: dataFromAPI.countrydata[0].total_recovered,
            fatalities:dataFromAPI.countrydata[0].total_deaths}
            ) ;
            
      }
      fetchCountryData();
      // eslint-disable-next-line
  },[a,b,c,d])

 
  
  return (
    <>
    <div> <h2> Country: {c}   </h2> </div> 
    <div className={classes.root}>             
      <Paper elevation={3} style={{backgroundColor:'#D7BDE2'}}>
        <div> 
          <br/>
            <Typography variant="h6" gutterBottom style={{color:'purple', fontWeigh:"bold"}}>
            <NumberFormat value={countryData && countryData.countrydata && countryData.countrydata[0].total_cases} displayType={'text'} thousandSeparator={true}/>
            </Typography>
            <Typography variant="subtitle2" gutterBottom style={{color:'purple', fontWeigh:"bold"}}>
            Total Cases 
            </Typography>
        </div>  
        </Paper>
        <Paper elevation={3} style={{backgroundColor:'#A9CCE3'}}>
        <div> <br/>
            <Typography variant="h6" gutterBottom style={{color:'maroon', fontWeigh:"bold"}}>
            <NumberFormat value={countryData && countryData.countrydata && countryData.countrydata[0].total_active_cases} displayType={'text'} thousandSeparator={true}/>
            </Typography>
            <Typography variant="subtitle2" gutterBottom style={{color:'maroon', fontWeigh:"bold"}}>
            Active
            </Typography>
        </div>  
        </Paper>
        <Paper elevation={3} style={{backgroundColor:'#58D68D'}}>
        <div> <br/>
            <Typography variant="h6" gutterBottom style={{color:'green', fontWeigh:"bold"}}>
            <NumberFormat value={countryData && countryData.countrydata && countryData.countrydata[0].total_recovered} displayType={'text'} thousandSeparator={true}/>
            </Typography>
            <Typography variant="subtitle2" gutterBottom style={{color:'green', fontWeigh:"bold"}}>
            Recovered
            </Typography>
        </div>  
        </Paper>
        <Paper elevation={3} style={{backgroundColor:'#F5B7B1'}}>
        <div> <br/>
            <Typography variant="h6" gutterBottom style={{color:'red', fontWeigh:"bold"}}>
            <NumberFormat value={countryData && countryData.countrydata && countryData.countrydata[0].total_deaths} displayType={'text'} thousandSeparator={true}/>
            </Typography>
            <Typography variant="subtitle2" gutterBottom style={{color:'red', fontWeigh:"bold"}}>
            Fatalities
            </Typography>
        </div>  
        </Paper>
    </div>
    </>
  );
}