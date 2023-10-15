"use client";

import axios from "axios";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

import Currency from "@/components/ui/Currency";
import useCart from "@/hooks/use-cart";
import { toast } from "react-hot-toast";
import { Button } from "../ui/button";

const Summary = () => {
    const searchParams = useSearchParams();
    const items = useCart((state) => state.items);
    const removeAll = useCart((state) => state.removeAll);

    useEffect(() => {
        if (searchParams.get('success')) {
            toast.success('Payment completed.');
            removeAll();
        }

        if (searchParams.get('canceled')) {
            toast.error('Something went wrong.');
        }
    }, [searchParams, removeAll]);

    const totalPrice = items.reduce((total, item) => {
        return total + Number(item.price)
    }, 0);

    const onCheckout = async () => {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/checkout`, {
            productIds: items.map((item) => item.id)
        });

        window.location = response.data.url;
    }

    return (
        <div className="flex items-center justify-between w-full">
            <div className="">
                <div className="flex items-center">
                    <div className="text-base font-medium">
                        Order total
                        <Currency value={totalPrice} />
                    </div>
                </div>
            </div>
            <div>
                <Button disabled={items.length === 0} onClick={onCheckout} className="">
                    Checkout
                </Button>
            </div>
        </div>
    );
}

export default Summary;