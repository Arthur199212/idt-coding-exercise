import { Router } from 'express'
import { catchAsync } from '@src/middlewares'
import { Review } from '@src/models'

const router = Router()

router.get(
  '/reviews',
  catchAsync(async (req, res) => {
    // for test purposes only
    const reviews = await Review.find({})

    res.json(reviews)
  })
)

export default router
