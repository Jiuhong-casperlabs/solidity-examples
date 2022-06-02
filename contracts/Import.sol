// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

// import Foo.sol from current directory
import "./Foo.sol";

// import {symbol1 as alias, symbol2} from "filename";
// import {Unauthorized, add as func, Point} from "./Foo.sol";

contract Import {
    // Initialize Foo.sol
    Foo public foo = new Foo();

    // Test Foo.sol by getting it's name.
    function getName() public view returns (string memory) {
        return foo.name();
    }

    function myFunc(uint x, uint y) public pure returns (uint){
        uint result = add(x, y);
        return result;
    }

    function myFunc1() public pure returns (Point memory){
        Point memory point = Point({
            x: 2,
            y: 3
        });

        return point;
    }

    function myFunc2(uint x) public view {
        if (x == 0) {
            revert Unauthorized(msg.sender);
        }
    }
}