const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Counter", function () {
  it("Should return the new count once it's changed", async function () {
    const Loop = await ethers.getContractFactory("Loop");
    const loop = await Loop.deploy();
    await loop.deployed();

    await loop.loop();
  });
});
