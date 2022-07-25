/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  ERC721Mintable,
  ERC721MintableInterface,
} from "../../contracts/ERC721Mintable";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
      {
        internalType: "string",
        name: "baseURI",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "baseURI",
        type: "string",
      },
    ],
    name: "BaseURIUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "isAuthorized",
        type: "bool",
      },
    ],
    name: "DefaultApproval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "creator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "string",
        name: "tokenURI",
        type: "string",
      },
    ],
    name: "Minted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "SetTokenCreator",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint96",
        name: "feeNumerator",
        type: "uint96",
      },
    ],
    name: "SetTokenRoyalty",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getCreator",
    outputs: [
      {
        internalType: "address payable",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "tokenURI_",
        type: "string",
      },
    ],
    name: "mint",
    outputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "tokenURI_",
        type: "string",
      },
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        internalType: "uint96",
        name: "feeNumerator",
        type: "uint96",
      },
    ],
    name: "mintWithRoyalty",
    outputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_salePrice",
        type: "uint256",
      },
    ],
    name: "royaltyInfo",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenByIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenOfOwnerByIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620026c5380380620026c58339810160408190526200003491620002b0565b828262000041336200008e565b81516200005690600390602085019062000130565b5080516200006c90600490602084019062000130565b5050506200008081620000de60201b60201c565b5050600160115550620003b2565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b8051620000f390600f90602084019062000130565b507f6741b2fc379fad678116fe3d4d4b9a1a184ab53ba36b86ad0fa66340b1ab41ad8160405162000125919062000341565b60405180910390a150565b8280546200013e9062000376565b90600052602060002090601f016020900481019282620001625760008555620001ad565b82601f106200017d57805160ff1916838001178555620001ad565b82800160010185558215620001ad579182015b82811115620001ad57825182559160200191906001019062000190565b50620001bb929150620001bf565b5090565b5b80821115620001bb5760008155600101620001c0565b634e487b7160e01b600052604160045260246000fd5b60005b8381101562000209578181015183820152602001620001ef565b8381111562000219576000848401525b50505050565b600082601f8301126200023157600080fd5b81516001600160401b03808211156200024e576200024e620001d6565b604051601f8301601f19908116603f01168101908282118183101715620002795762000279620001d6565b816040528381528660208588010111156200029357600080fd5b620002a6846020830160208901620001ec565b9695505050505050565b600080600060608486031215620002c657600080fd5b83516001600160401b0380821115620002de57600080fd5b620002ec878388016200021f565b945060208601519150808211156200030357600080fd5b62000311878388016200021f565b935060408601519150808211156200032857600080fd5b5062000337868287016200021f565b9150509250925092565b602081526000825180602084015262000362816040850160208701620001ec565b601f01601f19169190910160400192915050565b600181811c908216806200038b57607f821691505b602082108103620003ac57634e487b7160e01b600052602260045260246000fd5b50919050565b61230380620003c26000396000f3fe608060405234801561001057600080fd5b50600436106101985760003560e01c806365897c36116100e3578063b88d4fde1161008c578063d85d3d2711610066578063d85d3d2714610379578063e985e9c51461038c578063f2fde38b1461039f57600080fd5b8063b88d4fde1461032a578063c87b56dd1461033d578063d48e638a1461035057600080fd5b80638da5cb5b116100bd5780638da5cb5b146102fe57806395d89b411461030f578063a22cb4651461031757600080fd5b806365897c36146102d057806370a08231146102e3578063715018a6146102f657600080fd5b80632a55205a1161014557806342966c681161011f57806342966c68146102975780634f6ccce7146102aa5780636352211e146102bd57600080fd5b80632a55205a1461023f5780632f745c591461027157806342842e0e1461028457600080fd5b8063095ea7b311610176578063095ea7b31461020557806318160ddd1461021a57806323b872dd1461022c57600080fd5b806301ffc9a71461019d57806306fdde03146101c5578063081812fc146101da575b600080fd5b6101b06101ab366004611d6d565b6103b2565b60405190151581526020015b60405180910390f35b6101cd6103c3565b6040516101bc9190611de2565b6101ed6101e8366004611df5565b610455565b6040516001600160a01b0390911681526020016101bc565b610218610213366004611e2a565b61047c565b005b600c545b6040519081526020016101bc565b61021861023a366004611e54565b6105b2565b61025261024d366004611e90565b61062b565b604080516001600160a01b0390931683526020830191909152016101bc565b61021e61027f366004611e2a565b6106e8565b610218610292366004611e54565b610790565b6102186102a5366004611df5565b6107ab565b61021e6102b8366004611df5565b610823565b6101ed6102cb366004611df5565b6108c7565b61021e6102de366004611ef4565b61092c565b61021e6102f1366004611f6c565b6109ed565b610218610a87565b6000546001600160a01b03166101ed565b6101cd610a9b565b610218610325366004611f87565b610aaa565b610218610338366004611fd9565b610ab9565b6101cd61034b366004611df5565b610b38565b6101ed61035e366004611df5565b6000908152600e60205260409020546001600160a01b031690565b61021e6103873660046120b5565b610b43565b6101b061039a3660046120f7565b610bfc565b6102186103ad366004611f6c565b610c0f565b60006103bd82610c9c565b92915050565b6060600380546103d29061212a565b80601f01602080910402602001604051908101604052809291908181526020018280546103fe9061212a565b801561044b5780601f106104205761010080835404028352916020019161044b565b820191906000526020600020905b81548152906001019060200180831161042e57829003601f168201915b5050505050905090565b600061046082610ca7565b506000908152600760205260409020546001600160a01b031690565b6000610487826108c7565b9050806001600160a01b0316836001600160a01b0316036105155760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560448201527f720000000000000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b336001600160a01b038216148061053157506105318133610bfc565b6105a35760405162461bcd60e51b815260206004820152603e60248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60448201527f6b656e206f776e6572206e6f7220617070726f76656420666f7220616c6c0000606482015260840161050c565b6105ad8383610d0b565b505050565b6105bd335b82610d79565b6106205760405162461bcd60e51b815260206004820152602e60248201527f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560448201526d1c881b9bdc88185c1c1c9bdd995960921b606482015260840161050c565b6105ad838383610d85565b60008281526002602090815260408083208151808301909252546001600160a01b038116808352600160a01b9091046bffffffffffffffffffffffff169282019290925282916106aa5750604080518082019091526001546001600160a01b0381168252600160a01b90046bffffffffffffffffffffffff1660208201525b6020810151600090612710906106ce906bffffffffffffffffffffffff168761217a565b6106d891906121af565b91519350909150505b9250929050565b60006106f3836109ed565b82106107675760405162461bcd60e51b815260206004820152602b60248201527f455243373231456e756d657261626c653a206f776e657220696e646578206f7560448201527f74206f6620626f756e6473000000000000000000000000000000000000000000606482015260840161050c565b506001600160a01b03919091166000908152600a60209081526040808320938352929052205490565b6105ad83838360405180602001604052806000815250610ab9565b6107b4336105b7565b6108175760405162461bcd60e51b815260206004820152602e60248201527f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560448201526d1c881b9bdc88185c1c1c9bdd995960921b606482015260840161050c565b61082081610f52565b50565b600061082e600c5490565b82106108a25760405162461bcd60e51b815260206004820152602c60248201527f455243373231456e756d657261626c653a20676c6f62616c20696e646578206f60448201527f7574206f6620626f756e64730000000000000000000000000000000000000000606482015260840161050c565b600c82815481106108b5576108b56121c3565b90600052602060002001549050919050565b6000818152600560205260408120546001600160a01b0316806103bd5760405162461bcd60e51b815260206004820152601860248201527f4552433732313a20696e76616c696420746f6b656e2049440000000000000000604482015260640161050c565b6011805460018101909155610942335b82610f5b565b61094c8133610f75565b610957818484610fea565b6109978186868080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061111592505050565b6040516bffffffffffffffffffffffff831681526001600160a01b0384169082907f2595213009f64247e2789cf9981bcc53ee736a6aa52042a651aa1549ae6fff619060200160405180910390a3949350505050565b60006001600160a01b038216610a6b5760405162461bcd60e51b815260206004820152602960248201527f4552433732313a2061646472657373207a65726f206973206e6f74206120766160448201527f6c6964206f776e65720000000000000000000000000000000000000000000000606482015260840161050c565b506001600160a01b031660009081526006602052604090205490565b610a8f611210565b610a99600061126a565b565b6060600480546103d29061212a565b610ab53383836112ba565b5050565b610ac33383610d79565b610b265760405162461bcd60e51b815260206004820152602e60248201527f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560448201526d1c881b9bdc88185c1c1c9bdd995960921b606482015260840161050c565b610b3284848484611388565b50505050565b60606103bd82611406565b6011805460018101909155610b573361093c565b610b618133610f75565b610ba18184848080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061111592505050565b8282604051610bb19291906121d9565b604051809103902081610bc13390565b6001600160a01b03167fe7cd4ce7f2a465edc730269a1305e8a48bad821e8fb7e152ec413829c01a53c460405160405180910390a492915050565b6000610c08838361159c565b9392505050565b610c17611210565b6001600160a01b038116610c935760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f6464726573730000000000000000000000000000000000000000000000000000606482015260840161050c565b6108208161126a565b60006103bd826115ec565b6000818152600560205260409020546001600160a01b03166108205760405162461bcd60e51b815260206004820152601860248201527f4552433732313a20696e76616c696420746f6b656e2049440000000000000000604482015260640161050c565b600081815260076020526040902080546001600160a01b0319166001600160a01b0384169081179091558190610d40826108c7565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000610c08838361162a565b826001600160a01b0316610d98826108c7565b6001600160a01b031614610e145760405162461bcd60e51b815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201527f6f776e6572000000000000000000000000000000000000000000000000000000606482015260840161050c565b6001600160a01b038216610e8f5760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f2061646460448201527f7265737300000000000000000000000000000000000000000000000000000000606482015260840161050c565b610e9a600082610d0b565b6001600160a01b0383166000908152600660205260408120805460019290610ec39084906121e9565b90915550506001600160a01b0382166000908152600660205260408120805460019290610ef1908490612200565b909155505060008181526005602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b61082081611656565b610ab582826040518060200160405280600081525061168c565b6000828152600e60205260408082205490516001600160a01b038085169392169185917fab66eedca9cf6013d41a349e2098a73dde137b16410478b8c8919f3235b7c8469190a46000918252600e602052604090912080546001600160a01b0319166001600160a01b03909216919091179055565b6127106bffffffffffffffffffffffff821611156110705760405162461bcd60e51b815260206004820152602a60248201527f455243323938313a20726f79616c7479206665652077696c6c2065786365656460448201527f2073616c65507269636500000000000000000000000000000000000000000000606482015260840161050c565b6001600160a01b0382166110c65760405162461bcd60e51b815260206004820152601b60248201527f455243323938313a20496e76616c696420706172616d65746572730000000000604482015260640161050c565b6040805180820182526001600160a01b0393841681526bffffffffffffffffffffffff92831660208083019182526000968752600290529190942093519051909116600160a01b029116179055565b6000828152600560205260409020546001600160a01b031661119f5760405162461bcd60e51b815260206004820152602c60248201527f4552433732314d657461646174613a2055524920736574206f66206e6f6e657860448201527f697374656e7420746f6b656e0000000000000000000000000000000000000000606482015260840161050c565b602e815110156111f15760405162461bcd60e51b815260206004820181905260248201527f4e46543732314d657461646174613a20496e76616c6964204950465320434944604482015260640161050c565b600082815260106020908152604090912082516105ad92840190611cbe565b6000546001600160a01b03163314610a995760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161050c565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b816001600160a01b0316836001600160a01b03160361131b5760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c657200000000000000604482015260640161050c565b6001600160a01b03838116600081815260086020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b611393848484610d85565b61139f8484848461170a565b610b325760405162461bcd60e51b815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606482015260840161050c565b6000818152600560205260409020546060906001600160a01b03166114935760405162461bcd60e51b815260206004820152602f60248201527f4552433732314d657461646174613a2055524920717565727920666f72206e6f60448201527f6e6578697374656e7420746f6b656e0000000000000000000000000000000000606482015260840161050c565b600082815260106020526040812080546114ac9061212a565b80601f01602080910402602001604051908101604052809291908181526020018280546114d89061212a565b80156115255780601f106114fa57610100808354040283529160200191611525565b820191906000526020600020905b81548152906001019060200180831161150857829003601f168201915b50505050509050611534611857565b516000036115425792915050565b80511561157a57611551611857565b81604051602001611563929190612218565b604051602081830303815290604052915050919050565b611582611857565b61158b84611866565b604051602001611563929190612218565b6001600160a01b03811660009081526009602052604081205460ff1680610c0857506001600160a01b0380841660009081526008602090815260408083209386168352929052205460ff16610c08565b60006001600160e01b031982167f780e9d630000000000000000000000000000000000000000000000000000000014806103bd57506103bd8261199b565b6001600160a01b03821660009081526009602052604081205460ff1680610c085750610c088383611a0d565b6000818152600e6020526040902080546001600160a01b031916905561167b81611a6b565b600090815260026020526040812055565b6116968383611b06565b6116a3600084848461170a565b6105ad5760405162461bcd60e51b815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606482015260840161050c565b60006001600160a01b0384163b1561184b57604051630a85bd0160e11b81526001600160a01b0385169063150b7a029061174e903390899088908890600401612247565b6020604051808303816000875af1925050508015611789575060408051601f3d908101601f1916820190925261178691810190612283565b60015b611831573d8080156117b7576040519150601f19603f3d011682016040523d82523d6000602084013e6117bc565b606091505b5080516000036118295760405162461bcd60e51b815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606482015260840161050c565b805181602001fd5b6001600160e01b031916630a85bd0160e11b14905061184f565b5060015b949350505050565b6060611861611c48565b905090565b6060816000036118a957505060408051808201909152600181527f3000000000000000000000000000000000000000000000000000000000000000602082015290565b8160005b81156118d357806118bd816122a0565b91506118cc9050600a836121af565b91506118ad565b60008167ffffffffffffffff8111156118ee576118ee611fc3565b6040519080825280601f01601f191660200182016040528015611918576020820181803683370190505b5090505b841561184f5761192d6001836121e9565b915061193a600a866122b9565b611945906030612200565b60f81b81838151811061195a5761195a6121c3565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350611994600a866121af565b945061191c565b60006001600160e01b031982167f80ac58cd0000000000000000000000000000000000000000000000000000000014806119fe57506001600160e01b031982167f5b5e139f00000000000000000000000000000000000000000000000000000000145b806103bd57506103bd82611c57565b600080611a19836108c7565b9050806001600160a01b0316846001600160a01b03161480611a405750611a408185610bfc565b8061184f5750836001600160a01b0316611a5984610455565b6001600160a01b031614949350505050565b6000611a76826108c7565b9050611a83600083610d0b565b6001600160a01b0381166000908152600660205260408120805460019290611aac9084906121e9565b909155505060008281526005602052604080822080546001600160a01b0319169055518391906001600160a01b038416907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908390a45050565b6001600160a01b038216611b5c5760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f2061646472657373604482015260640161050c565b6000818152600560205260409020546001600160a01b031615611bc15760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000604482015260640161050c565b6001600160a01b0382166000908152600660205260408120805460019290611bea908490612200565b909155505060008181526005602052604080822080546001600160a01b0319166001600160a01b03861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b6060600f80546103d29061212a565b60006001600160e01b031982167f2a55205a0000000000000000000000000000000000000000000000000000000014806103bd57507f01ffc9a7000000000000000000000000000000000000000000000000000000006001600160e01b03198316146103bd565b828054611cca9061212a565b90600052602060002090601f016020900481019282611cec5760008555611d32565b82601f10611d0557805160ff1916838001178555611d32565b82800160010185558215611d32579182015b82811115611d32578251825591602001919060010190611d17565b50611d3e929150611d42565b5090565b5b80821115611d3e5760008155600101611d43565b6001600160e01b03198116811461082057600080fd5b600060208284031215611d7f57600080fd5b8135610c0881611d57565b60005b83811015611da5578181015183820152602001611d8d565b83811115610b325750506000910152565b60008151808452611dce816020860160208601611d8a565b601f01601f19169290920160200192915050565b602081526000610c086020830184611db6565b600060208284031215611e0757600080fd5b5035919050565b80356001600160a01b0381168114611e2557600080fd5b919050565b60008060408385031215611e3d57600080fd5b611e4683611e0e565b946020939093013593505050565b600080600060608486031215611e6957600080fd5b611e7284611e0e565b9250611e8060208501611e0e565b9150604084013590509250925092565b60008060408385031215611ea357600080fd5b50508035926020909101359150565b60008083601f840112611ec457600080fd5b50813567ffffffffffffffff811115611edc57600080fd5b6020830191508360208285010111156106e157600080fd5b60008060008060608587031215611f0a57600080fd5b843567ffffffffffffffff811115611f2157600080fd5b611f2d87828801611eb2565b9095509350611f40905060208601611e0e565b915060408501356bffffffffffffffffffffffff81168114611f6157600080fd5b939692955090935050565b600060208284031215611f7e57600080fd5b610c0882611e0e565b60008060408385031215611f9a57600080fd5b611fa383611e0e565b915060208301358015158114611fb857600080fd5b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b60008060008060808587031215611fef57600080fd5b611ff885611e0e565b935061200660208601611e0e565b925060408501359150606085013567ffffffffffffffff8082111561202a57600080fd5b818701915087601f83011261203e57600080fd5b81358181111561205057612050611fc3565b604051601f8201601f19908116603f0116810190838211818310171561207857612078611fc3565b816040528281528a602084870101111561209157600080fd5b82602086016020830137600060208483010152809550505050505092959194509250565b600080602083850312156120c857600080fd5b823567ffffffffffffffff8111156120df57600080fd5b6120eb85828601611eb2565b90969095509350505050565b6000806040838503121561210a57600080fd5b61211383611e0e565b915061212160208401611e0e565b90509250929050565b600181811c9082168061213e57607f821691505b60208210810361215e57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b600081600019048311821515161561219457612194612164565b500290565b634e487b7160e01b600052601260045260246000fd5b6000826121be576121be612199565b500490565b634e487b7160e01b600052603260045260246000fd5b8183823760009101908152919050565b6000828210156121fb576121fb612164565b500390565b6000821982111561221357612213612164565b500190565b6000835161222a818460208801611d8a565b83519083019061223e818360208801611d8a565b01949350505050565b60006001600160a01b038087168352808616602084015250836040830152608060608301526122796080830184611db6565b9695505050505050565b60006020828403121561229557600080fd5b8151610c0881611d57565b6000600182016122b2576122b2612164565b5060010190565b6000826122c8576122c8612199565b50069056fea264697066735822122000b6414218f523c77e2ec6116899b97173282f5087bb0f629813ff3e2af50d0364736f6c634300080d0033";

type ERC721MintableConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC721MintableConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC721Mintable__factory extends ContractFactory {
  constructor(...args: ERC721MintableConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    name: PromiseOrValue<string>,
    symbol: PromiseOrValue<string>,
    baseURI: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ERC721Mintable> {
    return super.deploy(
      name,
      symbol,
      baseURI,
      overrides || {}
    ) as Promise<ERC721Mintable>;
  }
  override getDeployTransaction(
    name: PromiseOrValue<string>,
    symbol: PromiseOrValue<string>,
    baseURI: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name, symbol, baseURI, overrides || {});
  }
  override attach(address: string): ERC721Mintable {
    return super.attach(address) as ERC721Mintable;
  }
  override connect(signer: Signer): ERC721Mintable__factory {
    return super.connect(signer) as ERC721Mintable__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC721MintableInterface {
    return new utils.Interface(_abi) as ERC721MintableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC721Mintable {
    return new Contract(address, _abi, signerOrProvider) as ERC721Mintable;
  }
}
