import Router from 'express'
import { addProducts, deleteProducts, getProducts } from './products'
import { addReviews, deleteReviews, getReviews } from './reviews'

const router = Router()

router.use(
  '/v1',
  addProducts,
  addReviews,
  deleteProducts,
  deleteReviews,
  getProducts,
  getReviews
)

export default router
