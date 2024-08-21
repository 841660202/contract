import { ethers } from "hardhat";
import * as dotenv from "dotenv";

dotenv.config();

async function main() {
  const ContractFactory = await ethers.getContractFactory("Hello");
  const initialOwner = process.env.INITIAL_OWNER;
  if (!initialOwner) {
    throw new Error("Please set your INITIAL_OWNER in a .env file");
  }
  // TODO: Set addresses for the contract arguments below
  const instance = await ContractFactory.deploy(initialOwner);
  await instance.waitForDeployment();

  console.log(`Contract deployed to ${await instance.getAddress()}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
