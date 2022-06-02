const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Mapping", function () {
  it("Should return the new values once it's changed", async function () {
    const accounts = await ethers.getSigners();
    const account_2 = accounts[2].address;

    const Mapping = await ethers.getContractFactory("Mapping");
    const mapping = await Mapping.deploy();
    await mapping.deployed();

    // get value before initialization
    expect(await mapping.get(account_2)).to.equal(0);

    // set value 
    const setMapping = await mapping.set(account_2,2);
    // wait until the transaction is mined
    await setMapping.wait();

    // get value
    expect(await mapping.get(account_2)).to.equal(2);

    // remove value
    const delMapping = await mapping.remove(account_2);
    // wait unitl the transaction is mined
    await delMapping.wait();
    // get value
    expect(await mapping.get(account_2)).to.equal(0)
  });
});

describe("NestedMapping", function () {
  it("Should return the new values once it's changed", async function () {
    const accounts = await ethers.getSigners();
    const account_2 = accounts[2].address;

    const NestedMapping = await ethers.getContractFactory("NestedMapping");
    const nestedMapping = await NestedMapping.deploy();
    await nestedMapping.deployed();

    // get value before initialization
    expect(await nestedMapping.get(account_2, 1)).to.equal(false);

    // set value 
    const setNestedMapping = await nestedMapping.set(account_2,1, true);
    // wait until the transaction is mined
    await setNestedMapping.wait();

    // get value
    expect(await nestedMapping.get(account_2,1)).to.equal(true);

    // remove value
    const delNestedMapping = await nestedMapping.remove(account_2,1);
    // wait unitl the transaction is mined
    await delNestedMapping.wait();
    // get value
    expect(await nestedMapping.get(account_2,1)).to.equal(false)
  });
});
