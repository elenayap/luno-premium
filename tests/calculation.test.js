beforeEach(()=> {
    jest.resetModules()
})
jest.mock("../lib/luno.js", () => ({
        default: jest.fn(),
        getlunoXBTPrices: jest.fn() 
      }));
      
import {convertLunoToUsd, percentangeDifferent,priceDifferent} from "../lib/calculation.js";
import rategetconverter from "../lib/exchange_rate.js";
import getlunoXBTPrices from "../lib/luno.js";

test ("Returns mock LunoUSD is sucessful", async () => {
    
    jest.mock ("../lib/exchange_rate.js")

    getlunoXBTPrices.mockResolvedValue(100)
    rategetconverter.mockResolvedValue(4)

    expect(await convertLunoToUsd()).toBe(25)
   
})