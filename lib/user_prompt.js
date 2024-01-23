import promptSync from 'prompt-sync';
import binancePricesUSD from './binance2.js';
import lunoPricesMYR from './luno2.js';

const prompt = promptSync();

async function checkCryptoPrice() {
    const userInput = prompt("Enter cryptocurrency name:");
    const lunoCoins = await lunoPricesMYR(userInput);
    const binanceCoins = await binancePricesUSD(userInput);
console.log(`Luno Price for ${userInput}: MYR ${lunoCoins}\nBinance Price for ${userInput}: USD ${binanceCoins}`);
}
checkCryptoPrice()





