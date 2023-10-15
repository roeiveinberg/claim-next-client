"use client"

import { useParams, usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { motion } from "framer-motion"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip"
import { Category } from "@/types"
import CategoryLinks from "./category-links"

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


const social1 = {
    hidden: {
        opacity: 0,
        y: -10,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.8,
            duration: 0.6
        },
    },
}
const social2 = {
    hidden: {
        opacity: 0,
        y: -10,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.9,
            duration: 0.6
        },
    },
}
const social3 = {
    hidden: {
        opacity: 0,
        y: -10,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 1,
            duration: 0.6
        },
    },
}

export const revalidate = 0;


interface MainNavProps {
    data: Category[];
}


const MainNav: React.FC<MainNavProps> = ({
    data
}) => {




    const [isMounted, setIsMounted] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    useEffect(() => {
        setIsMounted(true)
    }, []);

    if (!isMounted) {
        return null
    }


    // ----------

    function simulateKeyPress(key: any) {
        const event = new KeyboardEvent('keydown', {
            key: key,
            keyCode: key.charCodeAt(0),
            which: key.charCodeAt(0),
        });

        document.dispatchEvent(event);
    }

    // ----------

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };


    return (
        <>
            <Sheet>
                <SheetTrigger className="flex items-center gap-x-2">
                    <motion.div
                        variants={one}
                        initial="hidden"
                        animate="show"
                        className="flex items-center gap-x-2"
                    >
                        <svg className="fill-black dark:fill-white" width="22" height="22" viewBox="0 0 28 22" fill="" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M0 0.888862C0 0.682582 0.0819444 0.484752 0.227806 0.33889C0.373668 0.193028 0.571498 0.111084 0.777778 0.111084H27.2222C27.4285 0.111084 27.6263 0.193028 27.7722 0.33889C27.9181 0.484752 28 0.682582 28 0.888862C28 1.09514 27.9181 1.29297 27.7722 1.43883C27.6263 1.5847 27.4285 1.66664 27.2222 1.66664H0.777778C0.571498 1.66664 0.373668 1.5847 0.227806 1.43883C0.0819444 1.29297 0 1.09514 0 0.888862ZM0 11C0 10.7937 0.0819444 10.5959 0.227806 10.45C0.373668 10.3041 0.571498 10.2222 0.777778 10.2222H27.2222C27.4285 10.2222 27.6263 10.3041 27.7722 10.45C27.9181 10.5959 28 10.7937 28 11C28 11.2063 27.9181 11.4041 27.7722 11.5499C27.6263 11.6958 27.4285 11.7778 27.2222 11.7778H0.777778C0.571498 11.7778 0.373668 11.6958 0.227806 11.5499C0.0819444 11.4041 0 11.2063 0 11ZM0 21.1111C0 20.9048 0.0819444 20.707 0.227806 20.5611C0.373668 20.4153 0.571498 20.3333 0.777778 20.3333H27.2222C27.4285 20.3333 27.6263 20.4153 27.7722 20.5611C27.9181 20.707 28 20.9048 28 21.1111C28 21.3174 27.9181 21.5152 27.7722 21.6611C27.6263 21.8069 27.4285 21.8889 27.2222 21.8889H0.777778C0.571498 21.8889 0.373668 21.8069 0.227806 21.6611C0.0819444 21.5152 0 21.3174 0 21.1111Z" fill="" />
                        </svg>
                    </motion.div>
                </SheetTrigger>
                <SheetContent side="left" className="p-8 flex flex-col justify-between">

                    <SheetHeader className="flex flex-col space-y-1">
                        <SheetTitle>
                            <motion.span
                                variants={one}
                                initial="hidden"
                                animate="show"
                            >menu</motion.span>
                        </SheetTitle>
                        <SheetDescription>
                            <motion.span
                                variants={two}
                                initial="hidden"
                                animate="show"
                                className=" text-[#6d6d6d]"
                            >explore our store</motion.span>
                        </SheetDescription>
                    </SheetHeader>


                    <div className="overflow-hidden">
                        <div className={`flex main-nav ${isMenuOpen ? 'open' : ''}`}>

                            <motion.nav className={cn("pb-[15vh] w-full")}>
                                <motion.ul className="flex flex-col gap-y-6 text-xl">
                                    <motion.li
                                        variants={three}
                                        initial="hidden"
                                        animate="show"
                                        onClick={() => simulateKeyPress('Escape')}
                                    >
                                        <Link href="/">
                                            home
                                        </Link>
                                    </motion.li>
                                    <motion.li
                                        variants={four}
                                        initial="hidden"
                                        animate="show"
                                        className="flex justify-between"
                                    >
                                        <Link
                                            onClick={() => simulateKeyPress('Escape')}
                                            href="/store">
                                            store
                                        </Link>

                                        <svg onClick={toggleMenu} className=" cursor-pointer fill:black dark:fill-[#b9b9b9]" width="8" height="16" viewBox="0 0 10 16" fill="" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M1.505 0L9.505 8L1.505 16L0 14.5L6.5 8L0 1.5L1.505 0Z" fill="" />
                                        </svg>

                                    </motion.li>
                                    <motion.li
                                        variants={five}
                                        initial="hidden"
                                        animate="show"
                                        onClick={() => simulateKeyPress('Escape')}
                                    >
                                        <Link
                                            href="/about">
                                            about
                                        </Link>
                                    </motion.li>
                                    <motion.li
                                        variants={six}
                                        initial="hidden"
                                        animate="show"
                                        onClick={() => simulateKeyPress('Escape')}
                                    >
                                        <Link href="/contact">
                                            contact
                                        </Link>
                                    </motion.li>
                                </motion.ul>

                                <motion.div className={cn("pb-[15vh] absolute top-0 w-full right-[-290px]")}>

                                    {/* ----------- */}

                                    <svg onClick={toggleMenu} className=" absolute top-0 right-0 rotate-180 cursor-pointer fill:black dark:fill-[#b9b9b9]" width="8" height="16" viewBox="0 0 10 16" fill="" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M1.505 0L9.505 8L1.505 16L0 14.5L6.5 8L0 1.5L1.505 0Z" fill="" />
                                    </svg>

                                    <CategoryLinks data={data} />

                                </motion.div>

                            </motion.nav>
                        </div>

                    </div>

                    <motion.div className="flex gap-x-4 items-center ">

                        <motion.div
                            variants={social1}
                            initial="hidden"
                            animate="show"
                            className="h-[17px]"
                        >
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger>
                                        <motion.svg
                                            variants={social1}
                                            initial="hidden"
                                            animate="show"
                                            className="fill-transparent stroke-black dark:stroke-white" width="17" height="17" viewBox="0 0 17 17" fill="" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12.0404 16.1059H5.0147C2.80662 16.1059 1 14.2993 1 12.0912V5.06548C1 2.8574 2.80662 1.05078 5.0147 1.05078H12.0404C14.2485 1.05078 16.0551 2.8574 16.0551 5.06548V12.0912C16.0551 14.2993 14.2485 16.1059 12.0404 16.1059Z" stroke="" strokeWidth="1.07059" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M8.52751 12.0912C10.4676 12.0912 12.0404 10.5184 12.0404 8.57829C12.0404 6.63819 10.4676 5.06543 8.52751 5.06543C6.58741 5.06543 5.01465 6.63819 5.01465 8.57829C5.01465 10.5184 6.58741 12.0912 8.52751 12.0912Z" stroke="" strokeWidth="1.07059" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M12.5424 4.56325C12.8195 4.56325 13.0442 4.33857 13.0442 4.06141C13.0442 3.78425 12.8195 3.55957 12.5424 3.55957C12.2652 3.55957 12.0405 3.78425 12.0405 4.06141C12.0405 4.33857 12.2652 4.56325 12.5424 4.56325Z" stroke="" strokeWidth="1.07059" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                        </motion.svg>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>@cliam_official</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </motion.div>

                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger>
                                    <motion.svg
                                        variants={social2}
                                        initial="hidden"
                                        animate="show"
                                        className="fill-black dark:fill-white" width="14" height="17" viewBox="0 0 14 17" fill="" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.3234 3.66274C10.0727 2.21886 8.0418 1.81791 6.22484 2.0204C5.00372 2.15663 3.83091 2.62059 2.99789 3.54308C2.28253 4.33538 1.86006 5.36268 1.65417 6.41939C1.4458 7.48941 1.39296 8.5664 1.49565 9.65035C1.68095 11.6082 2.36349 13.5866 4.23247 14.5556C5.36303 15.1417 6.71263 15.2672 7.98189 15.1322C9.15703 15.0073 10.1676 14.5834 10.9806 13.7085C11.6318 13.0078 11.9259 12.0861 11.7522 11.1396C11.6171 10.4036 11.1664 9.82683 10.5319 9.44942C10.531 9.44892 10.5301 9.44864 10.5291 9.4486C10.5282 9.44855 10.5272 9.44874 10.5263 9.44916C10.5255 9.44957 10.5247 9.45019 10.5241 9.45096C10.5236 9.45174 10.5232 9.45264 10.523 9.4536C10.3218 10.9574 9.59095 12.3044 8.00883 12.6832C7.28278 12.8569 6.51757 12.835 5.81243 12.5887C4.90898 12.2732 4.19842 11.5687 4.02565 10.6091C3.88369 9.82064 4.08463 9.03391 4.62646 8.44178C5.2189 7.79438 6.10022 7.48182 6.95289 7.40194C7.67754 7.33414 8.42123 7.36402 9.14016 7.47625C9.14093 7.47638 9.14171 7.47633 9.14246 7.4761C9.1432 7.47588 9.14388 7.47548 9.14444 7.47495C9.145 7.47443 9.14542 7.47378 9.14567 7.47306C9.14592 7.47234 9.146 7.47158 9.14588 7.47083C9.10966 7.2153 9.03834 6.97148 8.93194 6.73937C8.67837 6.18625 8.23593 5.86301 7.63358 5.75681C6.86852 5.62182 5.979 5.76316 5.45994 6.39198C5.43754 6.41902 5.38878 6.48296 5.31364 6.58379C5.31034 6.58823 5.30637 6.58885 5.30172 6.58565L4.16807 5.8079C4.16581 5.80635 4.16425 5.80395 4.16373 5.80123C4.16321 5.79851 4.16377 5.79568 4.16529 5.79335C5.02741 4.49421 6.57238 4.06989 8.05063 4.39777C9.62346 4.7467 10.3973 6.0319 10.559 7.55582C10.5647 7.61031 10.5742 7.72126 10.5874 7.88866C10.5879 7.89392 10.5905 7.89758 10.5953 7.89965C11.7225 8.38667 12.6309 9.22448 13.0006 10.4165C13.4695 11.9286 13.0568 13.5371 11.9827 14.6912C11.4682 15.244 10.8704 15.6796 10.1891 15.9979C9.2897 16.4182 8.27091 16.5728 7.28634 16.5953C6.18428 16.6205 5.07106 16.4586 4.05197 16.0316C3.06688 15.619 2.25508 14.9852 1.61655 14.1303C0.44157 12.5568 0.0701882 10.5293 0.0554816 8.60541C0.051147 8.03582 0.0928936 7.43316 0.180721 6.79742C0.378873 5.36314 0.854904 3.95595 1.75727 2.84057C3.14357 1.12701 5.21937 0.499425 7.35523 0.561812C8.35745 0.591071 9.35441 0.780244 10.2744 1.1846C12.1381 2.00399 13.3447 3.6838 13.8576 5.61733C13.8586 5.62136 13.8571 5.62394 13.8531 5.62507L12.5216 5.98004C12.5183 5.9809 12.5147 5.98043 12.5118 5.97871C12.5088 5.977 12.5067 5.9742 12.5058 5.97091C12.2792 5.13124 11.898 4.32594 11.3234 3.66274ZM5.7276 10.9402C6.23335 11.3958 7.04608 11.4563 7.67723 11.3117C8.78828 11.0571 9.10672 9.94634 9.18242 8.95156C9.18292 8.94516 9.18105 8.9388 9.17717 8.93369C9.17328 8.92858 9.16766 8.92508 9.16136 8.92385C8.46644 8.78731 7.76129 8.75062 7.06141 8.81239C6.47222 8.86456 5.73611 9.09754 5.47124 9.67729C5.27308 10.1106 5.37324 10.6208 5.7276 10.9402Z" fill="" />
                                    </motion.svg>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>@cliam_official</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>

                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger>
                                    <motion.svg
                                        variants={social3}
                                        initial="hidden"
                                        animate="show"
                                        className="fill-black dark:fill-white" width="17" height="17" viewBox="0 0 17 17" fill="" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.88265 0.548828C4.45834 0.548828 0.85791 4.14926 0.85791 8.57357C0.85791 12.9979 4.45834 16.5983 8.88265 16.5983C13.307 16.5983 16.9074 12.9979 16.9074 8.57357C16.9074 4.14926 13.307 0.548828 8.88265 0.548828ZM8.88265 1.88628C12.5841 1.88628 15.57 4.87216 15.57 8.57357C15.5716 10.1745 14.9975 11.7226 13.9525 12.9354C12.9076 14.1483 11.4613 14.9449 9.87772 15.1799V10.5236H11.7823L12.0812 8.58894H9.87772V7.53236C9.87772 6.72988 10.1419 6.01635 10.8928 6.01635H12.0999V4.32848C11.8879 4.29972 11.4392 4.23753 10.5912 4.23753C8.82046 4.23753 7.78259 5.17241 7.78259 7.30298V8.58894H5.96232V10.5236H7.78259V15.1632C6.22094 14.9062 4.80156 14.1023 3.77804 12.8951C2.75452 11.688 2.19356 10.1562 2.19536 8.57357C2.19536 4.87216 5.18124 1.88628 8.88265 1.88628Z" fill="" />
                                    </motion.svg>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>@cliam_official</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>

                    </motion.div>

                </SheetContent>
            </Sheet>
        </>
    )
};

export default MainNav;