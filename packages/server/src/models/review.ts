import { model, Document, Schema, Model } from 'mongoose'
import { DocumentName } from './constants'

const { ObjectId } = Schema.Types

export interface ReviewDocument extends Document {
  name: string
  productId: string
  rating: number
  text: string
}

export type ReviewModel = Model<ReviewDocument>

const reviewSchema = new Schema(
  {
    name: String,
    productId: {
      type: ObjectId,
      ref: DocumentName.PRODUCT
    },
    rating: {
      type: Number,
      min: [0, 'Rating cannot be below 0'],
      max: [5, 'Rating cannot be above 5'],
      validate : {
        validator : Number.isInteger,
        message   : '{VALUE} is not an integer value'
      }
    },
    text: String
  },
  {
    timestamps: true
  }
)

reviewSchema.set('toJSON', {
  transform: (doc: any, { __v, _id, ...rest }: any, options: any) => ({
    id: _id,
    ...rest
  })
})

export const Review = model<ReviewDocument, ReviewModel>(
  DocumentName.REVIEW,
  reviewSchema
)
