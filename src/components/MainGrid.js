import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CountryList from './CountryList';
import GlobalData from './GlobalData';
import CountryData from './CountryData';
import SetMap from './SetMap';
import Chart from './Chart';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  root1: {
    flexGrow: 1,
    backgroundColor:'purple',
  },  
  title: {
    flexGrow: 1,
    backgroundColor:'purple',
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  clr: {
    backgroundColor: 'lightblue',
  },
  btn: {
    background: theme.background,
    border: 0,
    fontSize: 16,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
}));


export default function AutoGrid() {
  const classes = useStyles();
  const [showMap, setShowMap] = useState(false);
  const [ showMain, setShowMain]= useState(true);



  function setVar() {
    setShowMap(!showMap)
    setShowMain(!showMain)
  }


  useEffect(() => {
  },[showMap, showMain]);

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
      <Grid item xs={12}>
      <div className={classes.root1}>      
      <AppBar position="static" style={{backgroundColor:'purple'}}>        
        <Toolbar>          
          <Typography variant="h6" className={classes.title}>
            Covid - 19 Tracker
          </Typography>
          <Button variant="contained"  onClick ={setVar}>
            { showMain ? 'Map View' : 'Main View' }
          </Button>
        </Toolbar>
      </AppBar>
    </div>
      </Grid>
        <Grid item xs={3} style={{border: 'solid 2px grey', borderTop: 'none', borderBottom: 'none'}}>
          <Paper className={classes.paper}>
              < GlobalData />
            </Paper>
        </Grid>
        {console.log(showMap)}
        { !showMap ? (
        <Grid item xs={9} style={{border: 'solid 2px purple', borderTop: 'none', borderBottom: 'none'}}>
         
        <Grid container spacing={3}>
            <Grid item xs={12}>
            <Paper className={classes.paper}>
                <CountryData />
                </Paper>
            </Grid>
            
            <Grid item xs={5}>
            <h4>List of Countries</h4>
            <Paper className={classes.paper} style={{maxHeight: 185, overflow: 'auto'}}>
                <CountryList />
                </Paper>
            </Grid>
            <Grid item xs={7} style={{maxHeight: 180}}>
            {/* <Paper className={classes.paper} > */}
              <Chart />
            {/* </Paper> */}
            </Grid>            
        </Grid>         
        </Grid>   ):(
        <Grid item xs={9} style={{border: 'solid 2px purple', borderTop: 'none'}}>
          <SetMap />   
          </Grid>)}
       
        {/* <Grid item xs={2} className={classes.clr}>                               
        </Grid>           
        <Grid item xs={7} className={classes.clr}>
        <SetMap />           
        </Grid> 
        <Grid item xs={3} className={classes.clr}>                               
        </Grid>   */}
      </Grid> 
    </div>
  );
}