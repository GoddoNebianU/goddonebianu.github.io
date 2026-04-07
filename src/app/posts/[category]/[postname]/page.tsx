import { allPosts } from "@/lib/core";
import { notFound } from "next/navigation";
import { cn } from "@/lib/cn";
import { isPostNormal } from "@/lib/types";

interface PostPageProps {
    params: Promise<{
        category: string;
        postname: string;
    }>;
}

export function generateStaticParams() {
    return allPosts.map(post => ({
        category: post.meta.category,
        postname: post.meta.postname
    }));
}

function getPost(category: string, postname: string) {
    const post = allPosts.find(
        v => v.meta.category === category && v.meta.postname === postname
    );
    if (!post) notFound();
    return post;
}

export async function generateMetadata(props: PostPageProps) {
    const params = await props.params;
    const post = getPost(params.category, params.postname);
    return {
        title: post.title
    };
}

export default async function PostPage(
    props: PostPageProps
) {
    const params = await props.params;
    const post = getPost(params.category, params.postname);
    return <>
        <div className="mx-auto">
            <article className={"prose prose-stone"}>
                <h1>{post.title}</h1>
                <div
                    dangerouslySetInnerHTML={{
                        __html: post.meta.html
                    }} />
            </article>
            {isPostNormal(post) &&
                <div className={cn(
                    "font-light text-stone-500 text-sm mt-8"
                )}>创建于：{post.date_created}，最后编辑于：{post.date_modified}</div>
            }
        </div>
    </>;
}
