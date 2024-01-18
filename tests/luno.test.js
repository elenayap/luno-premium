import getlunoXBTPrices from "../lib/luno.js";

const MOCK_PRICE = 99

global.fetch = jest.fn(() => Promise.resolve({
    status: 200,
    json: () => Promise.resolve({ last_trade: MOCK_PRICE })
  }));

test("Returns the BTC Price if successful", async () => {
    expect(await getlunoXBTPrices()).toBe(MOCK_PRICE);
  });

