import { Router } from 'express';
import { IMessage } from '../types';
import { fileDB } from '../fileDB';

export const messagesRouter = Router();

messagesRouter.get('/', async (req, res) => {
  const dbResponse = await fileDB.readMessages();
  if (dbResponse !== undefined) {
    if (dbResponse.length > 5) {
      const reducedResponse = dbResponse.slice(-5);
      res.send(reducedResponse);
    } else {
      res.send(dbResponse);
    }
  } else {
    res.send('undefined');
  }
});

messagesRouter.post('/', async (req, res) => {
  const now = new Date();
  const createdAt = now.toISOString();

  const message: IMessage = {
    message: req.body.message,
    date: createdAt,
  };

  await fileDB.addItem(message);

  res.send(`Message:  ${message.message} Date: ${message.date}`);
});
