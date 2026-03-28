import PostList from "@/components/PostList";
import { cn } from "@/lib/cn";
import { allPosts } from "@/lib/core";
import { isPostNormal } from "@/lib/types";
import { Post } from "@/lib/types";

export async function generateMetadata() {
    return {
        title: "GoddoNebianU's Blog | Archive"
    };
}

export default function ArchivePage() {
    const postsByMonth: Record<string, Post[]> = {};
    for (const post of allPosts) {
        if (isPostNormal(post)) {
            const date = post.date_created.slice(0, 7);
            if (postsByMonth[date]) {
                postsByMonth[date].push(post);
            } else {
                postsByMonth[date] = [post];
            }
        } else {
            if (postsByMonth["Super"]) {
                postsByMonth["Super"].push(post);
            } else {
                postsByMonth["Super"] = [post];
            }
        }
    }
    return <>
        <div
            className={cn(
                "flex flex-col",
                "justify-center",
                "gap-4"
            )}>
            {
                Object.keys(postsByMonth).map(date => (
                    <div key={date}>
                        <h1 className={cn(
                            "text-gray-500",
                            "flex"
                        )}>
                            <div className="w-20">{date}</div>
                            <div>| 共{postsByMonth[date].length} 篇文章</div>
                        </h1>
                        <hr className="border-gray-400" />
                        <PostList
                            posts={postsByMonth[date]}
                            showCategory
                            fullyDisplay />
                    </div >
                ))
            }
        </div>
    </>;
}
