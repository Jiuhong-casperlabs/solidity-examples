const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Interface", function () {
  it("MyContract", async function () {
    const Inter_Counter = await ethers.getContractFactory("Inter_Counter");
    const inter_Counter = await Inter_Counter.deploy();
    const result = await inter_Counter.deployed();
    const inter_counter_address = result.address;

    const MyContract = await ethers.getContractFactory("MyContract");
    const myContract = await MyContract.deploy();
    await myContract.deployed();

    await myContract.incrementCounter(inter_counter_address);

    expect(await myContract.getCount(inter_counter_address)).to.equal(1);

  });
});
