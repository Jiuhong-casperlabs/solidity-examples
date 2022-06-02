// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

/* Inheritance tree
   A
 /  \
B   C
 \ /
  D
*/

contract CallingParentContracts_A {
    // This is called an event. You can emit events from your function
    // and they are logged into the transaction log.
    // In our case, this will be useful for tracing function calls.
    event Log(string message);

    function foo() public virtual {
        emit Log("A.foo called");
    }

    function bar() public virtual {
        emit Log("A.bar called");
    }
}

contract CallingParentContracts_B is CallingParentContracts_A{
    function foo() public virtual override {
        emit Log("B.foo called");
        CallingParentContracts_A.foo();
    }

    function bar() public virtual override {
        emit Log("B.Bar called");
        super.bar();
    }
} 

contract CallingParentContracts_C is CallingParentContracts_A {
    function foo() public virtual override {
        emit Log("C.foo called");
        CallingParentContracts_A.foo();
    }

    function bar() public virtual override {
        emit Log("C.bar called");
        super.bar();
    }
}

contract CallingParentContracts_D is CallingParentContracts_B, CallingParentContracts_C {
    // Try:
    // - Call D.foo and check the transaction logs.
    // Although D inherits A, B and C, it only called C and then A.
    // - Call D.bar and check the transaction logs
    // D called C, then B, and finally A.
    // Although super was called twice (by B and C) it only called A once.

    function foo() public override(CallingParentContracts_B,CallingParentContracts_C) {
        super.foo();
    }

    function bar() public override(CallingParentContracts_B, CallingParentContracts_C) {
        super.bar();
    }
}