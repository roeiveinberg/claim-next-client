"use client"

import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion"
import Link from "next/link";
import Image from "next/image";


const one = {
    hidden: {
        opacity: 0,
        y: 10,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.6,
            duration: 0.7
        },
    },
}

const two = {
    hidden: {
        opacity: 0,
        y: 10,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.7,
            duration: 0.7
        },
    },
}

const three = {
    hidden: {
        opacity: 0,
        y: 10,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.8,
            duration: 0.7
        },
    },
}

const four = {
    hidden: {
        opacity: 0,
        y: 10,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.9,
            duration: 0.7
        },
    },
}


const Section3 = () => {

    const ref = useRef(null)
    const isInView = useInView(ref)

    const mainControls = useAnimation()

    useEffect(() => {
        if (isInView) {
            mainControls.start("show")
        }
    }, [isInView]);

    return (
        <>

            <motion.div
                className="grid xl:grid-cols-4 grid-cols-2 gap-x-4 gap-y-4 cursor-pointer mt-10">

                <motion.div
                    ref={ref}
                    variants={one}
                    initial="hidden"
                    animate={mainControls}
                    className="relative">
                    <img className=" h-[50vh] w-[50vw] object-cover" src="view.jpg" alt="tent-image" />
                </motion.div>

                <motion.div
                    variants={two}
                    initial="hidden"
                    animate={mainControls}
                    className="relative">
                    <img className=" h-[50vh] w-[50vw] object-cover" src="snow-image.jpg" alt="tent-image" />
                </motion.div>

                <motion.div
                    variants={three}
                    initial="hidden"
                    animate={mainControls}
                    className="relative">
                    <img className=" h-[50vh] w-[50vw] object-cover" src="trak.jpg" alt="tent-image" />
                </motion.div>

                <motion.div
                    variants={four}
                    initial="hidden"
                    animate={mainControls}
                    className="relative">
                    <img className=" h-[50vh] w-[50vw] object-cover" src="explore.jpg" alt="tent-image" />
                </motion.div>

            </motion.div>

        </>

    );
}

export default Section3;