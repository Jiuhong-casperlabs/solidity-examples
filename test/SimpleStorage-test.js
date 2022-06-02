const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("SimpleStorage", function () {
  it("Should return the new value once it's changed", async function () {
    const SimpleStorage = await ethers.getContractFactory("SimpleStorage");
    const simpleStorage = await SimpleStorage.deploy();
    await simpleStorage.deployed();

    expect(await simpleStorage.get()).to.equal(0);

    // increment count by 1
    const setSimpleStorage = await simpleStorage.set(12345679);

    // wait until the transaction is mined
    await setSimpleStorage.wait();

    expect(await simpleStorage.get()).to.equal(12345679);
  });
});
