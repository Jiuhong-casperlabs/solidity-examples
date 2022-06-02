const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("InheritedStateVariables", function () {
  it("Should return the new count once it's changed", async function () {
    const InheritedStateVariables_C = await ethers.getContractFactory("InheritedStateVariables_C");
    const inheritedStateVariables_C = await InheritedStateVariables_C.deploy();
    await inheritedStateVariables_C.deployed();

    expect(await inheritedStateVariables_C.getName()).to.equal("Contract C");
  });
});
