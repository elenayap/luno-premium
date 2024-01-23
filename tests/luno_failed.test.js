import getlunoXBTPrices from "../lib/luno.js";
// to test API response failed and no return BTC value

const MOCK_STATUS = 99 //set mock_status as fail HTTP response
    
global.fetch = jest.fn(() => Promise.resolve({
        status: 99,
        json: () => {}
      }));
test("retrieving Luno data failed", async () => {  // to test HTTP failed response expect receive error message
        expect(await getlunoXBTPrices()).toBe("retrieving Luno data failed,please try again");
      });