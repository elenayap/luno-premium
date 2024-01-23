import Binance from "node-binance-api";

export default async function getbinanceXBTPrices() {

  //step1:use try to get the API
    try {
        const binance = new Binance();
        const ticker = await binance.prices(); // get the price of coins on binance
    // step2:use error handling IF else to check the price of BTC is not NaN then return a number value
        if (!isNaN(ticker.BTCBUSD)) {
        //   console.log(isNaN(ticker.BTCBUSD));
          return +ticker.BTCBUSD;
        } else // step3: if value return is NaN then throw "fetch error"
        throw "fetch error";
      } catch (err) { // step4:use catch error to if unexpected error such as Nan or empty value,then return error message
        if (err == "fetch error") {
          return "Retrieving data failed, please try again"; 
        }
        throw err;//step5: crashes the program in cases of error
      }
    }
    
    getbinanceXBTPrices();



// binance.prices('BNBBTC', (error, ticker) => {
//     console.info("Price of BNB: ", ticker.BNBBTC);
//   });

// console.info("2. ",ticker.BTCBUSD);
// return +ticker.BTCBUSD
// }
