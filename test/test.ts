import { expect } from 'chai'
import { Balance, Response } from '../src/types'
import { Client } from '../src/client'

describe('Brine Wrapper', () => {
  describe('REST Client', () => {
    let client: Client
    let privateKey: string | undefined
    let ethAddress: string | undefined
    before(() => {
      privateKey = process.env.PRIVATE_KEY
      ethAddress = process.env.ETH_ADDRESS
      client = new Client()
    })

    describe('Ping', () => {
      it('Test Connection', async () => {
        const res = await client.testConnection()
        expect(res).to.have.property('payload')
        expect(res).to.have.property('status')
        expect(res.status).to.eql('success')
      })
    })

    describe('Market', () => {
      it('24hr Price', async () => {
        const res = await client.get24hPrice({ market: 'ethusdc' })
        expect(res).to.have.property('payload')
        expect(res).to.have.property('status')
        expect(res.status).to.eql('success')
      })

      it('Kline/Candlestick Data', async () => {
        const res = await client.getCandlestick({
          market: 'ethusdc',
          period: 120,
        })
        expect(res).to.have.property('payload')
        expect(res).to.have.property('status')
        expect(res.status).to.eql('success')
      })

      it('Order Book', async () => {
        const res = await client.getOrderBook({
          market: 'ethusdc',
        })
        expect(res).to.have.property('payload')
        expect(res).to.have.property('status')
        expect(res.status).to.eql('success')
      })

      it('Recent Trades', async () => {
        const res = await client.getRecentTrades({
          market: 'ethusdc',
        })
        expect(res).to.have.property('payload')
        expect(res).to.have.property('status')
        expect(res.status).to.eql('success')
      })
    })

    describe('Account', () => {
      it('Login', async () => {
        const res = await client.completeLogin(ethAddress!, privateKey!)
        expect(res).to.not.be.an('undefined')
        expect(res).to.have.property('status')
        expect(res).to.have.property('payload')
        expect(res.status).to.eql('success')
      })

      it('Profile Information', async () => {
        const res = await client.getProfileInfo()
        expect(res).to.not.be.an('undefined')
        expect(res).to.have.property('status')
        expect(res).to.have.property('payload')
        expect(res.payload).to.have.property('stark_key')
        expect(res.status).to.eql('success')
      })

      it('Balance details', async () => {
        const res = await client.getBalance()
        expect(res).to.not.be.an('undefined')
        expect(res).to.have.property('status')
        expect(res).to.have.property('payload')
        expect((res as Response<Balance[]>).payload[0]).to.deep.property(
          'currency',
        )
        expect(res.status).to.eql('success')
      })

      it('Profit and Loss Details', async () => {
        const res = await client.getProfitAndLoss()
        expect(res).to.not.be.an('undefined')
        expect(res).to.have.property('status')
        expect(res).to.have.property('payload')
        expect(res.payload[0]).to.have.property('currency')
        expect(res.status).to.eql('success')
      })
    })

    describe('Trading', () => {
      describe('Create Order', () => {
        it('New Order Nonce', async () => {
          const res = await client.createOrderNonce({
            market: 'btcusdt',
            ord_type: 'limit',
            price: 29580.51,
            side: 'sell',
            volume: 0.0001,
          })
          expect(res).to.have.property('status')
          expect(res.status).to.eql('success')
          expect(res).to.have.property('payload')
          expect(res.payload).to.have.property('nonce')
        })
        // it('New order', async () => {
        //   const res = await client.createNewOrder()
        //   expect(res).to.have.property('status')
        //   expect(res.status).to.eql('success')
        //   expect(res).to.have.property('payload')
        //   expect(res.payload).to.have.property('nonce')
        // })
      })

      it('List Orders', async () => {
        const listOrdersRes = await client.listOrders()
        expect(listOrdersRes).to.have.property('status')
        expect(listOrdersRes.status).to.eql('success')
        expect(listOrdersRes).to.have.property('payload')
        expect(listOrdersRes.payload[0]).to.have.property('uuid')
      })

      it('List Trades', async () => {
        const res = await client.listTrades()
        expect(res).to.have.property('status')
        expect(res.status).to.eql('success')
        expect(res).to.have.property('payload')
        expect(res.payload[0]).to.have.property('id')
      })
    })
  })
})
