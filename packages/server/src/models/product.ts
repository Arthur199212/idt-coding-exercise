import { model, Document, Schema, Model } from 'mongoose'
import { DocumentName } from './constants'
import { ReviewDocument } from './review'

const { ObjectId } = Schema.Types

export interface ProductDocument extends Document {
  description: string
  name: string
  rating: number
  thumbnail: string
  reviews: ReviewDocument[]
}

export type ProductModel = Model<ProductDocument>

const productSchema = new Schema(
  {
    description: String,
    name: String,
    rating: Number,
    thumbnail: String,
    reviews: [
      {
        type: ObjectId,
        ref: DocumentName.REVIEW
      }
    ]
  },
  {
    timestamps: true
  }
)

productSchema.set('toJSON', {
  transform: (doc: any, { __v, _id, ...rest }: any, options: any) => ({
    id: _id,
    ...rest
  })
})

export const Product = model<ProductDocument, ProductModel>(
  DocumentName.PRODUCT,
  productSchema
)
