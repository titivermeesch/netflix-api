import express from 'express'
import NetflixEntitySelectors from '../enums/NetflixEntitySelectors.js'
import NetflixEntityTypes from '../enums/NetflixEntityTypes.js'
import NetflixSearchTypes from '../enums/NetflixSearchTypes.js'
import { pathEvaluate } from '../helpers/netflix-evaluator-helpers.js'
import { getVideosArray } from '../helpers/videos/video-data-processing.js'

const searchRouter = express.Router()

searchRouter.post('/', async (req, res) => {
  const { term, limit = 20, rawData = false } = req.body
  const paths = [
    [
      NetflixEntityTypes.SEARCH,
      NetflixEntitySelectors.BY_TERM,
      `|${term}`,
      NetflixSearchTypes.SUGGESTIONS,
      1, // No idea what this value is
      { from: 0, to: limit - 1 },
      'summary',
    ],
    [
      NetflixEntityTypes.SEARCH,
      NetflixEntitySelectors.BY_TERM,
      `|${term}`,
      NetflixSearchTypes.TITLES,
      1,
      { from: 0, to: limit - 1 },
      'summary',
    ],
  ]

  const data = await pathEvaluate(paths)

  if (rawData) {
    res.send(data)
  } else {
    const videos = getVideosArray(data, `|${term}`)
    res.send(videos)
  }
})

export default searchRouter
