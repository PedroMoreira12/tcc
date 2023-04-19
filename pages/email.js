import { posts } from "../utils/posts/emailPosts";
import Posts from "../components/common/Posts";

// noinspection JSUnusedGlobalSymbols
export default function Email({ postTitleStates }) {
    return (
        <>
            <Posts posts={posts} postTitleStates={postTitleStates} />
        </>
    )
}