import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import firebase from "firebase/app";
import PropTypes from 'prop-types';
import {isLoaded} from 'react-redux-firebase';
import './../Header/styles.scss'
// import UserCabinet from './UserCabinet'; == for inventory 

  function Signin(props) {

  const auth = firebase.auth();

  const { onCLickGoogleSignin} = props;  

  const doSignIn = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    firebase.auth().signInWithEmailAndPassword(email, password).then(function() {
      console.log("Successfully signed in!");
    }).catch((error) => {
      console.log(error.message);
    });
  }

  const useStyles = makeStyles((theme) => ({
    root: {
      height: '100vh',
      
    },

    paper: {
      margin: theme.spacing(8, 4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));
  const googleStyle={
    marginTop: '50px'
  }
    
  const copyright = () => {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          ItinerizeMe LLC
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

  const classes = useStyles();

  if (!isLoaded(auth)) {
    return (
      <React.Fragment>
        <h1>Loading...</h1>
      </React.Fragment>
    )
  } else if ((isLoaded(auth)) && (auth.currentUser == null)) {
    return (
      <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item direction="row"
      justify="flex-end"
      alignItems="baseline"
      xs={12} sm={8} md={5} 
      component={Paper}
       elevation={6} 
       square >
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form onSubmit={doSignIn} className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/Register" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              {copyright}
            </Box>
          </form>
          <div style={googleStyle}>
          <button className="btn btn-info" onClick = {() => onCLickGoogleSignin()}>Sign in with Google</button>
        </div>
        </div>
      </Grid>
    </Grid>
    )
  // } else {
    // return
      // <UserCabinet
      //   handleRemoveBikeFromCart = {handleRemoveBikeFromCart}
      //   thisUserName = {thisUserName}
      //   thisUserEmail = {thisUserEmail}
      //   thisUserId = {thisUserId}
      // />   =====For when I add saved trips
    
  // }

}

Signin.propTypes = {
  // handleRemoveBikeFromCart: PropTypes.func,
  onCLickGoogleSignin: PropTypes.func,
  // thisUserId: PropTypes.string,    ===== saved trips
  // thisUserEmail: PropTypes.string,
  // thisUserName: PropTypes.string
}

export default Signin;



// , thisUserId, thisUserName, thisUserEmail
// handleRemoveBikeFromCart,