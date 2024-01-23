// import Binance from 'node-binance-api';
import getbinanceXBTPrices  from './lib/binance.js'
import getlunoXBTPrices from './lib/luno.js'
import rategetconverter from './lib/exchange_rate.js'
import { convertLunoToUsd, percentageDifferent, priceDifferent }  from './lib/calculation.js'
// import { LunoUsd, percentageDifferent, priceDifferent } from './lib/calculation1.js'



//To present all functions in one piece nicely
async function lunoBinance() {
  const lunoMYR = await getlunoXBTPrices()
  const exchangeRate = await rategetconverter()
  //const convertRate= await LunoUsd(lunoMYR, exchangeRate)
  const convertRate= await convertLunoToUsd()
  const binance = await getbinanceXBTPrices()
  const priceDiff= await priceDifferent()
  //const priceDiff= await priceDifferent(convertRate,binance)
  const percentangeDiff = await percentageDifferent()
 //const percentangeDiff = await percentageDifferent(convertRate,binance)
  console.log("BTCMYR price on Luno:", "      ","MYR", lunoMYR)
  console.log("USDMYR:", "                    ", exchangeRate)
  console.log("BTCUSD price on Luno:", "      ","USD", convertRate)
  console.log("BTCBUSD price on Binance:","  ","USD", binance)
  console.log("Price difference:", "          ","USD", priceDiff)
  console.log("Luno premium:", "              ", percentangeDiff,"%")
  return +lunoBinance
}
lunoBinance()