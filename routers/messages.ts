import { Router } from 'express';

export const messagesRouter = Router()

messagesRouter.get('/', (req, res)=>{
  res.send('get response here')
})

messagesRouter.post('/', (req, res)=>{
  res.send('post response here')
})