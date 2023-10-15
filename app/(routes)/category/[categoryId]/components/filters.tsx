"use client"

import qs from "query-string"
import { useRouter, useSearchParams } from "next/navigation";

import { Color, Size } from "@/types";
import { url } from "inspector";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { motion } from "framer-motion";
import { Filter, FilterIcon, FilterX } from "lucide-react";

interface FilterProps {
    data: (Size | Color)[];
    name: string;
    valueKey: string
}

const Filters: React.FC<FilterProps> = ({
    data,
    name,
    valueKey
}) => {

    const searchParams = useSearchParams()
    const router = useRouter()

    const selectedValue = searchParams.get(valueKey)

    const onClick = (id: string) => {
        const current = qs.parse(searchParams.toString())

        const query = {
            ...current,
            [valueKey]: id
        };

        if (current[valueKey] === id) {
            query[valueKey] = null
        }

        const url = qs.stringifyUrl({
            url: window.location.href,
            query
        }, { skipNull: true });

        router.push(url)
    }

    return (
        <div className="mt-10">
            <div className="flex-col space-y-4">
                <h3 className="text-md font-normal">
                    {name}
                </h3>
                <div className="flex flex-wrap gap-2">
                    {data.map((filter) => (
                        <div key={filter.id} className="flex items-center">
                            <Button
                                className={cn(
                                    "rounded-md text-xs bg-transparent h-0 dark:text-white px-4 border-[#6f6f6f] border-[0.6px]",
                                    selectedValue === filter.id && "bg-black dark:bg-white text-white dark:text-black"
                                )}
                                onClick={() => onClick(filter.id)}
                            >
                                {filter.name}
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Filters;