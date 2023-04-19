import * as React from 'react';
import Grid from '@mui/material/Grid';
import MarkdownReact from './Markdown';
import Divider from '@mui/material/Divider';
import { useRouter } from "next/router";

export default function Posts({ posts, postTitleStates }) {
    const router = useRouter()
    const postRefs = React.useRef([]);

    React.useEffect(() => {
        if (postTitleStates) {
            Object.entries(postTitleStates).forEach(([postIndex, shouldScroll]) => {
                if (shouldScroll && postRefs.current[postIndex]) {
                    postRefs.current[postIndex].scrollIntoView({behavior: 'smooth'});
                }
            });
        }
    }, [postTitleStates]);

    React.useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [router.asPath])

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
                <div key={index} ref={ref => postRefs.current[index] = ref}>
                    <MarkdownReact className="markdown" key={index} children={post} />
                    {index < posts.length - 1 && <Divider sx={{ my: 4 }} />}
                </div>
            ))}
        </Grid>
    );
}