import { cn } from "@/lib/cn";
import { isPostNormal } from "@/lib/types";
import { Post } from "@/lib/types";
import Link from "next/link";

interface PostItemProps {
    post: Post;
    showCategory?: boolean;
    showDescription?: boolean;
}

export default function PostItem({
    post,
    showCategory,
    showDescription
}: PostItemProps) {
    return (
        <div
            className={cn(
                showDescription && "gap-3 my-4" || "my-2",
                "flex flex-col wrap-break-word",
            )}>
            <Link
                href={`/posts/${post.meta.category}/${post.meta.postname}`}>
                <h3
                    className={cn(
                        showDescription && "font-bold",
                        "mb-1"
                    )}>
                    {post.title}
                </h3>
                {showDescription && <p className={cn(
                    "text-gray-500"
                )}>
                    {post.description}
                </p>}
            </Link>
            <div className={cn(
                "text-gray-500",
                "flex gap-4 font-mono"
            )}>
                <div className="w-38.5">{isPostNormal(post) && post.date_created}</div>
                {showCategory &&
                    <Link href={"/posts/" + post.meta.category}>{post.meta.category}</Link>
                }
            </div>
        </div>
    );
}
