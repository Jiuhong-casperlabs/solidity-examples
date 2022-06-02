const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("CallingParentContracts_C", function () {
  it("Should emit events", async function () {
    const CallingParentContracts_C = await ethers.getContractFactory("CallingParentContracts_C");
    const callingParentContracts_C = await CallingParentContracts_C.deploy();
    await callingParentContracts_C.deployed();

    // call foo
    let tx_foo = await callingParentContracts_C.foo();

    let results_foo = await tx_foo.wait();

    // console.log(results.events);
    
    for (const result of results_foo.events) {
      console.log(result.args);
    }

    console.log("====================================")

     // call bar
     let tx_bar = await callingParentContracts_C.bar();

     let results_bar = await tx_bar.wait();
 
     // console.log(results.events);
     
     for (const result of results_bar.events) {
       console.log(result.args);
     }

  });
});

describe("CallingParentContracts_D", function () {
  it("Should emit events", async function () {
    const CallingParentContracts_D = await ethers.getContractFactory("CallingParentContracts_D");
    const callingParentContracts_D = await CallingParentContracts_D.deploy();
    await callingParentContracts_D.deployed();

    // call foo
    let tx_foo = await callingParentContracts_D.foo();

    let results_foo = await tx_foo.wait();

    // console.log(results.events);
    
    for (const result of results_foo.events) {
      console.log(result.args);
    }

    console.log("==================")

     // call bar
     let tx_bar = await callingParentContracts_D.bar();

     let results_bar = await tx_bar.wait();
 
     // console.log(results.events);
     
     for (const result of results_bar.events) {
       console.log(result.args);
     }

  });
});
