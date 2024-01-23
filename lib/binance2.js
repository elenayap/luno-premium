import Binance from "node-binance-api";

export default async function binancePricesUSD(binanceCoins) {

        const binance = new Binance();
        const ticker = await binance.prices(); 
        return +ticker["${binanceCoin}BUSD"]
            }