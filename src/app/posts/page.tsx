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
    const postsByYear: Record<string, Post[]> = {};
    for (const post of allPosts) {
        if (isPostNormal(post)) {
            const date = post.date_created.slice(0, 4);
            if (postsByYear[date]) {
                postsByYear[date].push(post);
            } else {
                postsByYear[date] = [post];
            }
        } else {
            if (postsByYear["Super"]) {
                postsByYear["Super"].push(post);
            } else {
                postsByYear["Super"] = [post];
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
                Object.keys(postsByYear).toSorted((a, b) => -a.localeCompare(b)).map(date => (
                    <div key={date}>
                        <h1 className={cn(
                            "text-gray-500",
                            "flex"
                        )}>
                            <div className="w-20">{date}</div>
                            <div>| 共{postsByYear[date].length} 篇文章</div>
                        </h1>
                        <hr className="border-gray-400" />
                        <PostList
                            posts={postsByYear[date]}
                            showCategory={isPostNormal(postsByYear[date][0])}
                            fullyDisplay />
                    </div >
                ))
            }
        </div>
    </>;
}
