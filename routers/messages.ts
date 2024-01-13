import { Router } from 'express';
import { MessageWithoutId } from '../types';
import { fileDB } from '../fileDB';

export const messagesRouter = Router()

messagesRouter.get('/', (req, res)=>{
  res.send('get response here')
})

messagesRouter.post('/', async (req, res)=>{

  const now = new Date()
  const createdAt = now.toISOString()

 const message: MessageWithoutId = {
   message: req.body.message,
   date: createdAt
  }

  await fileDB.addItem(message)

  res.send(`Message:  ${message.message} Date: ${message.date}` )
})