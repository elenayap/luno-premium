//for error handling status test:
beforeEach(() => {
    jest.resetModules(); 
  });
  
  test("Returns price if Binance request succeeds", async () => {
    // const MOCK_PRICE = 9
    const getbinanceXBTPrices = require('../lib/binance').default 

    jest.mock('node-binance-api', () => {
      const BTCBUSD = {BTCBUSD: 9};
      return class Binance {
        prices() {
          return new Promise(res => res("Retrieving data failed, please try again"))
        }
      }
    })
  
    expect(await getbinanceXBTPrices()).toBe("Retrieving data failed, please try again");
  });