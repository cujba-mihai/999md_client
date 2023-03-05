export type GetCategoryByNameAndSubcategoryResponse = {
    data: Data;
}

export type Data = {
    getCategoryByNameAndSubcategory: GetCategoryByNameAndSubcategory;
}

export type GetCategoryByNameAndSubcategory = {
    _id:           string;
    name:          string;
    subcategories: Subcategory[];
}

export type Subcategory = {
    childSubcategories: ChildSubcategory[];
}

export type ChildSubcategory = {
    _id:   string;
    name: string;
}


export type GetProductsBySubcategoryQueryResponse = {
    data: ProductsData;
}

export type ProductsData = {
    getProductsBySubcategory: GetProductsBySubcategory[];
}

export type GetProductsBySubcategory = {
    _id:          string;
    currency:    string;
    description: string;
    name:        string;
    price:       number;
    thumbnail:   string;
}
