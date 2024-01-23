export default async function getlunoXBTPrices() {
  //step1:use try to get the API
  try {
    const lunoRes = await fetch(
      "https://api.luno.com/api/1/ticker?pair=XBTMYR"
    ); //get the price pair for BTC in MYR
    // step2:use IF else error handling check the API HTML is working
    if (lunoRes.status === 200) {
      const lunoXBTPrice = await lunoRes.json();
      //  console.log (isNaN(lunoXBTPrice.last_trade))
      return +lunoXBTPrice.last_trade; // if the API HTML is working,return the value of the last_trade BTC price in MYR
    } // step3: if the API not working, throw "fetch error"
    else throw "fetch error";
  } catch (err) {
    //step4: use catch errors if status is not 200 or if does not return a value of any kind
    if (err == "fetch error") {
      return "retrieving Luno data failed,please try again"; //then return error message
    }
    throw err; //step5: crashes the program in cases of error
  }
  getlunoXBTPrices();
}

// export default async function getlunoXBTPrices() {
//   const lunoRes = await fetch("https://api.luno.com/api/1/ticker?pair=XBTMYR")
//   const lunoXBTPrice = await lunoRes.json()
// //  console.log("1. ",lunoXBTPrice.last_trade)    // use console.log to print each function to test whether its works
//   // console.log(typeof(+lunoXBTPrice.last_trade))
//   return +lunoXBTPrice.last_trade
