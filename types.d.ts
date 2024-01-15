export interface IMessage {
  message: string,
  date: string
}

export type MessageWithoutId = Omit<IMessage, 'id'>

