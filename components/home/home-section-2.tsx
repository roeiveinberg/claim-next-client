"use client"

import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion"
import Link from "next/link";


const one = {
    hidden: {
        opacity: 0,
        x: -8,
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            delay: 0.4,
            duration: 0.7
        },
    },
}

const two = {
    hidden: {
        opacity: 0,
        x: -8,
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            delay: 0.5,
            duration: 0.7
        },
    },
}

const three = {
    hidden: {
        opacity: 0,
        x: -8,
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            delay: 0.6,
            duration: 0.7
        },
    },
}

const Section2 = () => {

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    const mainControls = useAnimation()

    useEffect(() => {
        if (isInView) {
            mainControls.start("show")
        }
    }, [isInView]);

    return (
        <>
            <motion.div
                className="lg:pl-14 md:pl-12 pl-6 pb-10">
                <motion.div
                    ref={ref}
                    variants={one}
                    initial="hidden"
                    animate={mainControls}
                    className=" mt-20 inline-block bg-[#e8e8e8] dark:bg-[#393939] rounded-full px-6 py-4">
                    <div className="flex gap-x-4">
                        <h6 className=" font-semibold">categories:</h6>
                        <p className="font-thin">tents</p>
                        <p className="font-thin">ropes</p>
                        <p className="font-thin">pocketknives</p>
                    </div>
                </motion.div>

                <motion.div
                    variants={two}
                    initial="hidden"
                    animate={mainControls}
                    className="mt-16">
                    <p className=" text-2xl font-extralight max-w-[750px]">
                        we are claim! a travel shop are claim travel shop shop are claimareclaim! a travel  we are shop are claim shop are claim
                        <Link href={"/store"} className=" text-[#FFB500] pl-3  inline-flex items-center gap-x-3">
                            store now
                            <svg className="pt-[2px] fill-black dark:fill-white" width="17" height="12" viewBox="0 0 17 12" fill="" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M0 5.78599C0 5.62498 0.0639625 5.47056 0.177817 5.35671C0.291671 5.24285 0.44609 5.17889 0.607104 5.17889H14.9263L11.1051 1.35899C10.9912 1.24499 10.9271 1.09038 10.9271 0.92916C10.9271 0.767943 10.9912 0.613328 11.1051 0.49933C11.2191 0.385332 11.3738 0.321289 11.535 0.321289C11.6962 0.321289 11.8508 0.385332 11.9648 0.49933L16.8216 5.35616C16.8782 5.41256 16.923 5.47955 16.9536 5.55331C16.9842 5.62707 17 5.70614 17 5.78599C17 5.86585 16.9842 5.94492 16.9536 6.01867C16.923 6.09243 16.8782 6.15943 16.8216 6.21582L11.9648 11.0727C11.8508 11.1867 11.6962 11.2507 11.535 11.2507C11.3738 11.2507 11.2191 11.1867 11.1051 11.0727C10.9912 10.9587 10.9271 10.804 10.9271 10.6428C10.9271 10.4816 10.9912 10.327 11.1051 10.213L14.9263 6.3931H0.607104C0.44609 6.3931 0.291671 6.32913 0.177817 6.21528C0.0639625 6.10143 0 5.94701 0 5.78599Z" fill="" />
                            </svg>
                        </Link>
                    </p>
                </motion.div>

                <motion.div
                    variants={three}
                    initial="hidden"
                    animate={mainControls}
                    className="flex items-center gap-x-3 mt-16">
                    <p>Available now in Australia</p>
                    <svg className=" fill-black dark:fill-white" width="12" height="15" viewBox="0 0 12 15" fill="" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.89293 8.5715C5.36316 8.5715 4.84528 8.4144 4.40479 8.12008C3.9643 7.82575 3.62099 7.40742 3.41825 6.91797C3.21552 6.42853 3.16247 5.88996 3.26582 5.37037C3.36918 4.85077 3.62429 4.3735 3.99889 3.99889C4.3735 3.62429 4.85077 3.36918 5.37037 3.26582C5.88996 3.16247 6.42853 3.21552 6.91797 3.41825C7.40742 3.62099 7.82575 3.9643 8.12008 4.40479C8.4144 4.84528 8.5715 5.36316 8.5715 5.89293C8.57065 6.60307 8.28817 7.28388 7.78603 7.78603C7.28388 8.28817 6.60307 8.57065 5.89293 8.5715ZM5.89293 4.28579C5.57507 4.28579 5.26434 4.38004 5.00005 4.55664C4.73575 4.73323 4.52976 4.98423 4.40812 5.2779C4.28648 5.57157 4.25465 5.89471 4.31667 6.20647C4.37868 6.51822 4.53174 6.80459 4.75651 7.02935C4.98127 7.25411 5.26764 7.40718 5.57939 7.46919C5.89115 7.5312 6.21429 7.49938 6.50796 7.37773C6.80162 7.25609 7.05262 7.0501 7.22922 6.78581C7.40581 6.52152 7.50007 6.21079 7.50007 5.89293C7.49965 5.46682 7.33019 5.05828 7.02888 4.75698C6.72757 4.45567 6.31904 4.28621 5.89293 4.28579Z" fill="" />
                        <path d="M5.89286 15L1.37358 9.67018C1.31078 9.59015 1.24864 9.50961 1.18715 9.42857C0.415174 8.41167 -0.00186492 7.16958 6.2694e-06 5.89286C6.2694e-06 4.32997 0.620859 2.8311 1.72598 1.72598C2.83111 0.620853 4.32998 0 5.89286 0C7.45575 0 8.95462 0.620853 10.0597 1.72598C11.1649 2.8311 11.7857 4.32997 11.7857 5.89286C11.7876 7.169 11.3707 8.41053 10.5991 9.42696L10.5986 9.42857C10.5986 9.42857 10.4379 9.63964 10.4138 9.66804L5.89286 15ZM2.04215 8.78304C2.04322 8.78304 2.16751 8.94804 2.1959 8.98339L5.89286 13.3436L9.59465 8.9775C9.61822 8.94804 9.74358 8.78196 9.74411 8.78143C10.3747 7.9506 10.7155 6.93591 10.7143 5.89286C10.7143 4.61413 10.2063 3.38779 9.30213 2.48359C8.39793 1.5794 7.17159 1.07143 5.89286 1.07143C4.61414 1.07143 3.38779 1.5794 2.4836 2.48359C1.57941 3.38779 1.07143 4.61413 1.07143 5.89286C1.07031 6.93656 1.41096 7.95183 2.04215 8.78304Z" fill="" />
                    </svg>
                </motion.div>
            </motion.div>
        </>
    );
}

export default Section2;