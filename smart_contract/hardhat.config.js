const ACCOUNT_PRIVATE_KEY = import.meta.env.ACCOUNT_PRIVATE_KEY;
require("@nomiclabs/hardhat-waffle");
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/bf5urEmyLp5BM3h0dndLs1IKPHRZw9S7",
      accounts: [
        // take account private key from .env
        ACCOUNT_PRIVATE_KEY,
      ],
    },
  },
};
