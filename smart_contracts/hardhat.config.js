require('dotenv').config();
require('@nomiclabs/hardhat-ethers');
const { ALCHEMY_MUMBAI_API_URL, PRIVATE_KEY } = process.env;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: '0.8.17',
  defaultNetwork: 'mumbai',
  networks: {
    hardhat: {
      chainId: 1337,
    },
    mumbai: {
      url: ALCHEMY_MUMBAI_API_URL,
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
};
