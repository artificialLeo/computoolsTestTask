import React, {useEffect, useState} from 'react';
import {Link, Route, Switch, useHistory} from 'react-router-dom';

import CssBaseline from '@mui/material/CssBaseline';
import Info from "../Info/Info";
import Feed from "../Feed/Feed";
import Header from "../Header/Header";
import Login from "../Login/Login";

const App = () => {
    let history = useHistory();
    let [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        if (localStorage.getItem("key") === "1") {
            setIsAuth(true);

            history.push('/feed');
        } else {
            setIsAuth(false);

            history.push('/');
        }

    }, [history, isAuth, Header]);

    return (
        <div>
            <CssBaseline />

            {isAuth ? <Header/> : ""}

            <Switch>
                <Route exact path="/" component={Login}/>
                <Route exact path="/info" component={Info}/>
                <Route exact path="/feed" component={Feed}/>
            </Switch>

        </div>
    );
};

export default App;