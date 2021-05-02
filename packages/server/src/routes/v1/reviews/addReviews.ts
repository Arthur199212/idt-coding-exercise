import { Types } from 'mongoose'
import { Router } from 'express'
import { catchAsync } from '@src/middlewares'
import { Product, Review } from '@src/models'
import { BadRequest } from '@src/errors'
import { addReviewSchema, validate } from '@src/validation'

const router = Router()

// todo: move business logic into a related service
router.post(
  '/reviews',
  catchAsync(async (req, res) => {
    const data = await validate(addReviewSchema, req.body)
    const { productId } = data

    // Check if product exists
    const product = await Product.findById(productId)

    if (!product) throw new BadRequest()

    // Add a review
    const newReview = await Review.create(data)

    // Update an average rating of a related product
    const [{ ratingAvg }] = await Review.aggregate([
      {
        $match: { productId: Types.ObjectId(productId) }
      },
      {
        $group: {
          _id: null,
          avg: {
            $avg: '$rating'
          }
        }
      },
      {
        $project: {
          _id: '$_id',
          ratingAvg: {
            $ceil: '$avg'
          }
        }
      }
    ])

    // Update rating and reviews of a related product
    await Product.updateOne(
      { _id: productId },
      { $push: { reviews: newReview }, $set: { rating: ratingAvg } }
    )

    res.json({ message: 'OK' })
  })
)

export default router
