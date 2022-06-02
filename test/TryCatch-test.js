const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("TryCatch_Bar", function () {
  it("TryCatch_Bar", async function () {
    const TryCatch_Bar = await ethers.getContractFactory("TryCatch_Bar");
    const tryCatch_Bar = await TryCatch_Bar.deploy();
    await tryCatch_Bar.deployed();

    // const tx = await tryCatch_Bar.tryCatchExternalCall(1);
    // const result = await tx.wait();
    // console.log(result.events);

    const tx1 = await tryCatch_Bar.tryCatchNewContract("0x0000000000000000000000000000000000000001");
    const result = await tx1.wait();
    console.log(result.events);
   
  });
});
