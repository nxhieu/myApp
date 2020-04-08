import React, { Component } from 'react';
import * as ReactDOM from 'react-dom';

import { ButtonGroup, CheckBox, FormControlLabel, Button } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FacebookIcon from '@material-ui/icons/Facebook';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

import './Styles/Login.css'


class Login extends Component
{
    constructor(props)
    {
        super(props);

        this.state = {};
    }

    Login(e)
    {

    }

    Forget(e)
    {

    }

    Register(e)
    {

    }

    FacebookLogin(e)
    {

    }

    render()
    {
        return (     
        <Grid container component="main" className="root">
            <CssBaseline />
            
            <Grid item xs={12}    sm={8} md={5} component={Paper} elevation={6} square>
                <div className="paper">
                    <Typography component="h1" variant="h2" color="secondary" align='right'>
                        Sign in
                    </Typography>
                    <form className="form" noValidate>
                        <div className="textfield">
                        <TextField
                            placeholder="email"
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="emailTextField"
                            label="Email Address"
                            name="emaul"
                            autoComplete="email"
                            autoFocus/>
                        <TextField    
                            placeholder="password"
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="passwordTextField"
                            label="Password"
                            type="password"
                            autoComplete="current-password"/>
                        </div>
                        <div className="margin">
                        <Button
                            className="button"
                            type="button"
                            fullWidth
                            variant="contained"
                            onClick={this.Login.bind(this)}>
                            Sign In
                        </Button>
                        </div>                        

                        <Grid container>

                            <Grid item xs>
                                <Link id="link1" href="#" variant="body2" color="secondary" 
                                        onClick={this.Forget.bind(this)}>
                                    Forgot password?
                                </Link>
                            </Grid>

                            <Grid item>
                                <Link id="link2" href="#" variant="body2" color="primary"
                                        onClick={this.Register.bind(this)}>
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>

                        </Grid>
                    </form>    
                    <div align='right' className="marginTop">
                        <Typography component="body2" variant="body1" >
                           Sign in with
                        </Typography>
                    </div>
                    <form className="form2" noValidate>
                    <Button
                        className="icon"
                        variant="contained"
                        startIcon={<FacebookIcon/>}
                        align='right'
                        onClick={this.Facebook.bind(this)}>
                        Facebook
                    </Button>
                    </form>
                </div>
                
            </Grid>
            
            <Grid item xs={false} sm={4} md={7} className="image"></Grid>
        </Grid>
    )
    };
}

export default Login;