import {
  AddressAbstractEntry,
  ApplicationLog,
  Asset,
  ContractInvocationStats,
  ContractMetaData,
  ContractState,
  ContractStorage,
  ContractTransfer,
  InputOutput,
  TimedBalance,
  Transaction,
  TransferAbstract
} from './interface'
import { Balance, Block, NodeMetaData, Witness } from '../common'

export type AddressStatsResponse = {
  asset: string
  balances: TimedBalance[]
}[]

export interface AssetResponse {
  scripthash: string
  firstseen: number
  name: string
  symbol: string
  decimals: number
  state: ContractState
  type: string
  time: string
}

export interface AssetsResponse {
  items: Asset[]
  totalCount: number
}

export type BalanceResponse = Balance[]

export interface BlockResponse {
  hash: string
  size: number
  version: number
  previousBlockHash: string
  merkleroot: string
  time: string
  index: number
  nonce: string
  nextconsensus: string
  script: Witness
  tx: Transaction[]
}

export interface BlocksResponse {
  items: Block[]
  totalCount: number
}

export type ContractResponse = ContractState

export interface ContractsResponse {
  items: ContractMetaData[]
  totalCount: number
}

export interface ContractTransfersResponse {
  result: ContractTransfer[]
}

export interface GetAddressAbstractsResponse {
  total_pages: number
  total_entries: number
  page_size: number
  page_number: number
  entries: AddressAbstractEntry[]
}

export type GetAllNodesResponse = NodeMetaData[]

export interface HeightResponse {
  height: number
}

export type InvocationStatsResponse = ContractInvocationStats[]

export interface LogResponse {
  Item: ApplicationLog
}

export interface StatsResponse {
  transactions: number
  addresses: number
  assets: number
  contracts: number
  transfers: number
  height: number
}

export interface StorageResponse {
  storage: ContractStorage[]
  time: string
  block: number
}

export type TransactionResponse = Transaction

export interface TransactionsResponse {
  transactions: Transaction[]
  totalCount: number
}

export interface TransactionAbstractsResponse {
  items: {
    tokens: TransferAbstract[]
    inputs: InputOutput[]
    outputs: InputOutput[]
  }
}

export interface TransferHistoryResponse {
  items: TransferAbstract[]
  totalCount: number
}
