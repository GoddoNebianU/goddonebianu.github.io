import { allPosts } from "@/lib/core";
import PostList from "@/components/PostList";
import Banner from "@/components/Banner";

export default function HomePage() {
  return <>
    <Banner />
    <PostList
      showCategory
      showDescription
      posts={allPosts} />
  </>;
}
