class MessageQueue {
  private constructor(message: string[]) {}
}

// @ts-ignore
// Cannot extend a class 'MessageQueue'. Class constructor is marked as private.
class CantExtendMessageQueue extends MessageQueue {}

// @ts-ignore
// Constructor of class 'MessageQueue' is private and only accessible within the class declaration.
new MessageQueue(['a', 'b', 'c'])

// ------------------------------

class MessageQueueSolved {
  private constructor(message: string[]) {}

  static create(messages: string[]) {
    return new MessageQueueSolved(messages)
  }
}

// Still can't extend, but now we can instantiate it.
let msgQueue = MessageQueueSolved.create(['a', 'b', 'c'])
