"use client"

import { Product } from "@/types";
import Currency from "../ui/Currency";
import { useRouter } from "next/navigation";
import usePreviewModal from "@/hooks/use-preview-modal";
import { MouseEventHandler } from "react";

interface ProductCardProps {
    data: Product
}

const ProductCard: React.FC<ProductCardProps> = ({
    data
}) => {

    const previewModal = usePreviewModal()
    const router = useRouter()
    const handleClick = () => {
        router.push(`/product/${data?.id}`)

    }
    const onPreview: MouseEventHandler<HTMLDivElement> = (event) => {
        event.stopPropagation();

        previewModal.onOpen(data)

    }


    return (
        <div
            onClick={handleClick}
            className='group flex flex-col mt-10 items-center cursor-pointer'>

            <div className="relative w-full overflow-hidden  h-[37vh] bg-[#e8e8e8] dark:bg-[#393939] rounded-3xl flex items-center justify-center px-6 py-4">
                <img src={data?.mainImage} alt="mainImage" width={170} height={200} />

                <div
                    onClick={onPreview}
                    className="absolute left-[20px] bottom-[-38px] opacity-0 group-hover:bottom-[20px] group-hover:opacity-100 transition-all">
                    <svg className=" hover:scale-110 stroke-black dark:stroke-white" width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 5C8.24261 5 5.43602 7.4404 3.76737 9.43934C2.51521 10.9394 2.51521 13.0606 3.76737 14.5607C5.43602 16.5596 8.24261 19 12 19C15.7574 19 18.564 16.5596 20.2326 14.5607C21.4848 13.0606 21.4848 10.9394 20.2326 9.43934C18.564 7.4404 15.7574 5 12 5Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>

            </div>

            <div className="flex flex-col w-full">
                <div className="flex justify-between items-center mt-4">
                    <p className=" text-md">{data.name}</p>
                    <Currency value={data?.price} />
                </div>
                <p className=" text-neutral-600 text-xs font-extralight">{data.category.name}</p>


                <div className="flex" onClick={() => { }}>
                    <div className="flex items-center mt-4 gap-x-2 border-[0.6px] border-neutral-600 rounded-full px-4 py-[6px]">
                        <svg className="stroke-black dark:stroke-white " width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="4.5" width="15" height="13" rx="2.16667" stroke="" />
                            <path d="M11.2068 2.15479C11.6221 2.51726 11.9473 2.94386 12.1677 3.40813C12.3597 3.81266 12.3106 4.07187 12.2239 4.2078C12.1365 4.34476 11.9197 4.5 11.4703 4.5H8H4.5297C4.08026 4.5 3.86346 4.34476 3.77612 4.2078C3.68944 4.07187 3.64031 3.81266 3.83231 3.40813C4.05266 2.94386 4.3779 2.51726 4.79323 2.15479C5.20868 1.79222 5.70544 1.50161 6.25656 1.30238C6.8077 1.10315 7.40029 1 8 1C8.59971 1 9.1923 1.10315 9.74344 1.30238C10.2946 1.50161 10.7913 1.79222 11.2068 2.15479Z" stroke="" />
                        </svg>
                        <p className="mt-1 text-sm">add to cart</p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default ProductCard;