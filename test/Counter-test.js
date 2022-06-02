const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Counter", function () {
  it("Should return the new count once it's changed", async function () {
    const Counter = await ethers.getContractFactory("Counter");
    const counter = await Counter.deploy();
    await counter.deployed();

    expect(await counter.get()).to.equal(0);

    // increment count by 1
    const incCounter = await counter.inc();

    // wait until the transaction is mined
    await incCounter.wait();

    expect(await counter.get()).to.equal(1);

    // decrement count by 1
    const decCoutner = await counter.dec();
    await decCoutner.wait();
    expect(await counter.get()).to.equal(0);
  });
});
