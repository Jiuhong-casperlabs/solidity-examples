const {
  expect,
} = require("chai");

const {
  ethers,
} = require("hardhat");

describe("SampleNft", () => {
  beforeEach(async () => {
    signers = await ethers.getSigners();

    const Lib = await ethers.getContractFactory("TokenTrait");
    const lib = await Lib.deploy();
    await lib.deployed();

    const contractFactory = await ethers.getContractFactory("SampleNft", {
      signer: signers[0],
      libraries: {
        TokenTrait: lib.address,
      },
    });

    contract = await contractFactory.deploy();
  });

  it("should be able to return token name by token id", async () => {
    await contract.deployed();

    await contract.getName();
  });
});
// const { expect } = require("chai");
// const { ethers } = require("hardhat");

// describe("testIterablemap", function () {
//   it("testIterablemap", async function () {

//     const Lib = await ethers.getContractFactory("TokenTrait");
//     const lib = await Lib.deploy();
//     await lib.deployed();

//     const SampleNft = await ethers.getContractFactory("SampleNft" ,{
//       libraries: {
//         TokenTrait: lib.address,
//       },
//     });
//     const sampleNft = await SampleNft.deploy();
//     await sampleNft.deployed();

//     await sampleNft.mint();

//   });
// });
