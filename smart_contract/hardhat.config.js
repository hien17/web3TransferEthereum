require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-waffle");
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    ropsten: {
      url: "https://eth-goerli.g.alchemy.com/v2/2abqqRPkYadCN41J2lUjF5peLYPLS8RL",
      accounts: [
        "c0bc171ed75934afa072a2c2101fdaee648af1ec7f7388e7811c9bb85779ed0e",
      ],
    },
  },
};
