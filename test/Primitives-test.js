const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Primitives", function () {
  it("Should return the values", async function () {
    const Primitives = await ethers.getContractFactory("Primitives");
    const primitives = await Primitives.deploy();
    await primitives.deployed();

    expect(await primitives.u8()).to.equal(1);
    expect(await primitives.u256()).to.equal(456);
    expect(await primitives.u()).to.equal(123);

    expect(await primitives.i8()).to.equal(-1);
    expect(await primitives.i256()).to.equal(456);
    expect(await primitives.i()).to.equal(-123);



    expect(await primitives.addr()).to.equal("0xCA35b7d915458EF540aDe6068dFe2F44E8fa733c");

    expect(await primitives.a()).to.equal("0xb5");
    expect(await primitives.b()).to.equal("0x56");

    expect(await primitives.defaultBoo()).to.equal(false);
    expect(await primitives.defaultUint()).to.equal(0);
    expect(await primitives.defaultInt()).to.equal(0);
    expect(await primitives.defaultAddr()).to.equal("0x0000000000000000000000000000000000000000");

  });
});
