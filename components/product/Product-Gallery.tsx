"use client"

import Image from "next/image";
import { Tab } from "@headlessui/react"

import { Image as ImageType } from "@/types"
import GalleryTab from "./gallery-tab";

interface GalleryProps {
    images: ImageType[]
}

export const revalidate = 0;


const ProductGallery: React.FC<GalleryProps> = ({
    images
}) => {
    return (
        <Tab.Group as="div" className="flex flex-row-reverse w-full justify-between items-center">
            <div className="">
                <Tab.List className="">
                    {images.map((image) => (
                        <GalleryTab key={image.id} image={image} />
                    ))}
                </Tab.List>
            </div>
            <Tab.Panels className="w-[480px] px-3">
                {images.map((image) => (
                    <Tab.Panel key={image.id}>
                        <div className=" aspect-square relative h-full w-full overflow-hidden">
                            <img
                                src={image.url}
                                alt="Image"
                                className=" object-contain object-center"
                            />
                        </div>
                    </Tab.Panel>
                ))}
            </Tab.Panels>
        </Tab.Group>
    );
}

export default ProductGallery;