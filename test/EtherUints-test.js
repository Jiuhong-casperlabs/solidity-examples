const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("EtherUints", function () {
  it("Should return the values", async function () {
    const EtherUints = await ethers.getContractFactory("EtherUints");
    const etherUints = await EtherUints.deploy();
    await etherUints.deployed();

    console.log(await etherUints.oneWei());

    expect(await etherUints.isOneWei()).to.equal(true);

    console.log(await etherUints.oneEther());
    expect(await etherUints.isOneEther()).to.equal(true);
  });
});
