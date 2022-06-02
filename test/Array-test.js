const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Array", function () {
  it("Should return the new count once it's changed", async function () {
    const Array = await ethers.getContractFactory("Array");
    const array = await Array.deploy();
    await array.deployed();

    // expect(await array.get(1)).to.equal(0);

    let setArray = await array.push(5);
    setArray = await array.push(6);
    setArray = await array.push(7);

    await setArray.wait();

    let removeArray = await array.remove(0);
    await removeArray.wait();

    expect(await array.getLength()).to.equal(3);

  });
});

describe("ArrayRemoveByShifting", function () {
  it("Should return the new count once it's changed", async function () {
    const ArrayRemoveByShifting = await ethers.getContractFactory("ArrayRemoveByShifting");
    const arrayRemoveByShifting = await ArrayRemoveByShifting.deploy();
    await arrayRemoveByShifting.deployed();

    // expect(await array.get(1)).to.equal(0);

    let testArray = await arrayRemoveByShifting.test();

    await testArray.wait();

  });
});

describe("ArrayReplaceFromEnd", function () {
  it("Should return the new count once it's changed", async function () {
    const ArrayReplaceFromEnd = await ethers.getContractFactory("ArrayReplaceFromEnd");
    const arrayReplaceFromEnd = await ArrayReplaceFromEnd.deploy();
    await arrayReplaceFromEnd.deployed();

    // expect(await array.get(1)).to.equal(0);

    let testArray = await arrayReplaceFromEnd.test();

    await testArray.wait();

  });
});