import fg from "fast-glob";
import matter from "gray-matter";
import { basename, dirname, join } from "path";
import { remark } from "remark";
import html from "remark-html";

export type Post = {
    category: string,
    path: string,
    postname: string,
    description: string,
    html: string,
    date: string,
    title: string
};

export const allPosts: Post[] = fg
    .sync("posts/**/*.md")
    .map((path) => {
        const postname = basename(path, ".md");
        const mrr = matter.read(path);
        return {
            category: basename(dirname(path)),
            path: join(dirname(path), basename(postname)),
            postname: postname,
            description: mrr.data.description,
            html: remark().use(html).processSync(mrr.content).toString(),
            date: mrr.data.date.toString(),
            title: mrr.data.title.toString()
        };
    }).toSorted((post1, post2) => post1.date.localeCompare(post2.date));
