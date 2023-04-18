import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import MarkdownReact from './Markdown';

export default function Posts(props) {
    const { posts } = props;

    return (
        <Grid
            item
            xs={12}
            md={8}
            sx={{
                '& .markdown': {
                    py: 3,
                },
            }}
        >
            {posts.map((post, index) => (
                <MarkdownReact className="markdown" key={index} children={post} />
            ))}
        </Grid>
    );
}