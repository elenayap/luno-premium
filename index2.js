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
//   const convertRate= await convertLunoToUsd()
  const binance = await binancePricesUSD(userInput)
//   const priceDiff= await priceDifferent()
  const priceDiff= await priceDifferent(convertRate,binance)
  //const percentangeDiff = await percentageDifferent()
 const percentangeDiff = await percentageDifferent(convertRate,binance)
  console.log("BTCMYR price on Luno:", "      ","MYR", lunoMYR)
  console.log("USDMYR:", "                    ", exchangeRate)
  console.log("BTCUSD price on Luno:", "      ","USD", convertRate)
  console.log("BTCBUSD price on Binance:","  ","USD", binance)
  console.log("Price difference:", "          ","USD", priceDiff)
  console.log("Luno premium:", "              ", percentangeDiff,"%\n")

}


async function loop() {
    while (true) {
       await lunoBinance()
       await new Promise(resolve => setTimeout(resolve, 3000))
    }
   
}
loop()