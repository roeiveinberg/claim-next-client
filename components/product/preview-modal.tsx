"use client";

import usePreviewModal from "@/hooks/use-preview-modal";
import { Modal } from "../modal/modal";
import ProductGallery from "./Product-Gallery";
import { ProductInfo } from "./product-info";


const PreviewModal = () => {
    const previewModal = usePreviewModal();
    const product = usePreviewModal((state) => state.data);

    if (!product) {
        return null;
    }

    return (
        <Modal
            title=""
            description=""
            isOpen={previewModal.isOpen}
            onClose={previewModal.onClose}
        >
            <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
                <div className="sm:col-span-8 lg:col-span-7">
                    <ProductInfo data={product} />
                </div>
                <div className="sm:col-span-4 lg:col-span-5">
                    <ProductGallery images={product.images} />
                </div>
            </div>
        </Modal>
    );
}

export default PreviewModal