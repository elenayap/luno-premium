beforeEach(()=> {
    jest.resetModules()
})

//do integration test in 1 test line("")
test("Returns if all working successful", async () => {
//first mock luno in MYR
    const lunoBinance = require("../index.js").lunoBinance
    const MOCK_LUNOPRICE = 100000
    jest.mock("../index.js", () => {
        return {
            lunoBinance(){
                return new Promise(res => res(MOCK_LUNOPRICE))
            }
        }
    })
//second mock rate
  const MOCK_RATE = 4
  jest.mock("../lib/exchange_rate.js"), () => {
    return {
        rategetconverter() {
            return new promise(res => res(MOCK_RATE))
        }
    }
  }

//third mock binance price
const MOCK_BINANCEPRICE = 200000
jest.mock("../lib/binance.js"), () => {
  return {
    getbinanceXBTPrices() {
          return new promise(res => res(MOCK_BINANCEPRICE))
      }
  }
}

//fourth set variable lunousd to calculation, set variable price diff calculation, set variable percentage diff calculation
const lunoUSD = MOCK_LUNOPRICE / MOCK_RATE
const price_Diff = lunoUSD - MOCK_BINANCEPRICE
const Luno_Premium =((price_Diff / lunoUSD) *100)

//must add this code: console.log = jest.fn(() => undefined)  //replaces the real console.log implementation with a mock function that does nothing (return undefined).
// the purpose of this mock is to track if and how the console.log method is called during the test, without actually logging anything to the console.

console.log = jest.fn(()=> undefined)

//now await lunoBinance()
await lunoBinance()

console.log("BTCMYR price on Luno:".padEnd(30), "MYR", MOCK_LUNOPRICE)
console.log("USDMYR:".padEnd(30), MOCK_RATE)
console.log("BTCUSD price on Luno:".padEnd(30),"USD", lunoUSD)
console.log("BTCBUSD price on Binance:".padEnd(30), "USD", MOCK_BINANCEPRICE)
console.log("Price difference:".padEnd(30), "USD", price_Diff)
console.log("Luno premium:".padEnd(30), Luno_Premium,"%")

});


//last part write each console.log //to verify that console.log method was called with the expected message as an argument
//expect(console.log).toHaveBeenCalledWith("vsadvdf".padEnd(30) + "MYR" + MOCK_LUNOPRICE)
//this padEnd(30) is to make print it out with same allignment
