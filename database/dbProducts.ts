import { groq } from "next-sanity"

import { IProduct } from "../interfaces/Product"
import { sanityClient } from "../sanity"
import { SHOP_CONTANST } from "./constants"

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

interface ProductSlug {
  slug: string;
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
  *[_type == "products"]{
    "slug": slug.current,
    title,
    price,
    images[]{
        ...asset->{url}
      },
  }
  `
  const pageInfo = await sanityClient.fetch(query)
  return JSON.parse(JSON.stringify(pageInfo));
}

interface getProductByTermProps {
  size: string;
  color: string;
  sort: ESort;
  search: string;
}

export const getProductByTerm = async (query: getProductByTermProps) => {
  const [tag, params] = query.search.substring(query.search.lastIndexOf('/') + 1).split('?')


  // let condition = {}
  // let sort = {}

  // if (SHOP_CONTANST.validSize.includes(`${query.size}`)) {
  //   condition = { ...condition, sizes: query.size };
  // }

  // if (query.sort === 'name_asc') {
  //   sort = { title: 1 }
  // }

  // if (query.sort === 'name_des') {
  //   sort = { title: -1 }
  // }

  // if (query.sort === 'low-to-high') {
  //   sort = { price: 1 }
  // }

  // if (query.sort === 'high-to-low') {
  //   sort = { price: -1 }
  // }

  // const products = await Product.find({
  //   $text: { $search: (tag as string).split('?')[0] }
  // })
  //   .sort(sort)
  //   .lean()

  const term = groq`
    *[_type == "products" && title match "${tag}" + "*"  ]{
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

interface getProductByTagsProps {
  size: string;
  color: string;
  sort: ESort;
  collection: string;
}

enum ESort {
  name_asc = 'name_asc',
  name_des = 'name_des',
  low_to_high = 'low-to-high',
  high_to_low = 'high-to-low',
  newest = 'newest'
}

export const getProductByTags = async (query: getProductByTagsProps) => {
  const [tag, params] = query.collection.substring(query.collection.lastIndexOf('/') + 1).split('?')

  let term = '*[_type == category]'

  if (tag !== 'all' && !SHOP_CONTANST.validCollections.includes(tag)) {
    term = groq`
      *[_type == 'collections' && slug.current == '${tag}'][0]{
        products[]-> {
          "slug": slug.current,
          title,
          price,
          images[]{
            ...asset->{url}
          },
        },
      }`
  }

  if (tag == 'all') {
    term = groq`
    *[][0]{
      "products": *[_type == "products"]{    
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

  if (tag == 'new') {
    term = groq`
    *[][0]{
      "products": *[_type == "products" && gender == 'new']{    
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

  if (tag == 'sale') {
    term = groq`
    *[][0]{
      "products": *[_type == "products" && gender == 'sale']{    
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

  if (query.sort === ESort.name_asc) {
    term = groq`
    *[][0]{
      "products": *[_type == "products"] | order(title asc){    
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

  if (query.sort === ESort.name_des) {
    term = groq`
    *[][0]{
      "products": *[_type == "products"] | order(title desc){    
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

  if (query.sort === ESort.low_to_high) {
    term = groq`
    *[][0]{
      "products": *[_type == "products"] | order(price asc){    
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

  if (query.sort === ESort.high_to_low) {
    term = groq`
    *[][0]{
      "products": *[_type == "products"] | order(price desc){    
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

  const pageInfo = await sanityClient.fetch(term)

  return JSON.parse(JSON.stringify(pageInfo));
}


export const getProductByCategories = async (path: { categories: string, size?: string, sort?: string }) => {
  const [slug, params] = path.categories.substring(path.categories.lastIndexOf('/') + 1).split('?')
  let term = '*[_type == category]'

  if (slug !== 'all' && SHOP_CONTANST.validTags.includes(slug)) {

    term = groq`
    *[_type == 'category' && slug.current == '${slug}'][0]{
      products[]-> {
        "slug": slug.current,
        title,
        price,
        images[]{
            ...asset->{url}
          },
      },
    }`
  }

  if (path.sort === ESort.name_asc) {
    term = groq`
    *[][0]{
      "products": *[_type == "products"] | order(title asc){    
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

  if (path.sort === ESort.name_des) {
    term = groq`
    *[][0]{
      "products": *[_type == "products"] | order(title desc){    
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

  if (path.sort === ESort.low_to_high) {
    term = groq`
    *[][0]{
      "products": *[_type == "products"] | order(price asc){    
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

  if (path.sort === ESort.high_to_low) {
    term = groq`
    *[][0]{
      "products": *[_type == "products"] | order(price desc){    
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

  const pageInfo = await sanityClient.fetch(term)

  return JSON.parse(JSON.stringify(pageInfo));
}