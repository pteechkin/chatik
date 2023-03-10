import env from './src/environment.js'

import express from 'express'
import { connectDB } from './src/db.js'

import cors from 'cors'

import usersRouter from './src/routes/users.route.js'

const app = express()

app.use(express.json());
app.use(cors({
  origin: env.allowedOrigins,
  allowedHeaders: ['Content-Type', 'Authorization']
}))

app.use('/users', usersRouter)

if (env.nodeEnv !== 'test') {
  connectDB()
  const port = env.port || 3000
  app.listen(port, () => {
    console.log(`server running at port ${port}`);
  });
}

export default app;



