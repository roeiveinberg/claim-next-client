import getProduct from "@/actions/get-product";
import getProducts from "@/actions/get-products";
import ProductGallery from "@/components/product/Product-Gallery";
import { Heading } from "@/components/product/heading";
import { ProductInfo } from "@/components/product/product-info";
import RelatedProductst from "@/components/products/related-products-list";
import Currency from "@/components/ui/Currency";

interface ProductPageProps {
    params: {
        productId: string
    }
}

export const revalidate = 0;


const ProductPage: React.FC<ProductPageProps> = async ({
    params
}) => {

    const product = await getProduct(params.productId)
    const suggestedProducts = await getProducts({
        categoryId: product?.category?.id
    })

    return (
        <>
            <div className="flex flex-col text-center w-full h-full py-4">
                <Heading
                    title={product.name}
                    description={product.description}
                />
            </div>

            <div className="flex sm:flex-row flex-col w-full h-full px-6">

                <div className="flex w-[33%] max-sm:w-full">
                    <ProductInfo
                        data={product}
                    />
                </div>


                <div className="w-[67%] max-sm:w-full h-full py-10 px-4">
                    <ProductGallery images={product?.images} />
                </div>

            </div>
        </>
    );
}

export default ProductPage;