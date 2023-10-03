import React, { useState, useEffect } from 'react';
import Post from '../components/common/MuralPosts';
import NewPostDialog from '../components/common/NewPostDialog';
import Button from '@mui/material/Button';
import axios from "axios";
import cookie from "cookie";
import jwt from "jsonwebtoken";

// noinspection JSUnusedGlobalSymbols
export default function Mural() {
    const [posts, setPosts] = useState([]);
    const [dialogOpen, setDialogOpen] = useState(false);
    const [shouldBeRendered, setShouldBeRendered] = useState(null);

    // Fetch posts from your MongoDB database
    useEffect(() => {
        // Make a GET request to your backend API to fetch posts
        axios.get('/api/muralposts')
            .then((response) => {
                // Update the 'posts' state with the fetched data
                setPosts(response.data.posts.reverse());
            })
            .catch((error) => {
                console.error('Error fetching posts:', error);
            });
    }, []);

    async function handleCreatePost (newPost) {
        try {
            const post_title = newPost.title
            const post_body = newPost.body
            const user_id = getId();
            const response = await axios.post('/api/mural', {post_title, post_body, user_id})
        } catch (error) {
            console.log(error)
        }
        window.location.reload();
    }

    function getId () {
        const cookies = cookie.parse(document.cookie);
        const token = cookies.token;
        const decodedToken = jwt.decode(token);
        const id = decodedToken.id;
        return id
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                let username = false;
                const cookies = cookie.parse(document.cookie);
                const token = cookies.token;
                const decodedToken = jwt.decode(token);
                const id = decodedToken?.id;

                if (id) {
                    username = true;
                    const response = await axios.get(`/api/id?id=${id}`);
                    username = response.data.username;
                }

                setShouldBeRendered(username);
            } catch (error) {
                console.error('Error fetching data:', error);
                setShouldBeRendered(false);
            }
        };

        fetchData();
    }, []);

    return (
        <div style={styles.container}>
            {shouldBeRendered ? (
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => setDialogOpen(true)}
                    style={styles.createButton}
                >
                    Create Post
                </Button>
            ) : null}
            <div style={styles.postsContainer}>
                {posts.map((post) => (
                    <Post key={post._id} userId={post.user} title={post.title} body={post.body} />
                ))}
            </div>
            <NewPostDialog
                open={dialogOpen}
                onClose={() => setDialogOpen(false)}
                onSubmit={handleCreatePost}
            />
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        paddingTop: '20px',
        paddingLeft: '10%',
    },
    postsContainer: {
        marginTop: '20px',
    },
    createButton: {
        backgroundColor: '#2196F3',
        color: 'white',
        borderRadius: '5px',
        textTransform: 'none',
        boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)',
        transition: 'background-color 0.3s ease-in-out',
        '&:hover': {
            backgroundColor: '#1976D2'
        },
    },
};