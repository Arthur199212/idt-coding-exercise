export type Review = {
  createdAt: string
  id: string
  name: string
  productId: string
  rating: number
  text: string
  updatedAt: string
}

export type Product = {
  createdAt: string
  description: string
  id: string
  name: string
  rating: number
  reviews: Review[]
  thumbnail: string
  updatedAt: string
}
