export default async function lunoPricesMYR(lunoCoins) {
  if (lunoCoins === "BTC") {
    lunoCoins = "XBT";
  }
  const lunoResponse = await fetch(
    "https://api.luno.com/api/1/ticker?pair=" + lunoCoins + "MYR"
  );
  const lunoPrice = await lunoResponse.json(); //parse json response to extract the relevent infomation "pair=XBTMYR"
  return +lunoPrice.last_trade;
}
