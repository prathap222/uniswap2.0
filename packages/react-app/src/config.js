import { Goerli } from "@usedapp/core";

export const ROUTER_ADDRESS = "0x9d0E5A2E4148e18d5b74c43d6f768c9D39E81dD4"; 

export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]: "https://eth-goerli.g.alchemy.com/v2/3SPv8yuFd06G-6HRSuCgfwtIPJluerFD",
  },
};