import getlunoXBTPrices from "./luno.js"; //to call out the other functions that need to use here need import it
import rategetconverter from "./exchange_rate.js";
import getbinanceXBTPrices from "./binance.js";

export async function convertLunoToUsd() {
  try {
    const lunoMYR = await getlunoXBTPrices();
    const converter = await rategetconverter();
    const luno_USD = lunoMYR / converter;
    if (!isNaN(luno_USD)) {
      return +luno_USD;
    } else throw "Not a number";
  } catch (err) {
    if (err === "Not a number")
      return "Failed to calculate price of Luno in USD, please try again";
    throw err;
  }
}
//  console.log("4. Luno in USD:", luno_USD)

export async function percentageDifferent() {
  try {
    const lunoUSD = await convertLunoToUsd();
    const binanceUSD = await getbinanceXBTPrices();
    const priceDiff = lunoUSD - binanceUSD;
    const percentageDiff = (priceDiff / lunoUSD) * 100;
    if (!isNaN(percentageDiff)) {
      return +percentageDiff.toFixed(4);
    } else throw "Not a number";
  } catch (err) {
    if (err === "Not a number")
      return "Failed to retrieve percentage different data failed,please try again";
    throw err;
  }
}

export async function priceDifferent() {
  try {
    const lunoUSD = await convertLunoToUsd();
    const binanceUSD = await getbinanceXBTPrices();
    const diff = lunoUSD - binanceUSD;
    if (!isNaN(diff)) {
      return +diff;
    } else throw "Not a number";
  } catch (err) {
    if (err === "Not a number")
      return "Failed to retrieve price different, please try again";
    throw err;
  }
}
convertLunoToUsd();

//  console.log("5. Price different:", diff)
