import express from 'express'
import { loginToNetflix } from '../helpers/login-helpers.js'

const authRouter = express.Router()

/**
 * Login to netflix account
 */
authRouter.post('/login', async (req, res) => {
  const { email, password } = req.body

  try {
    await loginToNetflix(email, password)

    res.sendStatus(200)
  } catch (e) {
    console.error(e)
    res.sendStatus(400)
  }
})

export default authRouter
