type Product = {
    title: string,
    price: number
};

const data: Product[] = [
    { title: 'Produto X', price: 100 },
    { title: 'Produto Y', price: 11 },
    { title: 'Produto W', price: 12 },
    { title: 'Produto G', price: 15 }
];

export const Product = {
    getAll: (): Product[] => {
        return data;
    },
    getFromPriceAfter: (price: number): Product[] => {
        return data.filter(item => item.price >= price);
    }
};