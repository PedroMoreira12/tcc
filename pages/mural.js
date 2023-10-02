import React, { useState, useEffect } from 'react';
import Post from '../components/common/MuralPosts';
import NewPostDialog from '../components/common/NewPostDialog';
import Button from '@mui/material/Button';

// noinspection JSUnusedGlobalSymbols
export default function Mural() {
    const [posts, setPosts] = useState([]);
    const [dialogOpen, setDialogOpen] = useState(false);

    // Fetch posts from your MongoDB database
    useEffect(() => {
        // Make a request to your backend API to fetch posts and update the 'posts' state
        // Example: axios.get('/api/posts').then((response) => setPosts(response.data));
    }, []);

    const handleCreatePost = (newPost) => {
        // Send the new post data to your backend for saving to the database
        // Example: axios.post('/api/posts', newPost).then((response) => setPosts([...posts, response.data]));
    };

    return (
        <div style={styles.container}>
            <Button
                variant="contained"
                color="primary"
                onClick={() => setDialogOpen(true)}
                style={styles.createButton}
            >
                Create Post
            </Button>
            <div style={styles.postsContainer}>
                {posts.map((post) => (
                    <Post key={post._id} title={post.title} body={post.body} />
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
        paddingLeft: '400px',
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