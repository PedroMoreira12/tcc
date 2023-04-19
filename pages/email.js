import { placeHolder } from "../utils/constants/texts-constants";
import {posts} from "../utils/posts/whatsappPosts";
import Posts from "../components/common/Posts";

// noinspection JSUnusedGlobalSymbols
export default function Email() {
    return (
        <>
            <Posts posts={posts} />
        </>
    )
}