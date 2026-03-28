import fg from "fast-glob";
import matter from "gray-matter";
import { basename, dirname } from "path";
import { remark } from "remark";
import html from "remark-html";
import z from "zod";
import { isPostNormal, isPostSuper, Post } from "./types";

const MRRSchema = z.object(
    {
        data: z.object({
            title: z.string(),
            description: z.string(),
            date_created: z.string().optional(),
            date_modified: z.string().optional(),
            draft: z.boolean(),
        }),
        content: z.string()
    });

export const allPosts: Post[] = (() => {
    const mds = fg
        .sync("posts/**/*.md");
    const result: Post[] = mds.map((path) => {
        const mrrp = MRRSchema.safeParse(matter.read(path));
        if (!mrrp.success) {
            return false;
        }
        const mrr = mrrp.data;
        if (mrr.data.draft) {
            return false;
        }

        const postname = basename(path, ".md");
        const category = basename(dirname(path));

        if (category === "Super") {
            return {
                title: mrr.data.title,
                description: mrr.data.description,
                meta: {
                    category: category,
                    postname: postname,
                    html: remark().use(html).processSync(mrr.content).value as string,
                }
            };
        } else {
            return {
                title: mrr.data.title,
                description: mrr.data.description,
                date_created: mrr.data.date_created,
                date_modified: mrr.data.date_modified,
                meta: {
                    category: category,
                    postname: postname,
                    html: remark().use(html).processSync(mrr.content).value as string,
                }
            };
        }
    }).filter(v => !!v)
        .sort((a, b) => {
            if (isPostSuper(a) && isPostSuper(b)) return a.title.localeCompare(b.title);
            if (isPostSuper(a) && isPostNormal(b)) return 1;
            if (isPostSuper(b) && isPostNormal(a)) return -1;
            if (isPostNormal(a) && isPostNormal(b)) return -a.date_created.localeCompare(b.date_created);
            return 0;
        });
    return result;
})();
