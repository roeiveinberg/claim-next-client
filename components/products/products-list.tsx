import { Product } from "@/types";
import NoResults from "../ui/no-results";
import Image from "next/image";
import ProductCard from "./product-card";

interface ProductsListProps {
    title: string
    description: string
    items: Product[];
}

export const revalidate = 0;

const ProductsList: React.FC<ProductsListProps> = ({
    title,
    description,
    items,
}) => {
    return (
        <div className='flex flex-col w-full pb-36'>
            <h5 className='text-center text-2xl pb-4'>{title}</h5>
            <p className=' text-center text-[#7a7a7aab] m-auto w-[520px]'>{description}</p>

            {items.length === 0 && <NoResults />}

            <div className='grid xl:grid-cols-4 grid-cols-2 gap-x-10 gap-y-2 px-10'>
                {items.map((item) => (
                    <ProductCard key={item.id} data={item} />

                ))}
            </div>
        </div>
    );
}

export default ProductsList;