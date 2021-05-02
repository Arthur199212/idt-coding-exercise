import mongoose from 'mongoose'
import { APP_PORT, MONGO_URI, MONGO_OPTIONS } from '@src/config'
import { createApp } from '@src/loaders'

const main = async () => {
  try {
    await mongoose.connect(MONGO_URI, MONGO_OPTIONS)

    const app = createApp()

    app.listen(APP_PORT, () => {
      console.log(`Server is up and running at http://localhost:${APP_PORT}`)
    })
  } catch (err) {
    console.log(err)
  }
}

main()
