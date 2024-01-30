const hre = require("hardhat");

async function main() {
  const Flashloan = await hre.ethers.getContractFactory("Flashloan");
  /** @ref {Link}
   * https://docs.aave.com/developers/deployed-contracts/v3-testnet-addresses
   */
  const flashloan = await Flashloan.deploy("0x012bAC54348C0E635dCAc9D5FB99f06F24136C9A");

  await flashloan.waitForDeployment();

  const address = await flashloan.getAddress();
  console.log(`Flashloan deployed successfully to address ${address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
