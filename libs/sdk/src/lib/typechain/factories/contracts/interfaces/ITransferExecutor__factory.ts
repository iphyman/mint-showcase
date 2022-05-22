/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  ITransferExecutor,
  ITransferExecutorInterface,
} from "../../../contracts/interfaces/ITransferExecutor";

const _abi = [
  {
    inputs: [
      {
        internalType: "address payable",
        name: "to",
        type: "address",
      },
      {
        internalType: "address payable",
        name: "from",
        type: "address",
      },
    ],
    name: "transfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class ITransferExecutor__factory {
  static readonly abi = _abi;
  static createInterface(): ITransferExecutorInterface {
    return new utils.Interface(_abi) as ITransferExecutorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ITransferExecutor {
    return new Contract(address, _abi, signerOrProvider) as ITransferExecutor;
  }
}