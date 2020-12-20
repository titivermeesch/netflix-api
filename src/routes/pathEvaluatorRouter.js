import express from 'express'
import { pathEvaluate } from '../helpers/netflix-evaluator-helpers.js'

const pathEvaluatorRouter = express.Router()

pathEvaluatorRouter.get('/', async (req, res) => {
  const paths = [
    [
      'videos',
      80184771,
      [
        'title',
        'episodeCount',
        'evidence',
        'maturity',
        'seasonCount',
        'synopsis',
      ],
    ],
  ]
  try {
    const data = await pathEvaluate(paths)
    res.send(data)
  } catch (e) {
    console.error(e)
    res.sendStatus(400)
  }
})

export default pathEvaluatorRouter
