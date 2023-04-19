import Posts from "../components/common/Posts"
import { posts } from "../utils/posts/whatsappPosts"

// noinspection JSUnusedGlobalSymbols
export default function Whatsapp({ postTitleStates }) {
    return (
        <>
            <Posts posts={posts} postTitleStates={postTitleStates} />
        </>
    )
}