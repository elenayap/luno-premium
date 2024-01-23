import binancePricesUSD  from './lib/binance2.js'
import lunoPricesMYR from './lib/luno2.js'
import rategetconverter from './lib/exchange_rate.js'
import { LunoUsd, percentageDifferent, priceDifferent } from './lib/calculation1.js'
import { checkCryptoPrice } from './lib/user_prompt.js'


//To present all functions in one piece nicely
async function lunoBinance() {
  const userInput = await checkCryptoPrice()
  const lunoMYR = await lunoPricesMYR(userInput) //the parameter name must same as the variable name in this function 
  const exchangeRate = await rategetconverter()
  const convertRate= await LunoUsd(lunoMYR, exchangeRate)
  const binance = await binancePricesUSD(userInput)
  const priceDiff= await priceDifferent(convertRate,binance)
 const percentangeDiff = await percentageDifferent(convertRate,binance)
  console.log("MYR price on Luno:".padEnd(30), "MYR", lunoMYR)
  console.log("USDMYR:".padEnd(30), exchangeRate)
  console.log("USD price on Luno:".padEnd(30), "USD", convertRate)
  console.log("USD price on Binance:".padEnd(30), "USD", binance)
  console.log("Price difference:".padEnd(30), "USD", priceDiff)
  console.log("Luno premium:".padEnd(30), percentangeDiff,"%\n")

}
//checkCryptoPrice()  //call out function when want to get the things inside the function

async function loop() {
    while (true) {
       await lunoBinance()
       await new Promise(resolve => setTimeout(resolve, 3000))
    }
   
}
loop()