import React, {useEffect, useRef, useState} from 'react';
import axios from "axios";
import Grid from "@mui/material/Grid";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Typography from "@mui/material/Typography";
import {useObserver} from "../../hooks/useObserver";

const Feed = () => {

    const loader = useRef(null);

    let [feed, setFeed] = useState([]);

    const [page, setPage] = useState(1);

    useEffect(() => {
        axios.get(`https://picsum.photos/v2/list?page=${page}&limit=5`).then(result => setFeed(prev => [...prev, ...result.data]));
    }, [page]);

    useObserver(loader, {
        root: null,
        rootMargin: '20px',
        threshold: 1.0,
    }, () => {
        setPage(_page => _page + 1)
    }, [feed]);

    return (
        <Grid
            container
            direction="column"
            justifyContent="flex-start"
            alignItems="center"
        >
            {feed && feed.map((item, i) =>
                <Card  ref={i === feed.length - 1 ? loader : null} sx={{ width: 345 }} key={item.id} style={{marginTop: "10px"}}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image={item.download_url}
                            alt={item.author}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {item.author}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            )}
        </Grid>
    );
};

export default Feed;