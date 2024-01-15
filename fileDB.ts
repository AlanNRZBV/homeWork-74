import { promises as fs } from 'fs';
import { IMessage } from './types';

let data: IMessage[] = [];

export const fileDB = {
  async addItem(item: IMessage) {

    const id = crypto.randomUUID()
    const message = {id, ...item}
    const fileName = `./messages/${message.date}.txt`
    
    return fs.writeFile(fileName, JSON.stringify(message.message))
  },
  async readMessages(){

    try{
      const path = './messages'
      const files = await fs.readdir(path)

      for (const item of files) {
        const content = await fs.readFile(`${path}/${item}`)
        const message: IMessage ={
          message:content.toString().slice(1,-1),
          date: item.slice(0,-4)
        }
        data.push(message)
      }
      return data
    }catch (e){
      console.error(e)
      data = []
    }


  }
}