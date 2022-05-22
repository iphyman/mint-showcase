import { SupportedChainId } from "./chains";

export const NETWORK_CONTEXT_NAME = "NETWORK";
export interface BaseChainInfo {
  readonly blockExplorerUrls: string[];
  readonly chainName: string;
  readonly iconUrls: string[];
  readonly rpcUrls: string[];
  readonly nativeCurrency: {
    name: string;
    symbol: string;
    decimals: number;
  };
}

export const CHAIN_INFO: { [chainId: number]: BaseChainInfo } = {
  [SupportedChainId.MOONBEAM]: {
    blockExplorerUrls: ["https://moonscan.io"],
    chainName: "Moonbeam",
    iconUrls: [`/${SupportedChainId.MOONBEAM}.png`],
    rpcUrls: ["https://rpc.api.moonbeam.network"],
    nativeCurrency: { name: "Moonbeam", symbol: "GLMR", decimals: 18 },
  },
  [SupportedChainId.MOONRIVER]: {
    blockExplorerUrls: ["https://moonriver.moonscan.io"],
    chainName: "Moonriver",
    iconUrls: [`/${SupportedChainId.MOONRIVER}.png`],
    rpcUrls: ["https://rpc.api.moonriver.moonbeam.network"],
    nativeCurrency: {
      name: "Moonriver",
      symbol: "MOVR",
      decimals: 18,
    },
  },
  [SupportedChainId.MOONBASE_ALPHA]: {
    blockExplorerUrls: ["https://moonbase.moonscan.io"],
    chainName: "Moonbase Alpha",
    iconUrls: [`/${SupportedChainId.MOONBASE_ALPHA}.png`],
    rpcUrls: ["https://rpc.api.moonbase.moonbeam.network"],
    nativeCurrency: {
      name: "Dev",
      symbol: "DEV",
      decimals: 18,
    },
  },
};

export const NETWORK_URLS: { [chainId: number]: string } = Object.keys(
  CHAIN_INFO
).reduce<{ [chainId: number]: string }>((accumulator, chainId) => {
  const validRpcurls: string[] = CHAIN_INFO[Number(chainId)].rpcUrls;

  if (validRpcurls.length) {
    accumulator[Number(chainId)] = validRpcurls[0];
  }

  return accumulator;
}, {});

export const EXPLORER_URLS: { [chainId: number]: string } = Object.keys(
  CHAIN_INFO
).reduce<{ [chainId: number]: string }>((accumulator, chainId) => {
  const validUrl: string[] = CHAIN_INFO[Number(chainId)].blockExplorerUrls;

  if (validUrl.length) {
    accumulator[Number(chainId)] = validUrl[0];
  }

  return accumulator;
}, {});