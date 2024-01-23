//for error handling status test:
import rategetconverter from "../lib/exchange_rate.js";

const MOCK_RATE_STATUS = 400

global.fetch = jest.fn(() => Promise.resolve({
    status: 400,
    json: () => {}
  }));

test("retrieving exchange rate failed", async () => {
    expect(await rategetconverter()).toBe("retrieving exchange rate failed,please try again");
  });