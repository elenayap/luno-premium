// import Binance from 'node-binance-api';
import getbinanceXBTPrices  from './lib/binance.js'
import getlunoXBTPrices from './lib/luno.js'
import rategetconverter from './lib/exchange_rate.js'
import { convertLunoToUsd,percentangeDifferent, priceDifferent }  from './lib/calculation.js'

// import priceDifferent from './lib/price_different.js'
// import percentangeDifferent from './lib/percentage_different.js'



// To get luno price
// async function getlunoXBTPrices() {
//     const lunoRes = await fetch("https://api.luno.com/api/1/ticker?pair=XBTMYR")

//     const lunoXBTPrice = await lunoRes.json()
//   //  console.log("1. ",lunoXBTPrice.last_trade)    // use console.log to print each function to test whether its works
//     // console.log(typeof(+lunoXBTPrice.last_trade))
//     return +lunoXBTPrice.last_trade
// }
//  getlunoXBTPrices();

 // To get binance price
// async function getbinanceXBTPrices() {
//     const binance = new Binance()
//     // binance.prices('BNBBTC', (error, ticker) => {
//     //     console.info("Price of BNB: ", ticker.BNBBTC);
//     //   });
//     let ticker = await binance.prices();
// // console.info("2. ",ticker.BTCBUSD);
// return +ticker.BTCBUSD
// }
// getbinanceXBTPrices();

// To get converter rate for USD
// async function rategetconverter() {
//   var myHeaders = new Headers();
//   myHeaders.append("apikey", "7ZkcQtaVmGS2RGicH1VvHluN6pmESFhv");
  
//   var requestOptions = {
//     method: 'GET',
//     redirect: 'follow',
//     headers: myHeaders
//   };
  
//  const exRate = await fetch("https://api.apilayer.com/exchangerates_data/convert?to=MYR&from=USD&amount=1", requestOptions)
//  const convertRate = await exRate.json()
// // console.log("3. ", convertRate.result)
//     return +convertRate.result
// }
// rategetconverter()

// To get the luno price convert to UDS
// async function convertLunoToUsd() {
//    const var1 = await getlunoXBTPrices()
//    const var2 = await rategetconverter()
//    const var3 = var1 / var2
//   //  console.log("4. Luno in USD:", var3)
//    return +var3
//  }
// convertLunoToUsd()

// To get the price different compare from luno to binance
// async function priceDifferent() {
//   const lunoUSD = await convertLunoToUsd()
//   const binanceUSD = await getbinanceXBTPrices()
//   const diff = lunoUSD - binanceUSD
// //  console.log("5. Price different:", diff)
//   return +diff
// }
// priceDifferent()

// To get the percentange different from luno to binance
// async function percentangeDifferent() {
//   const lunoUSD = await convertLunoToUsd()
//  // console.log(lunoUSD)
//   const binanceUSD = await getbinanceXBTPrices()
//  // console.log(binanceUSD)
//   const priceDiff = lunoUSD - binanceUSD
//   const percentangeDiff = ((priceDiff/ lunoUSD) *100)
// //  console.log(percentangeDiff.toFixed(4), "%")
//   return +percentangeDiff.toFixed(4)
// }
// percentangeDifferent()

//To present all functions in one piece nicely
async function lunoBinance() {
  const lunoMYR = await getlunoXBTPrices()
  const exchangeRate = await rategetconverter()
  const convertRate= await convertLunoToUsd()
  const binance = await getbinanceXBTPrices()
  const priceDiff= await priceDifferent()
  const percentangeDiff = await percentangeDifferent()
  console.log("BTCMYR price on Luno:", "      ","MYR", lunoMYR)
  console.log("USDMYR:", "                    ", exchangeRate)
  console.log("BTCUSD price on Luno:", "      ","USD", convertRate)
  console.log("BTCBUSD price on Binance:","  ","USD", binance)
  console.log("Price difference:", "          ","USD", priceDiff)
  console.log("Luno premium:", "              ", percentangeDiff,"%")
  return +lunoBinance
}
lunoBinance()