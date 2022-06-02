const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Gas", function () {
  it("Should not execute function forever", async function () {
    const Gas = await ethers.getContractFactory("Gas");
    const gas = await Gas.deploy();
    await gas.deployed();

    await gas.forever();
    
  });
});
