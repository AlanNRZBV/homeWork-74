export interface IMessage {
  id: string,
  message: string,
  date: string
}

export type MessageWithoutId = Omit<IMessage, 'id'>

