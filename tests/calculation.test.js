beforeEach(()=> {
    jest.resetModules()
})


test ("Returns mock LunoUSD is sucessful", async () => {
    //import require modules for luno to USD
    const { convertLunoToUsd }  = require("../lib/calculation.js")
    const getlunoXBTPrices = require("../lib/luno.js").default  //need to use common js way because the function is export default 
    const rategetconverter = require("../lib/exchange_rate.js").default

    jest.mock ("../lib/luno.js")
    jest.mock ("../lib/exchange_rate.js")

//used mockResolvedValue when mocking an asynchronous function that returns a promise.
//useful when dealing with functions that perform asynchronous operations, such as making API requests.
    getlunoXBTPrices.mockResolvedValue(100) 
    rategetconverter.mockResolvedValue(4)

    expect(await convertLunoToUsd()).toBe(25)
   
})

// const MOCK_PD = 90;
// test("Return expected price different if successful", async () => {
//     const { priceDifferent } = require("../lib/calculation.js");

//     jest.mock("../lib/calculation.js", () => ({
//         priceDifferent: jest.fn().mockResolvedValue(MOCK_PD),
//     }));

//     expect(priceDifferent()).resolves.toBe(MOCK_PD);
// });

// const MOCK_LPM = 90;
// test("Return expected Luno Premium if successful", async () => {
//     const { percentageDifferent } = require("../lib/calculation.js");

//     jest.mock("../lib/calculation.js", () => ({
//         percentageDifferent: jest.fn().mockResolvedValue(MOCK_LPM),
//     }));

//     expect(percentageDifferent()).resolves.toBe(MOCK_LPM);
// });


test("Return expected price different in console if all is successful", async () => {
    const priceDiff = require("../lib/calculation.js").priceDifferent
    const MOCK_PD = 5;
    jest.mock('../lib/calculation.js', () =>{
        return {
            priceDifferent() {
                return new Promise(res => res(MOCK_PD))
            }
        }
    })
})  

test("Return expected Percentage different in console if all is successful", async () => {
    const percentageDiff = require("../lib/calculation.js").percentageDifferent
    const MOCK_LunoPM = 5;
    jest.mock('../lib/calculation.js', () =>{
        return {
            percentageDifferent() {
                return new Promise(res => res(MOCK_LunoPM))
            }
        }
    })
})  





