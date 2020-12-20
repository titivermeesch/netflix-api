import express from 'express'
import axios from 'axios'
import { mainCache } from '../index.js'

const viewedItemsRouter = express.Router()

viewedItemsRouter.get('/', async (req, res) => {
  const reqData = await axios.get(
    `https://www.netflix.com/api/shakti/${mainCache.get(
      'buildIdentifier',
    )}/viewingactivity?pg=1&pgSize=20`,
    {
      headers: {
        Cookie: mainCache.get('cookies'),
      },
    },
  )

  res.send(reqData.data.viewedItems)
})

export default viewedItemsRouter
