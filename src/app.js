import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import UserRoute from './Routes/user.Routes.js'
import { router as VideoRouter} from './Routes/video.Routes.js'
import { router as LikesRouter } from './Routes/like.Routes.js'
import { router as CommentRouter } from './Routes/comment.Routes.js'
import {router as SubscriptionRouter} from './Routes/subscription.Routes.js'
import {router as TweetRouter} from './Routes/tweet.Routes.js'
import {router as PlaylistRouter} from './Routes/playlist.Routes.js'
import {router as DashBoardRouter} from './Routes/dashboard.Routes.js'
const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN || "*",
    credentials: true
}))

console.log(process.env.CORS_ORIGIN)

app.use(express.json({ limit: "16kb" }))
app.use(express.urlencoded({ extended: true, limit: "16kb" }))
app.use(cookieParser())

app.use("/api/v1/users", UserRoute)
app.use("/api/v1/video",VideoRouter)
app.use("/api/v1/like",LikesRouter)
app.use("/api/v1/comment",CommentRouter)
app.use("/api/v1/subscription",SubscriptionRouter)
app.use("/api/v1/tweet",TweetRouter)
app.use("/api/v1/playlist",PlaylistRouter)
app.use("/api/v1/dashboard",DashBoardRouter)

app.use(express.static("public"))
export { app }