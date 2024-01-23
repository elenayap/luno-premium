import getlunoXBTPrices from "../lib/luno.js";
// purpose of test is to ensure that function correctly
// and API response successful and return BTC value

const MOCK_PRICE = 99 //set a mock price to expect the return value as this
// use jest.fn() is Jest mock function to simulate making API requests 
// without actually making any real network call
global.fetch = jest.fn(() => Promise.resolve({ //the mock function is set up to return a resolved Promise that emulates a successful
    status: 200, //set status to 200 indicate successful HTTP response
    json: () => Promise.resolve({ last_trade: MOCK_PRICE }) // a json method that returns another resolved Promise containing
    // mock BTC price object include with the key last_trade set to mock_price
  }));

test("Returns the BTC Price if successful", async () => {
    expect(await getlunoXBTPrices()).toBe(MOCK_PRICE); // the getlunoXBTPrice function is called,
    // and the test expects that the return value equal to the mock_price
  });

