# @stackstasker/x402-stacks-facilitator

Standalone [x402](https://x402.org) facilitator service for Stacks blockchain payment verification and settlement.

Implements the x402 V2 facilitator spec: verifies payment payloads against requirements and settles transactions on the Stacks network.

## Quick Start

### Run directly with npx

```bash
npx @stackstasker/x402-stacks-facilitator
```

### Install and run

```bash
npm install @stackstasker/x402-stacks-facilitator
npx x402-stacks-facilitator
```

### From source

```bash
git clone https://github.com/StacksTasker/x402-stacks-facilitator.git
cd x402-stacks-facilitator
npm install
npm start
```

The facilitator starts on `http://localhost:4000` by default.

## API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/verify` | POST | Verify a payment payload against a requirement |
| `/settle` | POST | Broadcast a verified transaction to Stacks |
| `/supported` | GET | List supported schemes, networks, assets |
| `/health` | GET | Health check |
| `/tx/:txId` | GET | Check transaction status |

### POST /verify

```json
{
  "payload": {
    "scheme": "exact",
    "network": "stacks",
    "chainId": 2147483648,
    "recipient": "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM",
    "amount": "5000",
    "asset": "STX",
    "nonce": 1,
    "signature": "...",
    "publicKey": "..."
  },
  "requirement": {
    "scheme": "exact",
    "network": "stacks",
    "chainId": 2147483648,
    "recipient": "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM",
    "amount": "5000",
    "asset": "STX"
  }
}
```

### POST /settle

```json
{
  "payload": {
    "serializedTx": "0x...",
    "scheme": "exact",
    "network": "stacks",
    "chainId": 2147483648,
    "recipient": "...",
    "amount": "5000",
    "asset": "STX",
    "nonce": 1,
    "signature": "...",
    "publicKey": "..."
  }
}
```

## Configuration

| Environment Variable | Default | Description |
|---------------------|---------|-------------|
| `FACILITATOR_PORT` | `4000` | Port to listen on |
| `STACKS_NETWORK` | `testnet` | Stacks network (`mainnet` or `testnet`) |

## Programmatic Usage

```typescript
import { createFacilitator, startFacilitator } from '@stackstasker/x402-stacks-facilitator';

// Start with defaults
startFacilitator();

// Or customize
startFacilitator({
  port: 5000,
  network: 'mainnet',
  corsOrigin: 'https://myapp.com',
});

// Or get the Express app for custom middleware
const { app, port } = createFacilitator({ port: 5000 });
app.use(myCustomMiddleware);
app.listen(port);
```

## What is x402?

[x402](https://x402.org) is an HTTP-native payment protocol that uses the `402 Payment Required` status code. When a client requests a paid resource, the server responds with 402 and payment requirements. The client creates a payment, and the facilitator verifies and settles it on the blockchain.

## Contributing

This is an open-source project and we welcome contributions from the community! Whether it's bug fixes, new features, documentation improvements, or ideas -- all contributions are appreciated.

- Fork the repo and create a feature branch
- Open an issue to discuss larger changes before submitting a PR
- All contributions are licensed under Apache-2.0

See [CONTRIBUTING.md](CONTRIBUTING.md) for details.

## Part of StacksTasker

This facilitator is used by [StacksTasker](https://github.com/StacksTasker/stackstasker-app), an AI agent task marketplace powered by x402 + Stacks.

## License

Apache-2.0 -- see [LICENSE](LICENSE) for details.

Free to use, modify, and distribute. We believe open infrastructure accelerates the x402 ecosystem for everyone.
