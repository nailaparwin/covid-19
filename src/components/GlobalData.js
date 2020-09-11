import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CountUp from 'react-countup';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: "100%",
      height: theme.spacing(15),
    },
    
  },
}));

export default function GlobalData() {
  const classes = useStyles();

  const [globalData, setGlobalData] = useState();
  const [dataLoading, setDataLoading] = useState(false);
  useEffect( () => {
      async function fetchGlobalData() {
          setDataLoading(true);
          const apiResponse = await fetch('https://api.thevirustracker.com/free-api?global=stats')
          //console.log(apiResponse);
          const dataFromAPI = await apiResponse.json();
          //console.log(dataFromAPI);
          setGlobalData(dataFromAPI);
          setDataLoading(false);
      }
      fetchGlobalData();
  },[])

  const loading = "Loading ... "
  if (dataLoading) {
    return (
        <div className={classes.root}>      
          <Paper elevation={2} >
            <div> 
                <Typography variant="h4" gutterBottom style={{color:'orange', fontWeigh:"bold"}}>
                {loading}
                </Typography>
                <Typography variant="subtitle2" gutterBottom>
                Global Data as of Date Today
                </Typography>
            </div>  
            </Paper>
            {/*<Paper elevation={3} >
             <div> 
                <Typography variant="h4" gutterBottom style={{color:'green', fontWeigh:"bold"}}> 
                {loading}
                </Typography>
                <Typography variant="subtitle2" gutterBottom>
                Active
                </Typography>
            </div>   
              </Paper>*/}
              <Paper elevation={2} >
              <div> 
                <Typography variant="h4" gutterBottom style={{color:'blue', fontWeigh:"bold"}}>
                {loading}
                </Typography>
                <Typography variant="subtitle2" gutterBottom>
                Recovered
                </Typography>
            </div>  
              </Paper>
              <Paper elevation={2} >
              <div> 
                <Typography variant="h4" gutterBottom style={{color:'red', fontWeigh:"bold"}}>
                {loading}
                </Typography>
                <Typography variant="subtitle2" gutterBottom>
                Fatilities
                </Typography>
            </div>  
              </Paper>
        </div>
      );
  }
  return (
    <>
    <h2> Global Data as of Date Today </h2> 
    <div className={classes.root}>         
      <Paper elevation={3} >
        <div> 
            <Typography variant="h4" gutterBottom style={{color:'orange', fontWeigh:"bold"}}>
            {/* <NumberFormat value={globalData && globalData.results && globalData.results[0].total_cases} displayType={'text'} thousandSeparator={true}/> */}
              {globalData && globalData.results && globalData.results[0].total_cases
                 &&  <CountUp
                 start={0}
                 end={globalData.results[0].total_cases}
                 duration={1.9}
                 separator=","
               />
              } 
            
            </Typography>
            <Typography variant="subtitle2" gutterBottom style={{color:'orange', fontWeigh:"bold"}}>
            Total Cases
            </Typography>
        </div>  
        </Paper>
        {/* <Paper elevation={3} >
        <div> 
            <Typography variant="h4" gutterBottom style={{color:'green', fontWeigh:"bold"}}> 
              {globalData && globalData.results && globalData.results[0].total_active_cases
                 &&  <CountUp
                 start={0}
                 end={globalData.results[0].total_active_cases}
                 duration={1.9}
                 separator=","
               />
              }
            </Typography>
            <Typography variant="subtitle2" gutterBottom style={{color:'green', fontWeigh:"bold"}}>
            Active
            </Typography>
        </div>  
          </Paper> */}
          <Paper elevation={3} >
          <div> 
            <Typography variant="h4" gutterBottom style={{color:'blue', fontWeigh:"bold"}}>
              {globalData && globalData.results && globalData.results[0].total_recovered
                &&  <CountUp
                start={0}
                end={globalData.results[0].total_recovered}
                duration={1.9}
                separator=","
              />
              }
            </Typography>
            <Typography variant="subtitle2" gutterBottom style={{color:'blue', fontWeigh:"bold"}}>
            Recovered
            </Typography>
        </div>  
          </Paper>
          <Paper elevation={3} >
          <div> 
            <Typography variant="h4" gutterBottom style={{color:'red', fontWeigh:"bold"}}>
            { globalData && globalData.results && globalData.results[0].total_deaths
            &&  <CountUp
                start={0}
                end={globalData.results[0].total_deaths}
                duration={1.9}
                separator=","
              />
            }
            </Typography>
            <Typography variant="subtitle2" gutterBottom style={{color:'red', fontWeigh:"bold"}}>
            Fatilities
            </Typography>
        </div>  
          </Paper>
    </div>
    </>
  );
}