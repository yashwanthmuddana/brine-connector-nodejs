import { AxiosError } from 'axios'
import * as dotenv from 'dotenv'
import { ClientError, CreateOrderNonceBody, Response } from '../src/types'
import { Client } from '../src/client'
dotenv.config()

const main = async () => {
  // load your privateKey and walletAddress
  const privateKey = process.env.PRIVATE_KEY
  const ethAddress = process.env.ETH_ADDRESS

  if (privateKey && ethAddress) {
    // handle in try catch block
    try {
      // create a rest client instance (you can pass baseUrl if it has changed)
      const client = new Client()

      //you can use public endpoints right away
      const test = await client.testConnection()
      const candleStick = await client.getCandlestick({
        market: 'ethusdc',
        period: 120,
      })

      // login to use private endpoints
      const loginRes = await client.completeLogin(ethAddress, privateKey)

      // create an order nonce
      const nonceBody: CreateOrderNonceBody = {
        market: 'btcusdt',
        ord_type: 'market',
        price: 29580.51,
        side: 'buy',
        volume: 0.0001,
      }

      // create order (private)
      const order = await client.createCompleteOrder(nonceBody, privateKey)
      console.log(order)

      // get profile info (private)
      const profile = await client.getProfileInfo()
      console.log(profile.payload.username)
    } catch (e) {
      // Error: ClientError | AxiosError
      if (isClientError(e)) {
        console.log(e)
      } else {
        console.log(e as AxiosError<Response<string>>)
      }
    }
  }
}

main()

// check if ClientError
const isClientError = (err: unknown): err is ClientError => {
  return (<ClientError>err).type !== undefined
}
