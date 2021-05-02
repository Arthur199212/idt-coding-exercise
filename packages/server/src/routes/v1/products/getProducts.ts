import { Router } from 'express'
import { catchAsync } from '@src/middlewares'
import { Product } from '@src/models'

const router = Router()

router.get(
  '/products',
  catchAsync(async (req, res) => {
    const products = await Product.find({}).populate('reviews')

    res.json(products)
  })
)

export default router
