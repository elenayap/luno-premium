import Binance from 'node-binance-api';

export default async function getbinanceXBTPrices() {
    const binance = new Binance()
    // binance.prices('BNBBTC', (error, ticker) => {
    //     console.info("Price of BNB: ", ticker.BNBBTC);
    //   });
    let ticker = await binance.prices();
// console.info("2. ",ticker.BTCBUSD);
return +ticker.BTCBUSD
}