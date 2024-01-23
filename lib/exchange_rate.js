export default async function rategetconverter() {
  // this part is API key
    var myHeaders = new Headers();
    myHeaders.append("apikey", "0HiMLEvxPl81CHlf8qbVfBxJ1QEChCsQ");
    
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
      headers: myHeaders
    };
    //step1:use try to get the API
  try {
     const exRate = await fetch("https://api.apilayer.com/exchangerates_data/convert?to=MYR&from=USD&amount=1", requestOptions)
     // step2:use IF else error handling check the API HTML is working 
     if (exRate.status === 200) {
      const convertRate = await exRate.json()
     // console.log(isNaN(convertRate.result))
      return +convertRate.result
     } else // step3: if the API not working, throw "fetch error"
     throw "fetch error" 
    } catch (err) { //step4: use catch errors if status is not 200 or if does not return a value of any kind
      if (err ="fetch error")
      return "retrieving exchange rate failed,please try again"; // return error message 
          }
          throw err; //step5: crashes the program in cases of error
    }
    
  rategetconverter()
  
      

  




  // export default async function rategetconverter() {
  //   var myHeaders = new Headers();
  //   myHeaders.append("apikey", "7ZkcQtaVmGS2RGicH1VvHluN6pmESFhv");
    
  //   var requestOptions = {
  //     method: 'GET',
  //     redirect: 'follow',
  //     headers: myHeaders
  //   };
    
  //  const exRate = await fetch("https://api.apilayer.com/exchangerates_data/convert?to=MYR&from=USD&amount=1", requestOptions)
  //  const convertRate = await exRate.json()
  // // console.log("3. ", convertRate.result)
  //     return +convertRate.result
  // }
  