import { Joi } from './joi'

export const addReviewSchema = Joi.object({
  name: Joi.string()
    .min(2)
    .max(30)
    .required()
    .messages({
      'string.empty': 'Name is a required field',
      'string.min': 'Name should be at least 2 chars long'
    }),
  productId: Joi.objectId().required(),
  rating: Joi.number()
    .integer()
    .min(1)
    .max(5)
    .required()
    .messages({
      'number.empty': 'Please rate a product to add a review',
      'number.min': 'Please rate a product to add a review'
    }),
  text: Joi.string()
    .allow('')
    .max(200)
    .optional()
})
