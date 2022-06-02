const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("IfElse", function () {
  it("Should return expected values", async function () {
    const IfElse = await ethers.getContractFactory("IfElse");
    const ifelse = await IfElse.deploy();
    await ifelse.deployed();

    expect(await ifelse.foo(1)).to.equal(0);
    expect(await ifelse.foo(11)).to.equal(1);
    expect(await ifelse.foo(21)).to.equal(2)

    expect(await ifelse.ternary(1)).to.equal(0);
    expect(await ifelse.ternary(11)).to.equal(1);
    expect(await ifelse.ternary(21)).to.equal(2);
  });
});
