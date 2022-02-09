const { BigNumber } = require("@ethersproject/bignumber");
const { expect } = require("chai");
const env = require("hardhat");
const { ethers } = require("hardhat");

const FACTORY = "0xa07dD2e9fa20C14C45A28978041b4c64e45f7f97";
const WETH = "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270";

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
