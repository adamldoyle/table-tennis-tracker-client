import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AuthContext from '../../contexts/AuthContext';
import TitleContext from '../../contexts/TitleContext';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Navigation() {
  const classes = useStyles();
  const auth = useContext(AuthContext);
  const title = useContext(TitleContext);

  function signOut() {
    auth.signOut();
  }

  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          {null}
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          {title.title}
        </Typography>
        <Button color="inherit" onClick={signOut}>
          Sign out
        </Button>
      </Toolbar>
    </AppBar>
  );
}
