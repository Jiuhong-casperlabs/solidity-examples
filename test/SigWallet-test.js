const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("MultiSigWallet", function () {
  it("Should return the new count once it's changed", async function () {

    const accounts = await ethers.getSigners();
    const SigWallet = await ethers.getContractFactory("SigWallet");
    const sigWallet = await SigWallet.deploy();
    await sigWallet.deployed();

    // submitTransaction
    await sigWallet.submitTransaction(accounts[1].address, ethers.utils.parseUnits("2", "ether"), ethers.utils.toUtf8Bytes(345))
    

    await sigWallet.executeTransaction(0,{ value: ethers.utils.parseUnits("2", "ether") });

  });
});
