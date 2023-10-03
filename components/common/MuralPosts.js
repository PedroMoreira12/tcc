import React, {useEffect, useState} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import axios from "axios";

const useStyles = {
    card: {
        marginBottom: '16px',
        backgroundColor: 'lightblue',
        maxWidth: '800px',
        margin: '0 auto',
    },
    spaceBetweenCards: {
        height: '16px',
    },
    title: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        color: 'blue',
    },
    body: {
        color: 'black',
        wordWrap: 'break-word',
    },
};

const Post = ({ userId, title, body }) => {
    const [username, setUsername] = useState(null);

    const objectId = userId;

    useEffect(() => {
        axios.get(`/api/getusername?objectId=${objectId}`)
            .then((response) => {
                setUsername(response.data.username);
            })
            .catch((error) => {
                console.error('Error fetching username:', error);
            });
    }, []);


    return (
        <div>
            <Card sx={useStyles.card} elevation={3}>
                <CardContent>
                    <Typography variant="h2" sx={useStyles.title}>
                        {title}
                    </Typography>
                    <Typography variant="body1" sx={useStyles.body}>
                        {body}
                    </Typography>
                    <p>Post criado por: {username} </p>
                </CardContent>
            </Card>
            <div style={useStyles.spaceBetweenCards}></div>
        </div>
    );
};

export default Post;