"use client";

import { cn } from "@/lib/cn";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
    const [visible, setVisible] = useState(true);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY === 0) {
                setVisible(true);
            } else {
                setVisible(false);
            };
        };
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <div
                className={cn(
                    "fixed left-1/2 -translate-x-[50%]",
                    "bg-white shadow",
                    "py-2 px-4 m-2 rounded-4xl",
                    "flex",
                    "transition-transform duration-300",
                    visible ? 'translate-y-0 opacity-100' : '-translate-y-24 opacity-0'
                )}>
                <Link className="px-2" href={"/"}>首页</Link>
                <Link className="px-2"
                target="_blank"
                href={"https://github.com/GoddoNebianu/goddonebianu.github.io"}>关于</Link>
            </div>
            <div className="h-16"></div>
        </>
    );
}
