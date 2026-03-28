"use client";

import { cn } from "@/lib/cn";
import { Post } from "@/lib/types";
import { useState } from "react";
import PostItem from "./PostItem";

interface PostListProps {
    posts: Post[];
    showCategory?: boolean;
    showDescription?: boolean;
    fullyDisplay?: boolean;
}

export default function PostList({
    posts,
    showCategory,
    showDescription,
    fullyDisplay
}: PostListProps) {
    "use client";

    const DEFAULT_SHOW_NUMBER = 10;
    const [showNumber, setShowNumber] = useState(DEFAULT_SHOW_NUMBER);

    return <>
        <div className={cn(
            "w-full",
            "flex flex-col gap-4 items-center justify-center",
        )}>
            <div className={cn(
                "w-full",
                "flex flex-col"
            )}>
                {
                    posts.slice(0, fullyDisplay ? undefined : showNumber).map(post => (
                        <PostItem
                            post={post}
                            showCategory={showCategory}
                            showDescription={showDescription}
                            key={post.meta.category + post.meta.postname} />
                    ))
                }
            </div>
            {showNumber < posts.length && !fullyDisplay &&
                <button className={cn(
                    "underline hover:cursor-pointer w-fit",
                    "text-gray-500"
                )}
                    onClick={() => {
                        setShowNumber(p => p + DEFAULT_SHOW_NUMBER);
                    }}>更多</button>}
        </div>
    </>;
}
