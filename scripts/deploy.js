const { BigNumber } = require("@ethersproject/bignumber");
const { expect } = require("chai");
const env = require("hardhat");
const { ethers } = require("hardhat");

const FACTORY = "0x508B1F76B67381D8BF3aD24E4BFdC7109B03d7a2";
const WETH = "0x22104669DA1a0a1B3631EdDee6b1B4d41c521F83";

async function main() {
    [deployer] = await ethers.getSigners();
    console.log(
        "Deploying contracts with the account:",
        deployer.address
    );
    
    console.log("Account balance:", (await deployer.getBalance()).toString());

    const NasdexSwapRouter = await ethers.getContractFactory("NasdexSwapRouter");
    const instance = await NasdexSwapRouter.deploy(FACTORY, WETH);

    console.log("NasdexSwapRouter address: " + instance.address);
}

main().then(() => process.exit(0)).catch(error => {
    console.error(error);
    process.exit(1);
});