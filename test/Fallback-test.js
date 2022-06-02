const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Fallback", function () {
  it("Fallback", async function () {
    const Fallback = await ethers.getContractFactory("Fallback");
    const fallback = await Fallback.deploy();
    await fallback.deployed();

    const fallbackAddress = fallback.address;

    const SentToFallback = await ethers.getContractFactory("SentToFallback");
    const sentToFallback = await SentToFallback.deploy();
    await sentToFallback.deployed();

    // // call transferToFallback
    // await sentToFallback.transferToFallback(fallbackAddress);

    // const balance = await fallback.getBalance();
    // console.log("balance is", balance);

    // call transferToFallback
    await sentToFallback.callFallback(fallbackAddress, {value: ethers.utils.parseUnits("0.5", "ether")});

    const balance = await fallback.getBalance();
    console.log("balance is", ethers.utils.formatEther(balance));
  });
});
