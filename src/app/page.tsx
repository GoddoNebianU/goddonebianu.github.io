import { allPosts } from "@/lib/core";
import PostList from "@/components/PostList";



export default function Home() {
  return <PostList posts={allPosts}></PostList>;
}
