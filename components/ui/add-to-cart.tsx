"use client"

const AddToCart = () => {
    return (
        <>
            <div className="flex cursor-pointer">
                <div className="flex items-center mt-4 gap-x-2 border-[0.6px] border-neutral-600 rounded-full px-4 py-[6px]">
                    <svg className="stroke-black dark:stroke-white " width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="4.5" width="15" height="13" rx="2.16667" stroke="" />
                        <path d="M11.2068 2.15479C11.6221 2.51726 11.9473 2.94386 12.1677 3.40813C12.3597 3.81266 12.3106 4.07187 12.2239 4.2078C12.1365 4.34476 11.9197 4.5 11.4703 4.5H8H4.5297C4.08026 4.5 3.86346 4.34476 3.77612 4.2078C3.68944 4.07187 3.64031 3.81266 3.83231 3.40813C4.05266 2.94386 4.3779 2.51726 4.79323 2.15479C5.20868 1.79222 5.70544 1.50161 6.25656 1.30238C6.8077 1.10315 7.40029 1 8 1C8.59971 1 9.1923 1.10315 9.74344 1.30238C10.2946 1.50161 10.7913 1.79222 11.2068 2.15479Z" stroke="" />
                    </svg>
                    <p className="mt-1 text-sm">add to cart</p>
                </div>
            </div>
        </>
    );
}

export default AddToCart;