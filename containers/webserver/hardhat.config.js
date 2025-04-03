/** @type import('hardhat/config').HardhatUserConfig */

require('dotenv').config();
require("@nomiclabs/hardhat-ethers");

var { API_URL, PRIVATE_KEY, CHAIN_ID } = process.env;

module.exports = {
  solidity: "0.7.3",
  defaultNetwork: "sepolia",
   networks: {
      hardhat: {},
      sepolia: {
         chainId: CHAIN_ID,
         url: API_URL,
         accounts: [`0x${PRIVATE_KEY}`]
      }
   },
};

