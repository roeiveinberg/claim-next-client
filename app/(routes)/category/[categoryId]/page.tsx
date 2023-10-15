import getCategory from "@/actions/get-category";
import getColors from "@/actions/get-colors";
import getProducts from "@/actions/get-products";
import getSizes from "@/actions/get-sizes";
import Filters from "./components/filters";
// import ScrollText2 from "./components/scroll-text2";
import ProductsListShop from "@/components/products/products-list-shop";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

export const revalidate = 0;

interface CategoryPageProps {
    params: {
        categoryId: string
    },
    searchParams: {
        colorId: string,
        sizeId: string,
    }
}

const CategoryPage: React.FC<CategoryPageProps> = async ({
    params,
    searchParams,
}) => {

    const products = await getProducts({
        categoryId: params.categoryId,
        colorId: searchParams.colorId,
        sizeId: searchParams.sizeId,
    });

    const sizes = await getSizes()
    const colors = await getColors()
    const category = await getCategory(params.categoryId)

    // ------------

    return (
        <>
            <div>
            </div>

            <div className="relative w-full mb-6">
                <img className=" object-center w-full h-[45vh] mt-[-80px] object-cover" src="/cover.png" alt="no" />
                <div className="mt-[-180px] flex items-center justify-center">
                    <h1 className=" text-4xl uppercase">{category?.name}</h1>
                </div>
            </div>

            <div>
                <Sheet>
                    <SheetTrigger className="w-full">

                        <div className="flex mt-44 max-sm:mt-28 items-center justify-center w-full">
                            <div className="max-sm:fixed z-50 bottom-10 flex border-[0.6px] rounded-full px-4 py-[5px] backdrop-blur-md items-center justify-center gap-x-2">
                                <p>filters</p>
                                <svg className=" stroke-black dark:stroke-white" width="24" height="13" viewBox="0 0 24 13" fill="" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1H23ZM4.92857 6.68965H19.0714ZM9.64286 12.3793H14.3571Z" fill="" />
                                    <path d="M1 1H23M4.92857 6.68965H19.0714M9.64286 12.3793H14.3571" stroke="" strokeWidth="1.08621" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>

                    </SheetTrigger>
                    <SheetContent className=" border-0">

                        <SheetHeader className="">
                            <SheetTitle className="font-medium">
                                filters
                            </SheetTitle>
                        </SheetHeader>
                        <Filters
                            name="select size"
                            valueKey="sizeId"
                            data={sizes}
                        />
                        <Filters
                            name="select color"
                            valueKey="colorId"
                            data={colors}
                        />

                    </SheetContent>
                </Sheet>
            </div>


            <ProductsListShop
                title=""
                description=""
                items={products} />

        </>
    );
}

export default CategoryPage;