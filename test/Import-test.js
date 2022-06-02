const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Counter", function () {
  it("Should return the new count once it's changed", async function () {
    const Import = await ethers.getContractFactory("Import");
    const importins = await Import.deploy();
    await importins.deployed();

    console.log(await importins.getName());

    console.log(await importins.myFunc(2, 5));

    console.log(await importins.myFunc1());

    await importins.myFunc2(1);
  });
});
