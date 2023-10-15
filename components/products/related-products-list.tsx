import { Product } from "@/types";
import NoResults from "../ui/no-results";
import Image from "next/image";
import RelatedProductCard from "./related-product-card";

interface RelatedProductstProps {
    title: string
    description: string
    items: Product[];
}

const RelatedProductst: React.FC<RelatedProductstProps> = ({
    title,
    description,
    items,
}) => {
    return (
        <div className='flex flex-col w-full'>
            <h5 className='text-center text-2xl'>{title}</h5>
            <p className=' text-center text-[#7a7a7aab] m-auto w-[520px]'>{description}</p>

            {items.length === 0 && <NoResults />}

            <div className='grid xl:grid-cols-4 grid-cols-2 gap-x-10 gap-y-2 px-10'>
                {items.map((item) => (
                    <RelatedProductCard key={item.id} data={item} />

                ))}
            </div>
        </div>
    );
}

export default RelatedProductst;