import React, {useEffect, useState} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import cookie from "cookie";
import jwt from "jsonwebtoken";
import axios from "axios";

const useStyles = {
    card: {
        marginBottom: '16px',
        backgroundColor: 'lightblue',
        maxWidth: '400px',
        margin: '0 auto',
    },
    spaceBetweenCards: {
        height: '16px', // Set the height of the white space
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

const Post = ({ title, body }) => {
    const [username, setUsername] = useState(null);

    async function getId () {
        try {
            const cookies = cookie.parse(document.cookie);
            const token = cookies.token;
            const decodedToken = jwt.decode(token);
            const id = decodedToken.id;
            const response = await axios.get(`/api/id?id=${id}`);
            return response.data.username;
        } catch (error) {
            console.log(error)
        }
    }

    const objectId = getId();

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
                    <p>Post criado por: </p>
                </CardContent>
            </Card>
            <div style={useStyles.spaceBetweenCards}></div>
        </div>
    );
};

export default Post;