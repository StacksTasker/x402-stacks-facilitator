// x402 Stacks Facilitator - Payment verification logic

import { verifyPayment as coreVerify } from './stacks-server.js';
import type { StacksPaymentPayload, StacksPaymentRequirement, VerifyResponse } from './types.js';

/**
 * Verify a payment payload against a requirement.
 * Delegates to the core Stacks verification logic.
 */
export async function verifyPayment(
  payload: StacksPaymentPayload,
  requirement: StacksPaymentRequirement
): Promise<VerifyResponse> {
  const result = await coreVerify(payload, requirement);
  return {
    valid: result.valid,
    reason: result.reason,
    details: result.details,
  };
}
