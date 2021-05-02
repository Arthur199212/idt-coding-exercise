import { Router } from 'express'
import { catchAsync } from '@src/middlewares'
import { Product, Review } from '@src/models'

const router = Router()

router.delete(
  '/products',
  catchAsync(async (req, res) => {
    // for test purposes only
    await Product.deleteMany({})
    await Review.deleteMany({})

    res.json({ message: 'OK' })
  })
)

export default router
