import React from 'react'
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Li } from 'evergreen-ui';

const Title = () => (
    <div class="title">
        Login
    </div>
)

const Email = () => (
    <div class="field">
        <input type="text" className="input" required></input>
        <label>Email Address</label>
    </div>
)

const Password = () => (
    <div class="field">
        <input type="password" required />
        <label>Password</label>
    </div>
)

const Content = () => (
    <div>
        <div class="content">
            <div class="checkbox">
                <input type="checkbox" id="remember-me"></input>
                <label for="remember-me">Remember me</label>
            </div>
            <div class="pass-link">
                <a href="#">Forgot password?</a>
            </div>
        </div>
        <div class="field">
            <input type="submit" value="Login" />
        </div>
        <div class="signup-link">
            Not a member? <a href="#">Signup now</a>
        </div>
    </div>
) 

const Form = () => (
    <form action="#">
        <div className="field">
            <Email />
        </div>
        <div className="field">
            <Password />
        </div>
        <Content />
    </form>
)

export default () => (
    <div>
        <div className="returnHome">
            <Link to="/" className="returnHome">
                <Button variant="contained" color="primary">
                    <p><strong>Home</strong></p>
                </Button>
            </Link>
        </div>
        <div className="form">
            <div className="wrapper">
                <Title />
                <Form />
            </div>
        </div>
    </div>
)