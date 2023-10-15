"use client"

import { motion } from "framer-motion"
import { Button } from "../ui/button";
import { hero_section } from "@/types";

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

interface HeroSectionProps {
    data: hero_section
}

const HeroSection: React.FC<HeroSectionProps> = ({
    data
}) => {
    return (
        <>
            <motion.div className="pt-8 pl-6">
                <motion.h3
                    variants={one}
                    initial="hidden"
                    animate="show"
                    className=" w-96 mb-6 font-normal"
                >
                    {data?.label}
                </motion.h3>

                <motion.div
                    variants={two}
                    initial="hidden"
                    animate="show"
                >
                    <Button className="font-light">
                        products
                    </Button>
                </motion.div>

            </motion.div>


            <motion.img
                variants={three}
                initial="hidden"
                animate="show"
                className="w-full h-[60vh] object-cover aspect-square md:aspect-[2.4/1] overflow-hidden" src={data?.imageUrl} alt="hero-image" />
        </>
    );
}

export default HeroSection;