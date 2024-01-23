import Binance from "node-binance-api";

export default async function binancePricesUSD(binanceCoins) {
if (binanceCoins === "XBT") {
binanceCoins = "BTC"
}
        const binance = new Binance();
        const ticker = await binance.prices(); 
        return +ticker[`${binanceCoins}BUSD`]
            }
          