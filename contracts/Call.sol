// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;
import "hardhat/console.sol";

contract Receiver {
    event Received(address caller, uint amount, string message);

    fallback() external payable {
        console.log("======Receiver.fallback==============");
        console.log("fallback was called");
        console.log("msg.sender", msg.sender);
        console.log("msg.value", msg.value);
        emit Received(msg.sender, msg.value, "Fallback was called");
    }

    function foo(string memory _message, uint _x) public payable returns (uint) {
        console.log("======Receiver.foo==============");
        console.log("foo was called");
        console.log("msg.sender", msg.sender);
        console.log("msg.value", msg.value);
        console.log("_message", _message);
        emit Received(msg.sender, msg.value, _message);

        return  _x + 1;
    }
}

contract Caller {
    event Response(bool success, bytes data);

    // Let's imagine that contract B does not have the source code for
    // contract A, but we do know the address of A and the function to call.
    function testCallFoo(address payable _addr) public payable {
        // You can send ether and specify a custom gas amount
        (bool success, bytes memory data) = _addr.call{value: msg.value}(
            abi.encodeWithSignature("foo(string,uint256)", "call foo", 234)
        );
        emit Response(success, data);
        console.log("======Caller.testCallFoo==============");
        console.log("testCallFoo was called");

    }

    // Calling a function that does not exist triggers the fallback function.
    function testCallDoesNotExist(address _addr) public {
        (bool success, bytes memory data) = _addr.call(
            abi.encodeWithSignature("doesNotExist()")
        );

        emit Response(success, data);
        console.log("======Caller.testCallDoesNotExist==============");
        console.log("testCallDoesNotExist was called");
    }
}