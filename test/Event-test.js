const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Event", function () {
  it("Should emit events", async function () {
    const Event = await ethers.getContractFactory("Event");
    const event = await Event.deploy();
    await event.deployed();

    let tx = await event.test();

    let result = await tx.wait();
    console.log(result.events);

    
    await expect(await event.test())
      .to.emit(event, "Log")
      .withArgs('0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266',
      'Hello world!')
      ;
  });
});
