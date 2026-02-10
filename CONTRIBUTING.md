# Contributing to x402 Stacks Facilitator

Thanks for your interest in contributing! This project is open source under the Apache-2.0 license and we welcome contributions of all kinds.

## Getting Started

```bash
git clone https://github.com/StacksTasker/x402-stacks-facilitator.git
cd x402-stacks-facilitator
npm install
npm run build
npm start
```

The facilitator runs on `http://localhost:4000` by default. Hit `/health` to verify it's working.

## How to Contribute

### Bug Reports & Feature Requests

Open an [issue](https://github.com/StacksTasker/x402-stacks-facilitator/issues) with a clear description. For bugs, include steps to reproduce and any error output.

### Pull Requests

1. Fork the repo and create a branch from `main`
2. Make your changes
3. Run `npm run build` to ensure it compiles
4. Test locally with `npm start`
5. Open a PR with a clear description of what changed and why

### Ideas for Contributions

- Additional payment scheme support (beyond `exact`)
- SIP-10 token payment support
- Rate limiting and request validation
- Docker image / deployment guides
- Test coverage
- Documentation improvements

## Code Style

- TypeScript with strict mode
- ES modules (`import`/`export`)
- Functional style preferred over classes

## License

By contributing, you agree that your contributions will be licensed under the Apache-2.0 license.
