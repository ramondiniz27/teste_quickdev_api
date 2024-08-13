import express from 'express'
import * as dotenv from 'dotenv'

import { Router, Request, Response } from 'express';

dotenv.config()
const app = express();

const route = Router()

app.use(express.json())

route.get('/', (req: Request, res: Response) => {
  res.json({ message: 'hello world with Typescript' })
})
app.use('/users', require('./routes/User'))
app.use(route)



app.listen(process.env.PORT, () => console.log(`server is running on port ${process.env.PORT}`))