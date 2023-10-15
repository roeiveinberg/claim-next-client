import Image from "next/image";
import { Tab } from "@headlessui/react";

import { cn } from "@/lib/utils";
import { Image as ImageType } from "@/types";

interface GalleryTabProps {
    image: ImageType

}

export const revalidate = 0;


const GalleryTab: React.FC<GalleryTabProps> = ({
    image
}) => {
    return (
        <Tab
            className="relative flex h-[80px] w-[60px] cursor-pointer items-center justify-center rounded-md"
        >
            {({ selected }) => (
                <div>
                    <span className="absolute h-full w-full inset-0 overflow-hidden rounded-xl">
                        <img
                            src={image.url}
                            alt=""
                            className="object-cover object-center p-1 rounded-xl"
                        />
                    </span>
                    {/* <span
                        className={cn(
                            'absolute inset-[-8px] rounded-md ring-1 ring-offset-0',
                            selected ? 'ring-black dark:ring-[white]' : 'ring-transparent',
                        )}
                    /> */}
                </div>
            )}
        </Tab>
    );
}

export default GalleryTab;