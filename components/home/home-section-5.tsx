'use client'
import Image from 'next/image'
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

export default function Section5() {


    return (
        <>
            <div className='flex flex-col w-full pb-36'>
                <h5 className='text-center text-2xl pb-4'>Explore the featured products</h5>
                <p className=' text-center text-[#7a7a7aab] m-auto w-[520px]'>we are claim! a travel shop are claim travel shop shop are claimare claim! a travel  we are shop are claim shop are claim</p>
                <div className='w-[90%] h-[75vh] bg-[#e8e8e8] dark:bg-[#393939] rounded-3xl m-auto mt-8'></div>
            </div>
        </>
    )
}