const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("D_Inherit", function () {
  it("Should return the new count once it's changed", async function () {
    const D_Inherit = await ethers.getContractFactory("D_Inherit");
    const d_Inherit = await D_Inherit.deploy();
    await d_Inherit.deployed();

    expect(await d_Inherit.foo()).to.equal("C");
  });
});

describe("E_Inherit", function () {
  it("Should return the new count once it's changed", async function () {
    const E_Inherit = await ethers.getContractFactory("E_Inherit");
    const e_Inherit = await E_Inherit.deploy();
    await e_Inherit.deployed();

    expect(await e_Inherit.foo()).to.equal("B");
  });
});

describe("F_Inherit", function () {
  it("Should return the new count once it's changed", async function () {
    const F_Inherit = await ethers.getContractFactory("F_Inherit");
    const f_Inherit = await F_Inherit.deploy();
    await f_Inherit.deployed();

    expect(await f_Inherit.foo()).to.equal("B");
  });
});
