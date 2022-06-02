const { expect } = require("chai");
const { ethers,waffle } = require("hardhat");

describe("Payable", function () {
  it("Payable", async function () {
    const [account0, account1] = await ethers.getSigners();
    const provider = waffle.provider;

    // get balance of account
    let balanceInWei_account0 = await provider.getBalance(account0.address);
    // Wei to Ethers
    let ethValue_Account0 = ethers.utils.formatEther(balanceInWei_account0);
    console.log("account0 balance is ",ethValue_Account0);

    const Payable = await ethers.getContractFactory("Payable");
    const payable = await Payable.deploy();
    await payable.deployed();

    // deposit 2 ethers to contract
    await payable.deposit({value:ethers.utils.parseUnits("2","ether")});

    
    // get balance of contract
    let balanceInWei = await provider.getBalance(payable.address);
    // Wei to Ethers
    let ethValue = ethers.utils.formatEther(balanceInWei);
    console.log("contract balance is ",ethValue);

    // get balance of account0
    balanceInWei_account0 = await provider.getBalance(account0.address);
    // Wei to Ethers
    ethValue_Account0 = ethers.utils.formatEther(balanceInWei_account0);
    console.log("account0 balance after deposit is ", ethValue_Account0);
    
    // transfer 0.5 ether to account1
    await payable.transfer(account1.address, ethers.utils.parseUnits("0.5", "ether"));
    // get balance of contract
    balanceInWei = await provider.getBalance(payable.address);
    // Wei to Ethers
    ethValue = ethers.utils.formatEther(balanceInWei);
    console.log("contract balance after transfer is ",ethValue);

    // get balance of account1
    const balanceInWei_account1 = await provider.getBalance(account1.address);
    // Wei to Ethers
    const ethValue_Account1 = ethers.utils.formatEther(balanceInWei_account1);
    console.log("account1 balance after transfer is", ethValue_Account1);

    // withdraw balance to owner
    await payable.withdraw();
    
    // get balance of account0
    balanceInWei_account0 = await provider.getBalance(account0.address);
    // Wei to Ethers
    ethValue_Account0 = ethers.utils.formatEther(balanceInWei_account0);
    console.log("account0 balance after withdraw is", ethValue_Account0);

  });
});
