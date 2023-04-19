import {posts} from "../utils/posts/instagramPosts";
import Posts from "../components/common/Posts";

// noinspection JSUnusedGlobalSymbols
export default function Instagram({ postTitleStates }) {
    return (
        <>
            <Posts posts={posts} postTitleStates={postTitleStates} />
        </>
    )
}