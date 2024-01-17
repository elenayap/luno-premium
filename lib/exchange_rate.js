export default async function rategetconverter() {
    var myHeaders = new Headers();
    myHeaders.append("apikey", "7ZkcQtaVmGS2RGicH1VvHluN6pmESFhv");
    
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
      headers: myHeaders
    };
    
   const exRate = await fetch("https://api.apilayer.com/exchangerates_data/convert?to=MYR&from=USD&amount=1", requestOptions)
   const convertRate = await exRate.json()
  // console.log("3. ", convertRate.result)
      return +convertRate.result
  }