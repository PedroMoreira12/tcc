import {posts} from "../utils/posts/homePosts";
import Posts from "../components/common/Posts";

// noinspection JSUnusedGlobalSymbols
export default function Home() {
    return (
        <>
            <Posts posts={posts} />
        </>
  )
}