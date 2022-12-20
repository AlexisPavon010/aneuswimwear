import { groq } from "next-sanity"

import { IProduct } from "../interfaces/Product"
import { Product } from "../models"
import { sanityClient } from "../sanity"
import { db } from "./"
import { SHOP_CONTANST } from "./constants"

export const getProductBySlug = async (slug: string): Promise<IProduct | null> => {
  const query = groq`
  *[slug.current == "${slug}"]{
    description,
    images[]{
      ...asset->{url}
    },
    price,
    sizes,
    stock,
    "slug": slug.current,
    title
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
  sort: Sort;
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
  sort: Sort;
  collection: string;
}

enum Sort {
  name_asc = 'name_asc',
  name_des = 'name_des',
  low_to_high = 'low-to-high',
  high_to_low = 'high-to-low',
  newest = 'newest'
}

export const getProductByTags = async (query: getProductByTagsProps) => {

  // await db.connect()

  // const [tag, params] = query.collection.substring(query.collection.lastIndexOf('/') + 1).split('?')

  // let condition = {};
  // let sort = {};

  // if (tag !== 'all' && SHOP_CONTANST.validTags.includes(`${tag}`)) {
  //   condition = { ...condition, tags: tag };
  // }

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

  // const products = await Product.find(condition).sort(sort)

  const term = groq`
  *[_type == "products"]{
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