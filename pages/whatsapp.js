import Posts from "../components/common/Posts"
import { posts } from "../utils/posts/whatsappPosts"

// noinspection JSUnusedGlobalSymbols
export default function Whatsapp() {
    return (
        <>
            <div>
                <Posts title="WhatsApp" posts={posts} />
            </div>
        </>
    )
}