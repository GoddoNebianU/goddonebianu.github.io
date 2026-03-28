import { readFile } from "fs/promises";
import { remark } from "remark";
import html from "remark-html";
import styles from "@/markdown.module.css";

export async function generateMetadata() {
    return {
        title: "GoddoNebianU's Blog | About"
    };
}

export default async function AboutPage() {
    const htmlContent = (await (
        remark()
            .use(html)
            .process(await readFile("README.md", { encoding: "utf8" }))
    )).value;
    return (
        <div
            className={styles["markdown-body"]}
            dangerouslySetInnerHTML={{
                __html: htmlContent
            }} />
    );
}
