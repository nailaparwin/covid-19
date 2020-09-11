import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor:'purple',
  },
  
  title: {
    flexGrow: 1,
    backgroundColor:'purple',
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

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>      
      <AppBar position="static" style={{backgroundColor:'purple'}}>        
        <Toolbar>          
          <Typography variant="h6" className={classes.title}>
            Covid - 19 Tracker
          </Typography>
          <Button variant="contained"  >
            Primary
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}