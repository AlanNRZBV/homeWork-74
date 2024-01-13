import {promises as fs} from 'fs';
import { MessageWithoutId } from './types';

export const fileDB = {
  addItem(item: MessageWithoutId) {

    const id = crypto.randomUUID()
    const message = {id, ...item}

    const fileName = `./messages/${message.date}.txt`

    return fs.writeFile(fileName, JSON.stringify(message.message))
  }
}