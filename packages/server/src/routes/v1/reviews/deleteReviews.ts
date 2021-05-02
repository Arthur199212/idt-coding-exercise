import { Router } from 'express'
import { catchAsync } from '@src/middlewares'
import { Product, Review } from '@src/models'

const router = Router()

router.delete(
  '/reviews',
  catchAsync(async (req, res) => {
    // for test purposes only
    await Review.deleteMany({})
    await Product.updateMany({}, { $set: { rating: 0 } })

    res.json({ message: 'OK' })
  })
)

export default router
