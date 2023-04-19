import Posts from "../components/common/Posts"
import { posts } from "../utils/posts/whatsappPosts"
import Layout from "../components/common/Layout";

// noinspection JSUnusedGlobalSymbols
export default function Whatsapp() {
    return (
        <>
            <Posts posts={posts} />
        </>
    )
}