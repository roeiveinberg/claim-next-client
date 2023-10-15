'use client'
import Image from 'next/image'
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useAnimation, useInView } from 'framer-motion';


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


export default function ScrollText() {


    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    const mainControls = useAnimation()

    useEffect(() => {
        if (isInView) {
            mainControls.start("show")
        }
    }, [isInView]);



    // ------------------


    const firstText = useRef(null);
    const secondText = useRef(null);
    const slider = useRef(null);
    let xPercent = 0;
    let direction = -1;

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(slider.current, {
            scrollTrigger: {
                trigger: document.documentElement,
                scrub: 0.80,
                start: 0,
                end: window.innerHeight,
                onUpdate: e => direction = e.direction * -0.25
            },
            x: "-500px",
        })
        requestAnimationFrame(animate);
    }, [])

    const animate = () => {
        if (xPercent < -100) {
            xPercent = 0;
        }
        else if (xPercent > 0) {
            xPercent = -100;
        }
        gsap.set(firstText.current, { xPercent: xPercent })
        gsap.set(secondText.current, { xPercent: xPercent })
        requestAnimationFrame(animate);
        xPercent += 0.1 * direction;
    }

    return (
        <>
            <main className="main">
                <div className="sliderContainer">
                    <div ref={slider} className="slider">

                        <div ref={firstText} className=' div flex gap-7'>
                            <div className="bg-[#e8e8e8] dark:bg-[#393939] text-black dark:text-white flex items-center justify-center py-6 px-24 rounded-full">
                                <p>for trips</p>
                            </div>
                            <div className="bg-[#e8e8e8] dark:bg-[#393939] text-black dark:text-white flex items-center justify-center py-6 px-24 rounded-full">
                                <p>for camping</p>
                            </div>
                            <div className="bg-[#e8e8e8] dark:bg-[#393939] text-black dark:text-white flex items-center justify-center py-6 px-24 rounded-full">
                                <p>for travel</p>
                            </div>
                            <div className="bg-[#e8e8e8] dark:bg-[#393939] text-black dark:text-white flex items-center justify-center py-6 px-24 rounded-full">
                                <p>Jeep trips</p>
                            </div>
                            <div className="bg-[#e8e8e8] dark:bg-[#393939] text-black dark:text-white flex items-center justify-center py-6 px-24 rounded-full">
                                <p>in the desert</p>
                            </div>
                            <div className="bg-[#e8e8e8] dark:bg-[#393939] text-black dark:text-white flex items-center justify-center py-6 px-24 rounded-full">
                                <p>in the sea</p>
                            </div>
                        </div>

                        <div ref={secondText} className=' div flex gap-x-6'>
                            <div className="bg-[#e8e8e8] dark:bg-[#393939] text-black dark:text-white flex items-center justify-center py-6 px-24 rounded-full">
                                <p>for everything</p>
                            </div>
                            <div className="bg-[#e8e8e8] dark:bg-[#393939] text-black dark:text-white flex items-center justify-center py-6 px-24 rounded-full">
                                <p>for camping</p>
                            </div>
                            <div className="bg-[#e8e8e8] dark:bg-[#393939] text-black dark:text-white flex items-center justify-center py-6 px-24 rounded-full">
                                <p>for trips</p>
                            </div>
                            <div className="bg-[#e8e8e8] dark:bg-[#393939] text-black dark:text-white flex items-center justify-center py-6 px-24 rounded-full">
                                <p>Jeep trips</p>
                            </div>
                            <div className="bg-[#e8e8e8] dark:bg-[#393939] text-black dark:text-white flex items-center justify-center py-6 px-24 rounded-full">
                                <p>in the desert</p>
                            </div>
                            <div className="bg-[#e8e8e8] dark:bg-[#393939] text-black dark:text-white flex items-center justify-center py-6 px-24 rounded-full">
                                <p>in the sea</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

        </>
    )
}