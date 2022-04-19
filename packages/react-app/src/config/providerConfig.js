import { Mainnet } from "@usedapp/core";

export const providerConfig = {
  readOnlyChainId: Mainnet.chainId,
  readOnlyUrls: {
    [Mainnet.chainId]: "https://mainnet.infura.io/v3/" + process.env.INFURA_PROJECT_ID,
  },
}