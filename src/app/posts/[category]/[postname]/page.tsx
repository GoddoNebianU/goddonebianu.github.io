import { allPosts } from "@/lib/core";
import { notFound } from "next/navigation";
import styles from "./page.module.css";
import { cn } from "@/lib/cn";

interface PostProps {
    params: Promise<{
        category: string;
        postname: string;
    }>;
}

export function generateStaticParams() {
    return allPosts.map(post => ({
        category: post.category,
        postname: post.postname
    }));
}

function getPost(category: string, postname: string) {
    const post = allPosts.find(
        v => v.category === category && v.postname === postname
    );
    if (!post) notFound();
    return post;
}

export async function generateMetadata(props: PostProps) {
    const params = await props.params;
    const post = getPost(params.category, params.postname);
    return {
        title: post.title
    };
}

export default async function Post(
    props: PostProps
) {
    const params = await props.params;
    const post = getPost(params.category, params.postname);
    return <>
        <div className={styles["markdown-body"]}>
            <h1>{post.title}</h1>
            <div
                dangerouslySetInnerHTML={{
                    __html: post.html
                }} />
        </div>
        <div className={cn(
            "font-light text-gray-500 text-sm mt-8"
        )}>最后编辑于：{post.date}</div>
    </>;
}
