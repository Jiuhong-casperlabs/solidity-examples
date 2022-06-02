const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Call", function () {
  it("Call", async function () {
    const Create2_C = await ethers.getContractFactory("Create2_C");
    const create2_C = await Create2_C.deploy();
    await create2_C.deployed();
    
    await create2_C.createDSalted(ethers.utils.formatBytes32String("123"), 123);

   
  });
});
