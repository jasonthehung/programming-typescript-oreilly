class RequestBuilder {
  private date: object | null = null
  private method: 'get' | 'post' | null = null
  private url: string | null = null

  setMethod(method: 'get' | 'post'): this {
    this.method = method
    return this
  }

  setData(data: object): this {
    this.date = data
    return this
  }

  setURL(url: string): this {
    this.url = url
    return this
  }

  send() {
    // ...
  }
}

new RequestBuilder().setURL(this.url).setMethod('post').setData({}).send()
