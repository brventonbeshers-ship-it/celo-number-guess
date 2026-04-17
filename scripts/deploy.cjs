const hre = require("hardhat");

async function main() {
  const CeloNumberGuess = await hre.ethers.getContractFactory("CeloNumberGuess");
  console.log("Deploying CeloNumberGuess to Celo mainnet...");
  const contract = await CeloNumberGuess.deploy();
  await contract.waitForDeployment();

  const address = await contract.getAddress();
  console.log(`CeloNumberGuess deployed to: ${address}`);

  console.log("Waiting for CeloScan indexing...");
  await new Promise((resolve) => setTimeout(resolve, 30000));

  try {
    await hre.run("verify:verify", { address, constructorArguments: [] });
    console.log("Verified on CeloScan");
  } catch (error) {
    console.log("Verification failed:", error.message);
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
