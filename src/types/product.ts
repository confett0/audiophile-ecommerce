import type { Category } from "./category";

export type Product = {
  id: number;
  slug: string;
  name: string;
  shortName: string;
  image: ResponsiveImage;
  category: Category;
  categoryImage: ResponsiveImage;
  new: boolean;
  price: number;
  description: string;
  features: string;
  includes: {
    quantity: number;
    item: string;
  }[];
  gallery: {
    first: ResponsiveImage;
    second: ResponsiveImage;
    third: ResponsiveImage;
  };
  others: RelatedProduct[];
};

type ResponsiveImage = {
  mobile: string;
  tablet: string;
  desktop: string;
};

type RelatedProduct = {
  slug: string;
  name: string;
  image: ResponsiveImage;
};
