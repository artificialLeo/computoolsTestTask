import * as React from 'react';
import {useEffect, useState} from 'react';
import Grid from "@mui/material/Grid";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useHistory } from "react-router-dom";

const Login = () => {
    let history = useHistory();

    useEffect(() => {
        if (localStorage.getItem("key") === "1") {
            history.push("/feed");
        }

    }, [history]);

    const [isValid, setIsValid] = useState("");
    const [profileData, setProfileData] = useState({
        mail: "",
        pass: ""
    });

    const handleChange = (e) => {
        setProfileData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))

    }

    const handleClick = () => {
        if (profileData.mail === "user@mail.com" && profileData.pass === "password") {
            localStorage.setItem("key", "1");
            setIsValid("");

            history.push("/feed");
        } else {
            setIsValid("Data input mismatch!");
        }
    }

    const submitHandler = (e) => {
        e.preventDefault();
    }

    return (
        <form onSubmit={submitHandler}>
            <Grid container
                  direction="column"
                  justifyContent="space-between"
                  alignItems="center"
            >


                <TextField
                    required
                    type="email"
                    label="Email"
                    name="mail"
                    onChange={handleChange}
                    style={{marginTop: "10px"}}
                />

                <TextField
                    required
                    type="password"
                    label="Password"
                    name="pass"
                    inputProps={{ minLength: 8 }}
                    onChange={handleChange}
                    style={{marginTop: "10px"}}
                    helperText={isValid}
                />

                <Button variant="contained" size="large" type="submit" onClick={handleClick} style={{marginTop: "10px"}}>
                    Log In
                </Button>

            </Grid>
        </form>
    );
};

export default Login;