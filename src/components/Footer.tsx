import { cn } from "@/lib/cn";

export default function Footer() {
    return (
        <footer className={cn(
            "w-full flex-1",
            "flex flex-col justify-end items-center",
            "text-center text-stone-500"
        )}>
            <p>博客文章内容采用 <a target="_blank" href="https://creativecommons.org/licenses/by-sa/4.0/deed.zh-hans">CC BY-SA 4.0 许可协议</a></p>
            <p>本站源代码以<a target="_blank" href="https://www.gnu.org/licenses/agpl-3.0.html"> GNU AGPLv3 协议</a> 开源</p>
            <p>© 2026 <a target="_blank" href="https://github.com/GoddoNebianU">GoddoNebianU</a></p>
        </footer>
    );
}
