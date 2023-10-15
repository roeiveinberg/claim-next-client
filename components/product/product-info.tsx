import { Product } from "@/types"
import AddToCart from "@/components/ui/add-to-cart"
import Currency from "@/components/ui/Currency"

interface ProductInfoProps {
    data: Product
};

export const ProductInfo: React.FC<ProductInfoProps> = ({
    data
}) => {


    return (
        <div className="mb-10 flex flex-col">
            <h2 className=" font-normal text-xs text-[#FFB502] mb-2">new</h2>
            <p className=" font-light text-[18px] mb-6 p-0"><Currency value={data?.price} /></p>
            <p className=" font-light text-[20px] tracking-wide text-gray-500">{data?.description}</p>
            <div className="mt-14">
                <AddToCart />
            </div>
        </div>
    )
}