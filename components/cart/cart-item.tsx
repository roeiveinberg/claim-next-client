import Image from "next/image";
import { toast } from "react-hot-toast";
import { X } from "lucide-react";

import Currency from "@/components/ui/Currency";
import useCart from "@/hooks/use-cart";
import { Product } from "@/types";


interface CartItemProps {
    data: Product;
}

const CartItem: React.FC<CartItemProps> = ({
    data
}) => {
    const cart = useCart();

    const onRemove = () => {
        cart.removeItem(data.id);
    };

    return (
        <li className="flex py-6">
            <div className="relative h-24 w-24 rounded-md overflow-hidden sm:h-38 sm:w-38">
                <Image
                    fill
                    src={data.mainImage}
                    alt=""
                    sizes="3500px"
                    className="object-cover object-center"
                />
            </div>
            <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                <div className="absolute z-10 right-0 top-0">
                    <X size={20} className=" cursor-pointer" onClick={onRemove} />
                </div>
                <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                    <div className="flex justify-between">
                        <p className=" text-lg font-medium">
                            {data.name}
                        </p>
                    </div>

                    <div className="mt-1 flex text-sm mb-4">
                        <p className="">{data.color.name}</p>
                        <p className="ml-4 border-l pl-4 ">{data.size.name}</p>
                    </div>
                    <Currency value={data.price} />
                </div>
            </div>
        </li>
    );
}

export default CartItem;