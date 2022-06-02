const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Enum", function () {
  it("Should return the new count once it's changed", async function () {
    const Enum = await ethers.getContractFactory("Enum");
    const enum1 = await Enum.deploy();
    await enum1.deployed();

    expect(await enum1.get()).to.equal(0);

    await enum1.set(2);
    expect(await enum1.get()).to.equal(2);

    await enum1.cancel();
    expect(await enum1.get()).to.equal(4);

    await enum1.reset();
    expect(await enum1.get()).to.equal(0);

  });
});
