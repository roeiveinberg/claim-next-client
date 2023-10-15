"use client"

import { useParams, usePathname, useRouter } from "next/navigation"

import { cn } from "@/lib/utils"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { motion } from "framer-motion"
import { Button } from "../ui/button"
import useCart from "@/hooks/use-cart"
import CartItem from "../cart/cart-item"
import Summary from "../cart/summary"

const one = {
    hidden: {
        opacity: 0,
        x: -10,
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            delay: 0.2,
            duration: 0.6
        },
    },
}

const two = {
    hidden: {
        opacity: 0,
        x: -10,
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            delay: 0.3,
            duration: 0.6
        },
    },
}

const three = {
    hidden: {
        opacity: 0,
        x: -10,
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            delay: 0.4,
            duration: 0.6
        },
    },
}

const four = {
    hidden: {
        opacity: 0,
        x: -10,
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            delay: 0.5,
            duration: 0.6
        },
    },
}

const five = {
    hidden: {
        opacity: 0,
        x: -10,
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            delay: 0.6,
            duration: 0.6
        },
    },
}

const six = {
    hidden: {
        opacity: 0,
        x: -10,
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            delay: 0.7,
            duration: 0.6
        },
    },
}

export function CartIcon({
    className,
}: React.HTMLAttributes<HTMLElement>) {


    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, []);


    // ------

    const router = useRouter()
    const cart = useCart()

    // ------

    if (!isMounted) {
        return null
    }


    return (
        <>
            <Sheet>
                <SheetTrigger className="flex items-center gap-x-2">
                    <div className="relative">
                        <svg className=" stroke-black dark:stroke-white" width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="4.5" width="15" height="13" rx="2.16667" stroke="" />
                            <path d="M11.2068 2.15479C11.6221 2.51726 11.9473 2.94386 12.1677 3.40813C12.3597 3.81266 12.3106 4.07187 12.2239 4.2078C12.1365 4.34476 11.9197 4.5 11.4703 4.5H8H4.5297C4.08026 4.5 3.86346 4.34476 3.77612 4.2078C3.68944 4.07187 3.64031 3.81266 3.83231 3.40813C4.05266 2.94386 4.3779 2.51726 4.79323 2.15479C5.20868 1.79222 5.70544 1.50161 6.25656 1.30238C6.8077 1.10315 7.40029 1 8 1C8.59971 1 9.1923 1.10315 9.74344 1.30238C10.2946 1.50161 10.7913 1.79222 11.2068 2.15479Z" stroke="" />
                        </svg>
                        <div className=" absolute top-[1px] right-[-8px] bg-[#FFB502] text-black h-[14px] w-[14px] rounded-full">
                            <p className="text-[9px]">{cart.items.length}</p>
                        </div>
                    </div>
                </SheetTrigger>
                <SheetContent side="bottom" className="p-8 flex flex-col justify-between">

                    <SheetHeader>
                        <SheetTitle>
                            <motion.span
                                variants={three}
                                initial="hidden"
                                animate="show"
                                className="text-xl font-bold"
                            >your cart
                            </motion.span>
                        </SheetTitle>
                    </SheetHeader>

                    <motion.div
                        variants={four}
                        initial="hidden"
                        animate="show"
                        className="py-4"
                    >
                        <div className="lg:col-span-7">
                            {cart.items.length === 0 && <p className="text-gray-600 pb-6">you better add some product in here<span className="text-2xl pl-2">😒</span></p>}
                            <ul>
                                {cart.items.map((item) => (
                                    <CartItem
                                        key={item.id}
                                        data={item}
                                    />
                                ))}
                            </ul>
                        </div>


                    </motion.div>

                    <motion.div className="">
                        {/* <motion.p
                            variants={five}
                            initial="hidden"
                            animate="show"
                        >total amount: 0
                        </motion.p>
                        <motion.div>
                            <Button className="text-white bg-[#393939] hover:bg-[#d6d6d6] hover:text-black">
                                checkout
                            </Button>
                        </motion.div> */}
                        <Summary />
                    </motion.div>

                </SheetContent>
            </Sheet>
        </>
    )
};