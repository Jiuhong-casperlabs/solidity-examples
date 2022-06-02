const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Immutable", function () {
  it("Should return immutable values", async function () {
    const accounts = await ethers.getSigners()
    for (const account of accounts) {
      console.log(account.address);
    }


    const Immutable = await ethers.getContractFactory("Immutable");
    const immutable = await Immutable.connect(accounts[19]).deploy(12345);
    await immutable.deployed();

    console.log("======================")
    console.log(await immutable.MY_ADDRESS());
    console.log(await immutable.MY_UINT());

    

  });
});
