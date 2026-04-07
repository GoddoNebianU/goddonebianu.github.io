import { readFile } from "fs/promises";
import { remark } from "remark";
import html from "remark-html";

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
        <div className="mx-auto">
            <article className={"prose prose-stone"}
                dangerouslySetInnerHTML={{
                    __html: htmlContent
                }} />
        </div>
    );
}
