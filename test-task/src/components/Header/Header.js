import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

import {makeStyles} from '@mui/styles';
import Box from '@mui/material/Box';

const useStyles = makeStyles({
    nav: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    link: {
        color: "white",
        textDecoration: "none"
    }
});

const Header = () => {
    const classes = useStyles();

    let [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        if (localStorage.getItem("key") === "1") {
            setIsAuth(true);

        } else {
            setIsAuth(false);
        }

    }, [isAuth]);

    return (
        <Box sx={{ flexGrow: 1 }} style={{display : `${isAuth ? "block" : "none"}`}}>
            <AppBar position="static">
                <Toolbar className={classes.nav}>
                    <Button color="inherit"><Link to="/feed" className={classes.link}>Feed</Link></Button>
                    <Button color="inherit"><Link to="/info" className={classes.link}>Profile</Link></Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;