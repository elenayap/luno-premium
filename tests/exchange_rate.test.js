import rategetconverter from "../lib/exchange_rate.js";

const MOCK_RATE = 4

global.fetch = jest.fn(() => Promise.resolve({
    status: 200,
    json: () => Promise.resolve({ result: MOCK_RATE })
  }));

test("Returns the exchange rate if successful", async () => {
    expect(await rategetconverter()).toBe(MOCK_RATE);
  });
