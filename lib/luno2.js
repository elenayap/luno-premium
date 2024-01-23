
export default async function lunoPricesMYR(lunoCoins) {
if (lunoCoins === "BTC") {
    (lunoCoins = "XBT")
}
const lunoResponse = await fetch( "https://api.luno.com/api/1/ticker?pair=" + lunoCoins + "MYR") 
const lunoPrice = await lunoResponse.json();
return +lunoPrice.last_trade;
}


// export default async function lunoPricesMYR(lunoCoins) {
//     try {
//       const lunoResponse = await fetch(`https://api.luno.com/api/1/ticker?pair=${lunoCoins}MYR`);
//       const lunoPrice = await lunoResponse.json();
  
//       if (lunoPrice && lunoPrice.last_trade) {
//         return +lunoPrice.last_trade;
//       } else {
//         throw new Error('Invalid response from Luno API');
//       }
//     } catch (error) {
//       console.error('Error fetching Luno prices:', error.message);
//       throw error; // Rethrow the error to be caught by the caller
//     }
//   }