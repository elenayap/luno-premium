// import getlunoPrices from "../luno1.js";
// import getbinancePrices from "./binance1.js";
// import rategetconverter from "./exchange_rate.js";

// shorten calculation code using parameter

export async function LunoUsd(lunoMYR, converter) {
  try {
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

export async function percentageDifferent(lunoUSD, binanceUSD) {
  try {
    const percentageDiff = ((lunoUSD - binanceUSD) / lunoUSD) * 100;
    if (!isNaN(percentageDiff)) {
      return +percentageDiff.toFixed(4);
    } else throw "Not a number";
  } catch (err) {
    if (err === "Not a number")
      return "Failed to calculate price of Luno in USD, please try again";
    throw err;
  }
}

export async function priceDifferent(lunoUSD, binanceUSD) {
  try {
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
LunoUsd();
