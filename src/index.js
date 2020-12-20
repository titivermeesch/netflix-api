import express from 'express'
import cache from 'memory-cache'
import authRouter from './routes/authRouter.js'
import pathEvaluatorRouter from './routes/pathEvaluatorRouter.js'
import viewedItemsRouter from './routes/viewedItemsRouter.js'

const mainCache = new cache.Cache()

const app = express()
app.use(express.json())

app.use('/auth', authRouter)
app.use('/viewedItems', viewedItemsRouter)
app.use('/evaluator', pathEvaluatorRouter)

app.listen(3000, () => console.log('NetflixAPI Running'))

export { mainCache }
