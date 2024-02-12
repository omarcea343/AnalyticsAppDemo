import { Redis } from '@upstash/redis'

export const redis = new Redis({
  url: 'https://us1-eternal-hagfish-38971.upstash.io',
  token: process.env.REDIS_KEY!,
})