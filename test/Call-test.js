const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Call", function () {
  it("Call", async function () {
    const Receiver = await ethers.getContractFactory("Receiver");
    const receiver = await Receiver.deploy();
    await receiver.deployed();

    const receiverAddress = receiver.address;

    const Caller  = await ethers.getContractFactory("Caller");
    const caller = await Caller.deploy();
    await caller.deployed();

    // call testCallDoesNotExist
    // let tx = await caller.testCallDoesNotExist(receiverAddress);

    // call testCallFoo
    const tx = await caller.testCallFoo(receiverAddress, { value: 1 });

    let result = await tx.wait();
    console.log(result.events);
   
  });
});
