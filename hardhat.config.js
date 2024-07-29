require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.20",
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/",
      accounts: ["i1b222d3cf0c1298f7bffbdcd42d42e087774ac197d49acba4738cb3e14529b71"],
    },
  },
};
