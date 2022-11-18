import { IProduct } from "../interfaces/Product"
import { Product } from "../models"
import { db } from "./"
import { SHOP_CONTANST } from "./constants"

export const getProductBySlug = async (slug: string): Promise<IProduct | null> => {
  await db.connect()
  const product = await Product.findOne({ slug }).lean()

  if (!product) {
    return null
  }

  return JSON.parse(JSON.stringify(product))
}

interface ProductSlug {
  slug: string;
}

export const getAllProductSlug = async (): Promise<ProductSlug[]> => {
  await db.connect();
  const slugs = await Product.find().select('slug -_id')

  return slugs;
}

export const getAllProductByGender = async (gender: string) => {
  await db.connect();
  const products = await Product.find({ gender }).lean()

  return JSON.parse(JSON.stringify(products));
}

interface getProductByTermProps {
  size: string;
  color: string;
  sort: Sort;
  search: string;
}

export const getProductByTerm = async (query: getProductByTermProps) => {

  await db.connect()

  const [tag, params] = query.search.substring(query.search.lastIndexOf('/') + 1).split('?')


  let condition = {}
  let sort = {}

  if (SHOP_CONTANST.validSize.includes(`${query.size}`)) {
    condition = { ...condition, sizes: query.size };
  }

  if (query.sort === 'name_asc') {
    sort = { title: 1 }
  }

  if (query.sort === 'name_des') {
    sort = { title: -1 }
  }

  if (query.sort === 'low-to-high') {
    sort = { price: 1 }
  }

  if (query.sort === 'high-to-low') {
    sort = { price: -1 }
  }

  const products = await Product.find({
    $text: { $search: (tag as string).split('?')[0] }
  })
    .sort(sort)
    .lean()

  return JSON.parse(JSON.stringify(products));
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

  await db.connect()

  const [tag, params] = query.collection.substring(query.collection.lastIndexOf('/') + 1).split('?')

  let condition = {};
  let sort = {};

  if (tag !== 'all' && SHOP_CONTANST.validTags.includes(`${tag}`)) {
    condition = { ...condition, tags: tag };
  }

  if (SHOP_CONTANST.validSize.includes(`${query.size}`)) {
    condition = { ...condition, sizes: query.size };
  }

  if (query.sort === 'name_asc') {
    sort = { title: 1 }
  }

  if (query.sort === 'name_des') {
    sort = { title: -1 }
  }

  if (query.sort === 'low-to-high') {
    sort = { price: 1 }
  }

  if (query.sort === 'high-to-low') {
    sort = { price: -1 }
  }

  const products = await Product.find(condition).sort(sort)

  return JSON.parse(JSON.stringify(products));;
}