import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { SocialIcon } from 'react-social-icons';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  iconButton: {
    textAlign: "right",
  },
  title: {
    flexGrow: 1,
    textAlign: "left"
  },
}));

function TopBar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            André Masson
          </Typography> 
          <div className={classes.iconButton} color="inherit">
            <SocialIcon url="https://github.com/andremasson" style={{ height: 40, width: 40 }} className={classes.menuButton}/>
            <SocialIcon url="https://www.linkedin.com/in/andre-masson/" style={{ height: 40, width: 40 }} className={classes.menuButton}/>
            <SocialIcon url="https://twitter.com/ar_masson" style={{ height: 40, width: 40 }} className={classes.menuButton}/>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default TopBar;
