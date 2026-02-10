// x402 Stacks Facilitator - Utility functions

import { CHAIN_IDS } from './types.js';

/**
 * Get network type from chain ID
 */
export function getNetworkFromChainId(chainId: number): 'mainnet' | 'testnet' {
  return chainId === CHAIN_IDS.MAINNET ? 'mainnet' : 'testnet';
}
