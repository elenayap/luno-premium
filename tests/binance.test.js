beforeEach(() => {
    jest.resetModules(); // reset module mocks before each test to not affect other tests in this file
  });
  
  test("Returns price if Binance request succeeds", async () => {
    // const MOCK_PRICE = 9
    const getbinanceXBTPrices = require('../lib/binance').default // use .default because binance module has export default

    // mocking the entire node-binance-api module
    jest.mock('node-binance-api', () => {
      const BTCBUSD = {BTCBUSD: 9};
      return class Binance {
        // we use only the prices method for this particular test, so we'll mock just this method
        prices() {
          return new Promise(res => res(BTCBUSD))
        }
      }
    })
  
    expect(await getbinanceXBTPrices()).toBe(9);
   // expect(await getbinanceXBTPrices).toBe(9);
  });