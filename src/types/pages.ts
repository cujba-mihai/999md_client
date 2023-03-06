// Pages
// Advertising -> new -> ...
//

export interface ISubcategory {
    name: string;
}

export interface ICategory extends ISubcategory {
    icon: string;
}

export interface ISubcategoryAddProps {
    params: {
        subcategories: Subcategory[];
    }
}

export interface IProductAddProps {
    category: string;
    subcategory: string;
    categories: string[];
    subcategories: string[];
}

export type TCategoryAdd = {
        _id: string;
        name: string;
}

export interface ICategoriesAddProps {
    categories: TCategoryAdd[]
}

export interface ICategoryAddProps {
    params: {
        categories: TCategoryAdd[];
    }
}

export type GetCategoryByNameResponse = {
    data: Data;
}

export type Data = {
    getCategoryByName: GetCategoryByName;
}

export type GetCategoryByName = {
    _id:            string;
    name:          string;
    subcategories: Subcategory[];
}

export type Subcategory = {
    _id:                 string;
    name:               string;
    childSubcategories: ChildSubcategory[];
}

export type ChildSubcategory = {
    _id:   string;
    name: string;
}
