const { expect } = require("chai");
const { ethers, waffle } = require("hardhat");

describe("SendingEther", function () {
  it("SendingEther", async function () {
    const [account0, account1] = await ethers.getSigners();
    const provider = waffle.provider;

    const SendEther = await ethers.getContractFactory("SendEther");
    const sendEther = await SendEther.deploy();
    await sendEther.deployed();

    // get balance of contract
    let balanceInWei = await provider.getBalance(sendEther.address);
    // Wei to Ethers
    let ethValue = ethers.utils.formatEther(balanceInWei);
    console.log("contract balance before is ",ethValue);

    await sendEther.sendViaCall(account0.address, { value: ethers.utils.parseUnits("2", "ether") })
    
    // get balance of account0
    balanceInWei_account0 = await provider.getBalance(account0.address);
    // Wei to Ethers
    ethValue_Account0 = ethers.utils.formatEther(balanceInWei_account0);
    console.log("account0 balance is ", ethValue_Account0);

    // get balance of contract
    balanceInWei = await provider.getBalance(sendEther.address);
    // Wei to Ethers
    ethValue = ethers.utils.formatEther(balanceInWei);
    console.log("contract balance after is ",ethValue);
  });
});

describe("ReceiveEther", function () {
  it("ReceiveEther", async function () {
    const [account0, account1] = await ethers.getSigners();
    const provider = waffle.provider;

    const ReceiveEther = await ethers.getContractFactory("ReceiveEther");
    const receiveEther = await ReceiveEther.deploy();
    await receiveEther.deployed();

    tx = {
      to: receiveEther.address,
      value: ethers.utils.parseEther('200', 'ether'),
      data: ethers.utils.toUtf8Bytes("hello"),
    };
    
    const transaction = await account0.sendTransaction(tx);

    
    // get balance of contract
    let balanceInWei = await provider.getBalance(receiveEther.address);
    // Wei to Ethers
    let ethValue = ethers.utils.formatEther(balanceInWei);
    console.log("contract balance is ", ethValue);
    
  });
});
