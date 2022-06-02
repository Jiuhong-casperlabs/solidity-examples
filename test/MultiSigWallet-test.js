const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("MultiSigWallet", function () {
  it("Should return the new count once it's changed", async function () {

    const accounts = await ethers.getSigners();
    const MultiSigWallet = await ethers.getContractFactory("MultiSigWallet");
    const multiSigWallet = await MultiSigWallet.deploy([accounts[0].address, accounts[1].address, accounts[2].address],3);
    await multiSigWallet.deployed();

    // submitTransaction
    await multiSigWallet.submitTransaction(multiSigWallet.address, 1, ethers.utils.toUtf8Bytes(345))
    
    console.log(await multiSigWallet.getTransactionCount());

    await multiSigWallet.connect(accounts[0]).confirmTransaction(0);
    await multiSigWallet.connect(accounts[1]).confirmTransaction(0);
    await multiSigWallet.connect(accounts[2]).confirmTransaction(0);
    await multiSigWallet.executeTransaction(0,{ value: ethers.utils.parseUnits("2", "ether") });

  });
});
