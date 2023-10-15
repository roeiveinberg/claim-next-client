"use client"

import { usePathname } from "next/navigation";
import Link from "next/link";


import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Category } from "@/types";


interface CategoryLinksProps {
    data: Category[]
}


const CategoryLinks: React.FC<CategoryLinksProps> = ({
    data
}) => {

    // ---------
    // ESC key

    function simulateKeyPress(key: any) {
        const event = new KeyboardEvent('keydown', {
            key: key,
            keyCode: key.charCodeAt(0),
            which: key.charCodeAt(0),
        });

        document.dispatchEvent(event);
    }

    // ---------


    const pathname = usePathname()

    const routes = data.map((route) => ({
        href: `/category/${route.id}`,
        label: route.name,
        active: pathname === `/category/${route.id}`
    }))


    return (
        <div className="flex flex-col gap-y-6 text-xl">
            {routes.map((route) => (
                <Link
                    href={route.href}
                    key={route.href}
                    onClick={() => simulateKeyPress('Escape')}
                    className={cn(
                        "",
                        route.active ? "" : ""
                    )}
                >
                    {route.label}
                </Link>
            ))}
        </div>
    );
}

export default CategoryLinks;