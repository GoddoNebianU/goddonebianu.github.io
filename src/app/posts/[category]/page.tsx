import { allPosts } from "@/lib/core";
import { notFound } from "next/navigation";
import PostList from "@/components/PostList";
import { cn } from "@/lib/cn";

interface CategoryPageProps {
    params: Promise<{
        category: string;
    }>;
}

export function generateStaticParams() {
    return allPosts.map(post => ({
        category: post.meta.category
    }));
}

function getCategory(category: string) {
    const sr = allPosts.some(
        v => v.meta.category === category
    );
    if (!sr) notFound();
    return category;
}

export async function generateMetadata(props: CategoryPageProps) {
    const params = await props.params;
    const category = getCategory(params.category);
    return {
        title: "GoddoNebianU's Blog | Category: " + category
    };
}

export default async function CategoryPage(
    props: CategoryPageProps
) {
    const params = await props.params;
    const category = getCategory(params.category);
    return <>
        <h1 className={cn(
            "text-stone-500"
        )}>{category}</h1>
        <hr className="border-stone-400" />
        <PostList
        showDescription
        posts={
            allPosts.filter(post => post.meta.category === category)
        } />
    </>;
}
