import React from "react";

import { AppBar, Toolbar, IconButton, Typography} from "@material-ui/core";
import Menu from "@material-ui/icons/Menu";

import { Input , Avatar } from '@material-ui/core';

import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderBottom: "2px Solid Black",
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    padding: '0 1px',
  },
});

export default function Header(){
  const classes=useStyles();
  return(
    <AppBar 
      // position="sticky" 
      className={classes.root}
      style={{backgroundColor:"Black"}}
      
      >
      <Toolbar>
        <Typography
          style={{color:"Green",
          paddingRight:"5px",
          fontSize:"20px",
          }}
        >
          Rebanos
        </Typography>
        <Input
            placeholder="Search"
            style={{color:"Black",
            backgroundColor:"White",
            border:"1px solid grey",
            borderRadius:"5px",
            padding:"1px 10px",
            width:"100%",
          }}
          />
        <IconButton>
          <Avatar
            style={{border:"2px solid White"}}
          />
          <Menu
            style={{color:"White",
              paddingLeft:"10px"}}/>
        </IconButton>    
      </Toolbar>  
    </AppBar>
  );
}