'use client'


import { Product } from '@/types';
import ProductsListShop from '../products/products-list-shop';


interface ProductsDataProps {
    data: Product[]
}


const Section6: React.FC<ProductsDataProps> = ({
    data
}) => {

    return (
        <>
            <div>
                <ProductsListShop
                    title='featured products'
                    description='we are claim! a travel shop are claim travel shop shop are claim'
                    items={data} />
            </div>
        </>
    )
}
export default Section6;