import { cn } from "@/lib/cn";
import Link from "next/link";

export default function Header() {
    return (
        <>
            <header
                className={cn(
                    "flex items-center justify-center",
                )}>
                <div className={cn(
                    "text-gray-500"
                )}>
                    <Link className="px-2" href={"/"}>首页</Link>
                    <Link className="px-2" href={"/posts"}>归档</Link>
                    <Link className="px-2"
                        href={"/about"}>
                        关于</Link>
                </div>
            </header>
        </>
    );
}
