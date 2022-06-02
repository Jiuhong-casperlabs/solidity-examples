const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("TestSafeMath", function () {
  it("STestSafeMath", async function () {
    const TestSafeMath = await ethers.getContractFactory("TestSafeMath");
    const testSafeMath = await TestSafeMath.deploy();
    await testSafeMath.deployed();

    await testSafeMath.testAdd(1,2)
  });
});
