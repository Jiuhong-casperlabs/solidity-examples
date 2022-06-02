const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Delegatecall", function () {
  it("Should return the new count once it's changed", async function () {
    const Delegatecall_B = await ethers.getContractFactory("Delegatecall_B");
    const delegatecall_B = await Delegatecall_B.deploy();
    await delegatecall_B.deployed();

    const Delegatecall_A = await ethers.getContractFactory("Delegatecall_A");
    const delegatecall_A = await Delegatecall_A.deploy();
    await delegatecall_A.deployed();

    await delegatecall_A.setVars(delegatecall_B.address ,123, {value:456});
  });
});
