import { Product } from "@/types";
import NoResults from "../ui/no-results";
import ProductCardShop from "./product-card-shop";

interface ProductsListProps {
    title: string
    description: string
    items: Product[];
}

export const revalidate = 0;

const ProductsListShop: React.FC<ProductsListProps> = ({
    title,
    description,
    items,
}) => {
    return (
        <div className='flex flex-col w-full pb-10'>
            <h5 className='text-center text-2xl pb-4'>{title}</h5>
            <p className=' text-center text-[#7a7a7aab] m-auto w-[520px]'>{description}</p>

            {items.length === 0 && <NoResults />}

            <div className='grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-x-6 gap-y-2 px-6'>
                {items.map((item) => (
                    <ProductCardShop key={item.id} data={item} />

                ))}
            </div>
        </div>
    );
}

export default ProductsListShop;