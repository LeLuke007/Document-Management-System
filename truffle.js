'use strict';
const fullPathBuildDirectory = `${__dirname}/src/assets/abis`;

module.exports = {
  contracts_build_directory: fullPathBuildDirectory, // eslint-disable-line
  networks: {
    development: {
      host: '127.0.0.1',
      port: 8545,
      // Match any network id
      network_id: '*' // eslint-disable-line camelcase
    }
  }
};
