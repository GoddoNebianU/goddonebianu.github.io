"use client";

import { cn } from "@/lib/cn";
import { Post } from "@/lib/core";
import Link from "next/link";
import { useState } from "react";

export default function PostList({ posts }: { posts: Post[]; }) {
    "use client";

    const DEFAULT_SHOW_NUMBER = 10;
    const [showNumber, setShowNumber] = useState(DEFAULT_SHOW_NUMBER);

    return <>
        <div className={cn(
            "w-full",
            "flex flex-col gap-4 items-center justify-center",
            "font-light"
        )}>
            <div className={cn(
                "w-full",
                "flex flex-col gap-8"
            )}>
                {
                    posts.slice(0, showNumber).map((v) => (<Link
                        href={v.path}
                        key={v.date}
                        className={cn(
                            "flex gap-3 flex-col wrap-break-word",
                        )}>
                        <div className={cn(
                            "font-bold"
                        )}>
                            {v.title}
                        </div>
                        <div className={cn(
                            "text-gray-500"
                        )}>
                            {v.description}
                        </div>
                        <div className={cn(
                            "text-gray-500",
                            "flex justify-start gap-4"
                        )}>
                            <span>{v.date}</span>
                            <span>{v.category}</span>
                        </div>
                    </Link>))
                }
            </div>
            {showNumber < posts.length &&
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