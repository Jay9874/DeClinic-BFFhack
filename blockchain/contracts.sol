// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity 0.8.19;

contract SimpleStorage{
    uint x;

    function get() public view returns (uint) {
        return x;
    }

    function set(uint _x) public {
        x = _x;
    }
}