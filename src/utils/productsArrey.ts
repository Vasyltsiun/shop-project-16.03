export type Product = {
    id: number
    title: string
    description: string
    type: string
    capacity: string
    price: number
    image: string
}

export const productsArrey: Product[] = [
    {
        id: 1,
        title: 'iPhone 15',
        description: 'This is iPhone 15',
        type: 'phone',
        capacity: '64',
        price: 1000,
        image: 'images/iPhone_green.webp',
    },

    {
        id: 2,
        title: 'iPhone 14',
        description: 'This is iPhone 14',
        type: 'phone',
        capacity: '64',
        price: 500,
        image: 'images/iPhone_black.webp',
    },

    {
        id: 12,
        title: 'iPhone 13',
        description: 'This is iPhone 13',
        type: 'phone',
        capacity: '64',
        price: 300,
        image: 'images/iPhone_blue.webp',
    },

    {
        id: 4,
        title: 'iPhone 14 Pro',
        description: 'This is iPhone 14 Pro',
        type: 'phone',
        capacity: '64',
        price: 1500,
        image: 'images/iPhone_grey.webp',
    },

    {
        id: 15,
        title: 'iPhone 12 Pro',
        description: 'This is iPhone 12 Pro',
        type: 'phone',
        capacity: '64',
        price: 600,
        image: 'images/iPhone_red.webp',
    },

    {
        id: 6,
        title: 'iPhone 11',
        description: 'This is iPhone 11',
        type: 'phone',
        capacity: '64',
        price: 700,
        image: 'images/iPhone_white.webp',
    },
]

export const getProductObject = (array: Product[]) =>
    array.reduce(
        (obj, product) => ({
            ...obj,
            [product.id]: product,
        }),
        {}
    )
