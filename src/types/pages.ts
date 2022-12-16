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
    category: string;
    subcategories: string[];
}

export interface IProductAddProps {
    category: string;
    subcategory: string;
    categories: string[];
    subcategories: string[];
}

export interface ICategoryAddProps {
    categories: string[];
}