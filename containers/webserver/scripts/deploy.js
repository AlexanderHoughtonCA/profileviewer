
var { GITHUB_LINK } = process.env;

async function main() {
    const ProfileViewer = await ethers.getContractFactory("ProfileViewer");
 
    // Start deployment, returning a promise that resolves to a contract object
    const profile_viewer = await ProfileViewer.deploy(GITHUB_LINK);
    console.log("Contract deployed to address:", profile_viewer.address);
 }
 
 main()
   .then(() => process.exit(0))
   .catch(error => {
     console.error(error);
     process.exit(1);
   });


// npx hardhat run scripts/deploy.js --network sepolia   