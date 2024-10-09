export interface FavSeller{
    // favId: string;
    userId: string;
    shopId: string;

}

export interface FavSearch{
    favId: string;
    userId: string;
    keyword: string;
    categoryId: string;

}
export interface FavCate{
    favId: string;
    userId: string;
    cateId: string;
    breadcrump: string;
}

export interface Seller{
    shopname: string;
    img: string;
    stars: number;
}
export interface Search{
    title:string;
    cate: string;
    type: string;

}
export interface Category{
    cate: string;
    address: string;
    type: string;
}