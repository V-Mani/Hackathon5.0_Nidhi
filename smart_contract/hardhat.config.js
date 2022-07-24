require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/Zn3_i5rd2ETK4OhD9oPfYuFjlFFAghlT',
      accounts: ['b46cfbf9a2d24f077c7042e7a26aa3d7295c956eddae2c1c7be55449b56c40d9'],
    },
  },
};