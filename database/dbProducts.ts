import { groq } from "next-sanity"

import { IProduct } from "../interfaces/Product"
import { sanityClient } from "../sanity"
import { SHOP_CONTANST } from "./constants"

interface ProductSlug {
  slug: string;
}

interface ProductByTypeProps {
  size: string;
  color: string;
  sort: ESort;
  type: string;
}

interface getProductByGenderProps {
  size: string;
  sort: ESort;
  gender: string;
}

interface ProductByCategoriesProps {
  size: string;
  color: string;
  sort: ESort;
  category: string;
}

interface getProductByTermProps {
  size: string;
  color: string;
  sort: ESort;
  search: string;
}

interface ProductByCollectionProps {
  size: string;
  color: string;
  sort: ESort;
  collection: string;
}

enum ESort {
  title_asc = 'title asc',
  title_des = 'title desc',
  low_to_high = 'price asc',
  high_to_low = 'price desc',
}

export const getProductBySlug = async (slug: string): Promise<IProduct | null> => {
  const query = groq`
  *[slug.current == "${slug}"]{
    _id,
    description,
    images[]{
      ...asset->{url}
    },
    price,
    sizes,
    inStock,
    gender,
    "slug": slug.current,
    title,
    colors[]{
      ...asset->{url}
    },
  }
  `
  const pageInfo = await sanityClient.fetch(query)

  if (!pageInfo) {
    return null
  }

  return JSON.parse(JSON.stringify(pageInfo[0]))
}

export const getAllProductSlug = async (): Promise<ProductSlug[]> => {
  const query = groq`
  *[_type == "products"]{
    "slug": slug.current
  }
  `
  const pageInfo = await sanityClient.fetch(query)

  return pageInfo;
}

export const getAllProductByGender = async (gender: string) => {
  const query = groq`
  *[_type == "products" && gender == "${gender}"]{
    "slug": slug.current,
    title,
    gender,
    price,
    images[]{
      ...asset->{url}
    },
  }
  `
  const pageInfo = await sanityClient.fetch(query)
  return JSON.parse(JSON.stringify(pageInfo));
}

export const getProductByTerm = async (query: getProductByTermProps) => {
  const { search, sort } = query;
  const [tag, params] = search.substring(search.lastIndexOf('/') + 1).split('?')

  // @ts-ignore 
  const sortExpression = ESort[sort] || 'title asc';

  const term = groq`
    *[_type == "products" && title match "${tag}" + "*"  ]
    ${sort ? `| order(${sortExpression})` : ''} 
    {
      "slug": slug.current,
      title,
      price,
      images[]{
          ...asset->{url}
        },
    }
    `
  const pageInfo = await sanityClient.fetch(term)

  return JSON.parse(JSON.stringify(pageInfo));
}

export const getProductByType = async (query: ProductByTypeProps) => {
  const { type, sort } = query
  let term = '*[_type == "products"]';
  const [tag, params] = type.substring(type.lastIndexOf('/') + 1).split('?')

  const validations = [...SHOP_CONTANST.validTypes];

  // @ts-ignore 
  const sortExpression = ESort[sort] || 'title asc';

  if (validations.includes(tag)) {
    term = groq`
    *[_type == "products" && type[0] == '${tag}']
    ${sort ? `| order(${sortExpression})` : ''} 
      { 
        "slug": slug.current,
        title,
        price,
        images[]{
          ...asset->{url}
        },
    }
    `
  }

  const pageInfo = await sanityClient.fetch(term)
  return JSON.parse(JSON.stringify(pageInfo));
}

export const getProductByGender = async (query: getProductByGenderProps) => {
  const { gender, sort, size } = query;
  let term = '*[_type == category]';

  const validTags = [...SHOP_CONTANST.validGeenders, 'all'];

  // @ts-ignore 
  const sortExpression = ESort[sort] || 'title asc';

  if (validTags.includes(gender)) {
    term = groq`
    *[][0]{
      "products": *[_type == "products" && gender == '${gender}'] 
      ${sort ? `| order(${sortExpression})` : ''} 
      {    
        "slug": slug.current,
        title,
        price,
        images[]{
          ...asset->{url}
        },
      }
    }
    `
  }

  const pageInfo = await sanityClient.fetch(term);
  return JSON.parse(JSON.stringify(pageInfo));
};

export const getProductByCategories = async (query: ProductByCategoriesProps) => {
  const { category, sort } = query;

  // @ts-ignore 
  const sortExpression = ESort[sort] || 'title asc';

  let term = '*[_type == category]'

  term = `*[_type == 'category' && slug.current == '${category}'][0]
  ${sort ? `| order(${sortExpression})` : ''} 
 {
   products[]-> {
     "slug": slug.current,
     title,
     price,
     images[]{
       ...asset->{url}
     },
   },
 }
`;

  const pageInfo = await sanityClient.fetch(term)

  return JSON.parse(JSON.stringify({
    products: pageInfo.products.filter((el: any) => el !== null)
  }));
}

export const getProductByCollection = async (query: ProductByCollectionProps) => {
  const { collection, sort } = query;

  // @ts-ignore 
  const sortExpression = ESort[sort] || 'title asc';

  let term = '*[_type == collections]'

  if (collection == 'all') {
    term = `
    *[][0]{
      "products": *[_type == "products"]
      ${sort ? `| order(${sortExpression})` : ''}  
      {    
        "slug": slug.current,
          title,
          price,
          images[]{
            ...asset->{url}
          },
      }
    }`
  } else {

    term = `*[_type == 'collections' && slug.current == '${collection}'][0]
      ${sort ? `| order(${sortExpression})` : ''}  
      {
        products[]-> {
          "slug": slug.current,
          title,
          price,
          images[]{
            ...asset->{url}
          },
        },
      }
  `;
  }


  const pageInfo = await sanityClient.fetch(term)

  return JSON.parse(JSON.stringify({
    products: pageInfo.products.filter((el: any) => el !== null) || []
  }));

}