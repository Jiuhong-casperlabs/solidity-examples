const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Todos", function () {
  it("Should return the new count once it's changed", async function () {
    const Todos = await ethers.getContractFactory("Todos");
    const todos = await Todos.deploy();
    await todos.deployed();

    await todos.create("helloworld");

    console.log(await todos.get(0));
    console.log(await todos.get(1));
    console.log(await todos.get(2));
    console.log(await todos.get(3));

    await todos.updateText(1, "Iamhere");
    console.log(await todos.get(0));
    console.log(await todos.get(1));
    console.log(await todos.get(2));
    console.log(await todos.get(3));

    await todos.toggleCompleted(0);
    console.log(await todos.get(0));
  });
});
