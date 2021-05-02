import mongoose from 'mongoose'
import joi, {
  ExtensionFactory,
  Root,
  StringSchema,
  ObjectSchema
} from 'joi'
import { BadRequest } from '@src/errors'

const objectId: ExtensionFactory = joi => ({
  type: 'objectId',
  base: joi.string(),
  messages: {
    objectId: '"{#label}" is not a valid ID'
  },
  validate (value, helpers) {
    if (!mongoose.Types.ObjectId.isValid(value)) {
      return { value, errors: helpers.error('objectId') }
    }
  }
})

interface ExtendedRoot extends Root {
  objectId(): StringSchema
}

export const Joi: ExtendedRoot = joi.extend(objectId)

export const validate = async (schema: ObjectSchema, payload: any) => {
  try {
    return await schema.validateAsync(payload, { abortEarly: false })
  } catch (err) {
    throw new BadRequest(err)
  }
}
