
export default async function getlunoXBTPrices() {
    const lunoRes = await fetch("https://api.luno.com/api/1/ticker?pair=XBTMYR")

    const lunoXBTPrice = await lunoRes.json()
  //  console.log("1. ",lunoXBTPrice.last_trade)    // use console.log to print each function to test whether its works
    // console.log(typeof(+lunoXBTPrice.last_trade))
    return +lunoXBTPrice.last_trade
}