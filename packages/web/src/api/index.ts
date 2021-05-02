import { PRODUCTS_URI } from '@src/config'
import { Product } from '@src/types'

export const getProducts = async (): Promise<Product[] | undefined> => {
  const res = await fetch(`${PRODUCTS_URI}/api/v1/products`)
  return (await res.json()) as Product[]
}

export type ReviewData = {
  name: string
  productId: string
  rating: number | null
  text: string
}

export const addReview = async (review: ReviewData): Promise<void> => {
  const res = await fetch(`${PRODUCTS_URI}/api/v1/reviews`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(review)
  })
  const data = await res.json()

  if (res.status !== 200) throw new Error(data.message)
}
