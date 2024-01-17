import getlunoXBTPrices from "./luno.js" //to call out the other functions that need to use here need import it 
import rategetconverter from "./exchange_rate.js"
import getbinanceXBTPrices from "./binance.js"


export async function convertLunoToUsd() {
    const var1 = await getlunoXBTPrices()
    const var2 = await rategetconverter()
    const var3 = var1 / var2
   //  console.log("4. Luno in USD:", var3)
    return +var3
  }

  export async function percentangeDifferent() {
    const lunoUSD = await convertLunoToUsd()
   // console.log(lunoUSD)
    const binanceUSD = await getbinanceXBTPrices()
   // console.log(binanceUSD)
    const priceDiff = lunoUSD - binanceUSD
    const percentangeDiff = ((priceDiff / lunoUSD) *100)
  //  console.log(percentangeDiff.toFixed(4), "%")
    return +percentangeDiff.toFixed(4)
  }
  
  export async function priceDifferent() {
    const lunoUSD = await convertLunoToUsd()
    const binanceUSD = await getbinanceXBTPrices()
    const diff = lunoUSD - binanceUSD
  //  console.log("5. Price different:", diff)
    return +diff
  }