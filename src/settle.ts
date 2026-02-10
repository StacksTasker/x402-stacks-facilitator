// x402 Stacks Facilitator - Payment settlement logic

import {
  settlePayment as coreSettle,
  checkTransactionStatus as coreCheckStatus,
} from './stacks-server.js';
import type { StacksPaymentPayload, NetworkConfig, SettleResponse } from './types.js';

/**
 * Settle a payment by broadcasting the transaction to Stacks network.
 * Delegates to the core Stacks settlement logic.
 */
export async function settlePayment(
  payload: StacksPaymentPayload,
  network: 'mainnet' | 'testnet' = 'testnet'
): Promise<SettleResponse> {
  const config: NetworkConfig = { type: network };
  const result = await coreSettle(payload, config);
  return {
    success: result.success,
    txId: result.txId,
    error: result.error,
  };
}

/**
 * Check the status of a previously settled transaction.
 */
export async function checkTransaction(
  txId: string,
  network: 'mainnet' | 'testnet' = 'testnet'
): Promise<{ status: string; blockHeight?: number }> {
  const config: NetworkConfig = { type: network };
  return coreCheckStatus(txId, config);
}
