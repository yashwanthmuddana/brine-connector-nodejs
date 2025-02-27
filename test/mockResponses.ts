import { LoginResponse, Response } from '../src/types'

export const responses = {
  testConnection: {
    status: 'success',
    message: 'Working fine!',
    payload: '',
  },
  market: {
    status: 'success',
    message: 'Retrieval Successful',
    payload: {
      btcusdc: { at: '1681903275', ticker: [{}] },
      btcusdt: { at: '1681903275', ticker: [{}] },
      ethusdc: { at: '1681903275', ticker: [{}] },
      ethusdt: { at: '1681903275', ticker: [{}] },
      usdcusdt: { at: '1681903275', ticker: [{}] },
    },
  },
  kline: {
    status: 'success',
    message: 'Retrieval Successful',
    payload: [
      [1681689600, 2014.02, 2014.02, 2014.02, 2014.02, 0],
      [1681696800, 2014.02, 2014.02, 2014.02, 2014.02, 0],
      [1681704000, 2014.02, 2014.02, 2014.02, 2014.02, 0],
      [1681711200, 2014.02, 2014.02, 2014.02, 2014.02, 0.01],
      [1681718400, 2014.02, 2014.02, 2014.02, 2014.02, 0],
      [1681725600, 2014.02, 2014.02, 2014.02, 2014.02, 0],
      [1681732800, 2014.02, 2014.02, 2014.02, 2014.02, 0],
      [1681740000, 2014.02, 2014.02, 2014.02, 2014.02, 0],
      [1681747200, 2014.02, 2014.02, 2014.02, 2014.02, 0.1618],
      [1681754400, 2014.02, 2014.02, 2014.02, 2014.02, 0],
      [1681761600, 2014.02, 2014.02, 2014.02, 2014.02, 0.008400000000000001],
      [1681768800, 2014.02, 2014.02, 2014.02, 2014.02, 0],
      [1681776000, 2014.02, 2014.02, 2014.02, 2014.02, 0],
      [1681783200, 2014.02, 2014.02, 2014.02, 2014.02, 0],
      [1681790400, 2014.02, 2014.02, 2014.02, 2014.02, 0.1],
      [1681797600, 2014.02, 2014.02, 2014.02, 2014.02, 0.3694],
      [1681804800, 2014.02, 2014.02, 2014.02, 2014.02, 0.05],
      [1681812000, 2014.02, 2014.02, 2014.02, 2014.02, 0.0993],
      [1681819200, 2014.02, 2014.02, 2014.02, 2014.02, 0.015],
      [1681826400, 2014.02, 2014.02, 2014.02, 2014.02, 0.0066],
      [1681833600, 2014.02, 2014.02, 2014.02, 2014.02, 0],
      [1681840800, 2014.02, 2014.02, 2014.02, 2014.02, 0],
      [1681848000, 2014.02, 2014.02, 2014.02, 2014.02, 0.0005],
      [1681855200, 2014.02, 2014.02, 2014.02, 2014.02, 0],
      [1681862400, 2014.02, 2014.02, 2014.02, 2014.02, 0],
      [1681869600, 2014.02, 2014.02, 2014.02, 2014.02, 0],
      [1681876800, 2014.02, 2014.02, 2014.02, 2014.02, 0],
      [1681884000, 2014.02, 2014.02, 2014.02, 2014.02, 0.01],
      [1681891200, 2014.02, 2014.02, 2014.02, 2014.02, 0.0993],
      [1681898400, 2014.02, 2014.02, 2014.02, 2014.02, 0],
    ],
  },
  klineInvalidMarketError: {
    status: 'error',
    message: 'please enter a valid market',
    payload: '',
  },
  orderBook: {
    status: 'success',
    message: 'Retrieval Successful',
    payload: {
      asks: [
        {
          id: 100,
          uuid: '6f11fcb2-1ef5-4fe3-852d-c73ddc28a8d1',
          side: 'sell',
          ord_type: 'limit',
          price: '2000.0',
          avg_price: '0.0',
          state: 'wait',
          market: 'ethusdc',
          created_at: '2023-04-19T11:02:50+02:00',
          updated_at: '2023-04-19T11:02:51+02:00',
          origin_volume: '0.001',
          remaining_volume: '0.001',
          executed_volume: '0.0',
          maker_fee: '0.001',
          taker_fee: '0.001',
          trades_count: 0,
        },
        {
          id: 101,
          uuid: 'cfa116ff-d0d7-4e23-923b-a83541e9dcd6',
          side: 'sell',
          ord_type: 'limit',
          price: '2010.0',
          avg_price: '0.0',
          state: 'wait',
          market: 'ethusdc',
          created_at: '2023-04-19T11:02:57+02:00',
          updated_at: '2023-04-19T11:02:57+02:00',
          origin_volume: '0.001',
          remaining_volume: '0.001',
          executed_volume: '0.0',
          maker_fee: '0.001',
          taker_fee: '0.001',
          trades_count: 0,
        },
        {
          id: 102,
          uuid: 'c41dd9e3-a191-435b-8101-5d97f2519f80',
          side: 'sell',
          ord_type: 'limit',
          price: '2020.0',
          avg_price: '0.0',
          state: 'wait',
          market: 'ethusdc',
          created_at: '2023-04-19T11:03:04+02:00',
          updated_at: '2023-04-19T11:03:04+02:00',
          origin_volume: '0.001',
          remaining_volume: '0.001',
          executed_volume: '0.0',
          maker_fee: '0.001',
          taker_fee: '0.001',
          trades_count: 0,
        },
        {
          id: 103,
          uuid: '19e1cbda-35e7-4adb-af5d-ca3ee2e2f54a',
          side: 'sell',
          ord_type: 'limit',
          price: '2030.0',
          avg_price: '0.0',
          state: 'wait',
          market: 'ethusdc',
          created_at: '2023-04-19T11:03:11+02:00',
          updated_at: '2023-04-19T11:03:11+02:00',
          origin_volume: '0.001',
          remaining_volume: '0.001',
          executed_volume: '0.0',
          maker_fee: '0.001',
          taker_fee: '0.001',
          trades_count: 0,
        },
      ],
      bids: [
        {
          id: 94,
          uuid: '06755d51-fcee-4936-b847-2d4da33588ba',
          side: 'buy',
          ord_type: 'limit',
          price: '1990.0',
          avg_price: '0.0',
          state: 'wait',
          market: 'ethusdc',
          created_at: '2023-04-19T11:01:18+02:00',
          updated_at: '2023-04-19T11:01:18+02:00',
          origin_volume: '0.001',
          remaining_volume: '0.001',
          executed_volume: '0.0',
          maker_fee: '0.001',
          taker_fee: '0.001',
          trades_count: 0,
        },
        {
          id: 97,
          uuid: 'bbce1e15-8ef0-46f8-abd5-edb0a5023c36',
          side: 'buy',
          ord_type: 'limit',
          price: '1980.0',
          avg_price: '0.0',
          state: 'wait',
          market: 'ethusdc',
          created_at: '2023-04-19T11:02:22+02:00',
          updated_at: '2023-04-19T11:02:22+02:00',
          origin_volume: '0.001',
          remaining_volume: '0.001',
          executed_volume: '0.0',
          maker_fee: '0.001',
          taker_fee: '0.001',
          trades_count: 0,
        },
        {
          id: 98,
          uuid: '789a70fb-6c35-421e-8cf9-5a3093f29712',
          side: 'buy',
          ord_type: 'limit',
          price: '1970.0',
          avg_price: '0.0',
          state: 'wait',
          market: 'ethusdc',
          created_at: '2023-04-19T11:02:28+02:00',
          updated_at: '2023-04-19T11:02:28+02:00',
          origin_volume: '0.001',
          remaining_volume: '0.001',
          executed_volume: '0.0',
          maker_fee: '0.001',
          taker_fee: '0.001',
          trades_count: 0,
        },
        {
          id: 99,
          uuid: 'edfee394-3f6b-4c60-b6d5-7623d2b3562d',
          side: 'buy',
          ord_type: 'limit',
          price: '1960.0',
          avg_price: '0.0',
          state: 'wait',
          market: 'ethusdc',
          created_at: '2023-04-19T11:02:35+02:00',
          updated_at: '2023-04-19T11:02:35+02:00',
          origin_volume: '0.001',
          remaining_volume: '0.001',
          executed_volume: '0.0',
          maker_fee: '0.001',
          taker_fee: '0.001',
          trades_count: 0,
        },
      ],
    },
  },
  orderbookMarketError: {
    status: 'error',
    message: 'please provide market, market is a mandatory field',
    payload: '',
  },
  recentTrades: {
    status: 'success',
    message: 'Retrieval Successful',
    payload: [
      {
        id: 40,
        price: 1990,
        amount: 0.001,
        total: 1.99,
        market: 'ethusdc',
        created_at: 1681894870,
        taker_type: 'buy',
      },
      {
        id: 39,
        price: 1989,
        amount: 0.001,
        total: 1.989,
        market: 'ethusdc',
        created_at: 1681894706,
        taker_type: 'buy',
      },
      {
        id: 38,
        price: 2101,
        amount: 0.0002,
        total: 0.4202,
        market: 'ethusdc',
        created_at: 1681806276,
        taker_type: 'buy',
      },
      {
        id: 37,
        price: 2101,
        amount: 0.0002,
        total: 0.4202,
        market: 'ethusdc',
        created_at: 1681805047,
        taker_type: 'sell',
      },
      {
        id: 35,
        price: 2105,
        amount: 0.0005,
        total: 1.0525,
        market: 'ethusdc',
        created_at: 1681804076,
        taker_type: 'sell',
      },
      {
        id: 34,
        price: 2105,
        amount: 0.001,
        total: 2.105,
        market: 'ethusdc',
        created_at: 1681804013,
        taker_type: 'sell',
      },
    ],
  },
  loginNonce: {
    status: 'success',
    message: 'Nonce Acquired',
    payload:
      'You’re now signing into Brine, make sure the origin is https://trade.brine.fi (Login-code:fdsfadf)',
  },
  login: {
    status: 'success',
    message: 'Login Successful',
    payload: {
      uid: 'IDDAF4F5E3C7',
      signature: '',
    },
    token: {
      refresh: 'fdsfaf',
      access: 'dasfssdsc',
    },
  },
  loginInvalidEthAddress: {
    status: 'error',
    message: 'Ensure eth_address has at least 30 characters.',
    payload: '',
  },
  loginIncorrectAddress: {
    status: 'error',
    message: 'Invalid Credentials or Token Expired, Kindly login again.',
    payload: '',
  },
  profileInformation: {
    status: 'success',
    message: 'Successful',
    payload: {
      name: 'test',
      img: null,
      username: '0x',
      stark_key: '0x',
    },
  },
  balanceDetails: {
    status: 'success',
    message: 'Retrieved Successfully',
    payload: [
      { currency: 'btc', balance: '0.0', locked: '0.0' },
      { currency: 'eth', balance: '0.0', locked: '0.0' },
      { currency: 'usdc', balance: '0.0', locked: '0.0' },
    ],
  },
  accessTokenExpired: {
    status: 'error',
    message: 'Given token not valid for any token type',
    payload: {
      token_class: 'AccessToken',
      token_type: 'access',
      message: 'Token is invalid or expired',
      code: 'token_not_valid',
    },
  },
  refreshToken: {
    status: 'success',
    message: '',
    payload: {
      access: 'ferasdfklre',
      refresh: 'fekcjicbd',
    },
  },
  profitAndLoss: {
    status: 'success',
    message: 'Retrieval Successful',
    payload: [
      {
        currency: 'btc',
        pnl_currency: 'usdc',
        total_credit: '0.0130869',
        total_debit: '0.0016',
        total_credit_value: '285.894238581',
        total_debit_value: '35.90128',
        average_buy_price: '21845.83351145038167938931',
        average_sell_price: '22438.3',
        average_balance_price: '22144.2931204690672853',
        total_balance_value: '254.369280645516129',
      },
      {
        currency: 'eth',
        pnl_currency: 'usdc',
        total_credit: '0.4899',
        total_debit: '0.2719825',
        total_credit_value: '716.668361',
        total_debit_value: '396.6192377',
        average_buy_price: '1462.88704021228822208614',
        average_sell_price: '1458.25278354305883650603',
        average_balance_price: '1514.9638440142855943',
        total_balance_value: '330.137133477983081',
      },
      {
        currency: 'usdc',
        pnl_currency: 'usdc',
        total_credit: '230.207937624',
        total_debit: '173.8537',
        total_credit_value: '230.207937624',
        total_debit_value: '173.8537',
        average_buy_price: '1.0',
        average_sell_price: '1.0',
        average_balance_price: '1.0',
        total_balance_value: '56.354237624',
      },
    ],
  },
  orderNonce: {
    status: 'success',
    message:
      'order nonce created successfully, please sign the msg_hash to place the order',
    payload: {
      nonce: 37355310,
      msg_hash:
        '0xfcbccbc483d23905e8a74225ce7dbba8ba7765a2b25e465d372b645c4c94fa',
    },
  },
  orderNonceDecimalError: {
    status: 'error',
    message: 'Maximum decimals allowed for volume is 4 in btcusdt market',
    payload: '',
  },
  createOrder: {
    status: 'success',
    message: 'Created Order Successfully',
    payload: {
      id: 37270840,
      uuid: 'd541658d-9559-43dc-ac39-e97ad0e5a454',
      side: 'buy',
      ord_type: 'market',
      price: null,
      avg_price: '0.0',
      state: 'pending',
      market: 'btcusdt',
      created_at: '2023-04-20T09:44:38+02:00',
      updated_at: '2023-04-20T09:44:38+02:00',
      origin_volume: '0.0001',
      remaining_volume: '0.0001',
      executed_volume: '0.0',
      maker_fee: '0.001',
      taker_fee: '0.001',
      trades_count: 0,
    },
  },
  listOrders: {
    status: 'success',
    message: 'Orders Retrieved Successfully',
    payload: [
      {
        id: 37270841,
        uuid: 'c553d4d0-a07e-46e5-a412-3322807d2632',
        side: 'buy',
        ord_type: 'market',
        price: null,
        avg_price: '30690.04',
        state: 'done',
        market: 'btcusdt',
        created_at: '2023-04-20T09:45:39+02:00',
        updated_at: '2023-04-20T09:45:39+02:00',
        origin_volume: '0.0001',
        remaining_volume: '0.0',
        executed_volume: '0.0001',
        maker_fee: '0.001',
        taker_fee: '0.001',
        trades_count: 1,
      },
    ],
  },
  listTrades: {
    status: 'success',
    message: 'Trades Retrieved Successfully',
    payload: [
      {
        id: 478272,
        price: '30690.04',
        amount: '0.0001',
        total: '3.069004',
        market: 'btcusdt',
        created_at: '2023-04-20T09:45:39+02:00',
        taker_type: 'buy',
        side: 'buy',
        order_id: 37270841,
        fee_currency: 'btc',
        fee: '0.001',
        fee_amount: '0.0000001',
      },
    ],
  },
  initiateInternalTransferResponse: {
    status: 'success',
    message: 'Please sign the message, to complete the transaction',
    payload: {
      nonce: 797982128,
      msg_hash:
        '0x2af4af1aa1e47a8b4d71a111a0b5a0649d80d586090548f7bb5a7ba74c287d3',
    },
  },
  internalTransferResponseInvalidKey: {
    status: 'error',
    message: 'Invalid organization key',
    payload: '',
  },
  internalTransferResponseInvalidJWT: {
    status: 'error',
    message: 'Authentication credentials were not provided.',
    payload: '',
  },
  executeInternalTransferResponse: {
    status: 'success',
    message: 'Internal transfer processed successfully',
    payload: {
      client_reference_id: '6462569061361987',
      amount: '1.0000000000000000',
      currency: 'usdc',
      from_address: '0x6c875514E42F14B891399A6a8438E6AA8F77B178',
      destination_address: '0xF5F467c3D86760A4Ff6262880727E854428a4996',
      status: 'success',
      created_at: '2023-07-26T06:28:52.350343Z',
      updated_at: '2023-07-26T06:28:52.902831Z',
    },
  },
  listInternalTransfers: {
    status: 'success',
    message: 'Fetched internal transfers successfully',
    payload: {
      internal_transfers: [
        {
          client_reference_id: '3845010178310545',
          amount: '1.0000000000000000',
          currency: 'usdc',
          from_address: '0x6c875514E42F14B891399A6a8438E6AA8F77B178',
          destination_address: '0xF5F467c3D86760A4Ff6262880727E854428a4996',
          status: 'success',
          created_at: '2023-07-26T05:11:47.285117Z',
          updated_at: '2023-07-26T05:11:47.698994Z',
        },
        {
          client_reference_id: '4645497856683096',
          amount: '1.0000000000000000',
          currency: 'usdc',
          from_address: '0x6c875514E42F14B891399A6a8438E6AA8F77B178',
          destination_address: '0xF5F467c3D86760A4Ff6262880727E854428a4996',
          status: 'success',
          created_at: '2023-07-26T05:11:13.502647Z',
          updated_at: '2023-07-26T05:11:14.047787Z',
        },
      ],
      total_count: 26,
      limit: 2,
      offset: 0,
    },
  },
  getInternalTransfersById: {
    status: 'success',
    message: 'Fetched internal transfer successfully',
    payload: {
      client_reference_id: '6883122327947226',
      amount: '1.0000000000000000',
      currency: 'usdc',
      from_address: '0x6c875514E42F14B891399A6a8438E6AA8F77B178',
      destination_address: '0xF5F467c3D86760A4Ff6262880727E854428a4996',
      status: 'success',
      created_at: '2023-07-26T05:16:31.557629Z',
      updated_at: '2023-07-26T05:16:32.047285Z',
    },
  },
  getInternalTransfersByIdNotExist: {
    status: 'error',
    message: 'Transfer does not exist',
    payload: '',
  },
}
