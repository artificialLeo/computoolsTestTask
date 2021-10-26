import React, {useEffect} from 'react';
import { useHistory } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";

const Info = () => {
    let history = useHistory();

    let user = {
        "data": {
            "id": 2,
            "email": "janet.weaver@reqres.in",
            "first_name": "Janet",
            "last_name": "Weaver",
            "avatar": "https://reqres.in/img/faces/2-image.jpg"
        },
        "support": {
            "url": "https://reqres.in/#support-heading",
            "text": "To keep ReqRes free, contributions towards server costs are appreciated!"
        }
    };

    useEffect(() => {
        if (localStorage.getItem("key") !== "1") {

            history.push("/");
        }

    }, [history]);

    let handleLogOut = () => {
        localStorage.setItem("key", "0");

        history.push("/");
    }

    return (
        <Grid
            container
            direction="column"
            justifyContent="flex-start"
            alignItems="center"
            style={{marginTop: "10px"}}
        >
            <Card sx={{maxWidth: 345}}>
                <CardHeader
                    avatar={<Avatar src={user.data.avatar}/>}
                    title={`Name: ${user.data.first_name} ${user.data.last_name}`}
                    subheader={`Email: ${user.data.email}`}
                />
            </Card>

            <Button variant="contained" color="primary" style={{marginTop: "10px"}} onClick={handleLogOut}>Log Out</Button>
        </Grid>
    );
};

export default Info;