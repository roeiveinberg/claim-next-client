export interface hero_section {
    id: string
    label: string
    imageUrl: string
};

export interface Category {
    id: string
    name: string
    heroSection: hero_section;
}

export interface Product {
    id: string
    category: Category;
    name: string
    description: string;
    price: string
    mainImage: string
    isFeatured: boolean
    size: Size;
    color: Color;
    images: Image[];
}

export interface Image {
    id: string
    url: string
}

export interface Size {
    id: string
    name: string
    value: string
}

export interface Color {
    id: string
    name: string
    value: string

}