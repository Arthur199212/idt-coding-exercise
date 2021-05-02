import { Router } from 'express'
import { catchAsync } from '@src/middlewares'
import { Product } from '@src/models'

const router = Router()

router.post(
  '/products',
  catchAsync(async (req, res) => {
    // for test purposes only
    const {
      description = 'Description',
      name = 'Product',
      thumbnail = 'https://picsum.photos/300'
    } = req.body

    await Product.create({
      description,
      name,
      rating: 0,
      thumbnail
    })

    res.json({ message: 'OK' })
  })
)

export default router
