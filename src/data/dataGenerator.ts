import {faker} from'@faker-js/faker';

export interface Product {
    productId: number;
    productName: string;
    productImg: string[];
    description: string;
    categoryID: number;
    city: string;
    closeDate: Date;
    shippingInfo: string;
    proStatus: string;
    oldPrice: string;
    currentPrice: string;

    shopName: string;
    condition: string;
    color: string;
    brand: string;

    fullDescription: string[];
    shippingPrice: ShippingPrice[];
    quantity: number;

}

interface ShippingPrice{
    destination: string;
    price: number;
}

export const generateData = (count: number, maxCategoryId: number): Product[] =>{
    const data: Product[] = [];
    for(let i = 0; i < count; i++){
        // const category = CateItem[Math.floor(Math.random() * CateItem.length)];
        data.push({
            productId: i+=1,
            productName: faker.commerce.product(),
            productImg: Array.from({length:5}, () =>
            faker.image.urlLoremFlickr(),
            ),
            description: faker.commerce.productDescription(),
            categoryID: faker.number.int({ min: 1, max: maxCategoryId }),
            // categoryID: category;
            city: faker.location.city(),
            closeDate: faker.date.future(),
            shippingInfo: faker.word.noun(),
            proStatus: faker.word.noun(),
            oldPrice: faker.commerce.price(),
            currentPrice: faker.commerce.price(),

            shopName: faker.company.name(),
            condition: faker.word.noun(),
            color: faker.color.human(),
            brand: faker.company.name(),

            fullDescription: Array.from({length:3}, () =>
            faker.lorem.paragraphs(),
            ),
            shippingPrice: Array.from({length:7},() =>
           ({ destination: faker.location.city(), 
            price: Number(faker.commerce.price())})),
            quantity: 1

        });
    }
    return data;
};