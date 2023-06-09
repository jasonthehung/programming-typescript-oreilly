type Options = {
  baseURL: string
  cacheSize?: number
  tier?: 'prod' | 'dev'
}

class API {
  constructor(private options: Options) {}
}

console.log(
  new API({
    baseURL: 'https://api.mysite.com',
    badTier: 'prod',
  } as Options)
)
