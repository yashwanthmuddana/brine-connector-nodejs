import { Client, WsClient } from '../src'
import * as dotenv from 'dotenv'
dotenv.config()

const main = async () => {
  try {
    const privateKey = process.env.PRIVATE_KEY
    const ethAddress = process.env.ETH_ADDRESS
    // create a rest client instance if you need to create a private websocket
    const client = new Client()
    if (privateKey && ethAddress) {
      // create a public websocket instance
      const wsClient = new WsClient('public')
      // check to see if connected
      await wsClient.connect()
      // subscribe to streams
      await wsClient.subscribe([
        'btcusdc.trades',
        'btcusdc.ob-inc',
        'btcusdc.kline-5m',
      ])
      // unsubscribe to streams
      await wsClient.unsubscribe(['btcusdc.trades'])
      // operate on ws member
      wsClient.ws.on('message', (data) => {
        console.log(data.toString())
      })
      await wsClient.disconnect()

      // login to get jwt access token
      const loginRes = await client.completeLogin(ethAddress, privateKey)
      // create a private websocket instance
      const wsClientPrivate = new WsClient('private', loginRes.token.access)
      // check if connected
      await wsClientPrivate.connect()
      // subscribe to streams
      await wsClientPrivate.subscribe(['trade', 'order'])
      // operate on ws member
      wsClientPrivate.ws.on('message', (data) => {
        console.log(data.toString())
      })
    }
  } catch (e) {
    console.log(e)
  }
}
main()
