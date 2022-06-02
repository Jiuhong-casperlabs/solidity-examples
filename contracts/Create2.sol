// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract Create2_D {
    uint public x;
    constructor(uint a) {
        x = a;
    }
}

contract Create2_C {
    function createDSalted(bytes32 salt, uint arg) public{
        // This complicated expression just tells you how the address
        // can be pre-computed. It is just there for illustration.
        // You actually only need `new D{salt: salt}(arg)`.
        address predictedAddress = address(uint160(uint(keccak256(abi.encodePacked(
            bytes1(0xff),
            address(this),
            salt,
            keccak256(abi.encodePacked(
                type(Create2_D).creationCode,
                abi.encode(arg)
            ))
        )))));

        Create2_D d = new Create2_D{salt: salt}(arg);
        require(address(d) == predictedAddress);
    }
}