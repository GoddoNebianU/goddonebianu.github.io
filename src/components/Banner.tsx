import { cn } from "@/lib/cn";

export default function Banner() {
    return (<>
        <div className={cn(
            "w-full my-3",
            "flex items-center justify-center flex-col gap-2"
        )}>
            <div className="font-extrabold text-3xl md:text-4xl">GoddoNebianU&apos;s Blog</div>
            <div className="font-light text-stone-500">We must know, we will know.</div>
        </div>
        <hr className="border-stone-400" />
    </>);
}
