const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("FunctionModifier", function () {
  it("Should return the new count once it's changed", async function () {
    const FunctionModifier = await ethers.getContractFactory("FunctionModifier");
    const functionModifier = await FunctionModifier.deploy();
    await functionModifier.deployed();

    await functionModifier.decrement(1)
  });
});
