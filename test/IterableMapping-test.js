const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("testIterablemap", function () {
  it("testIterablemap", async function () {

    const Lib = await ethers.getContractFactory("IterableMapping");
    const lib = await Lib.deploy();
    await lib.deployed();

    const TestIterablemap = await ethers.getContractFactory("TestIterablemap" ,{
      libraries: {
        IterableMapping: lib.address,
      },
    });
    const testIterablemap = await TestIterablemap.deploy();
    await testIterablemap.deployed();

    await testIterablemap.testIterableMap();

  });
});
