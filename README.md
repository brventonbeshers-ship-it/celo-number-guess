# Celo Number Guess

On-chain number guessing game for Celo and MiniPay. Players choose a number from 1 to 100, submit a guess through Celo, and track accuracy over time.

Contract: `0xd3d9252A13F306CF36D0a56079f78a4be1fdAe43`
CeloScan: https://celoscan.io/address/0xd3d9252A13F306CF36D0a56079f78a4be1fdAe43#code

## Project Structure

- `contracts/` - Solidity contract deployed to Celo mainnet
- `frontend/` - Next.js MiniApp frontend with MiniPay support
- `sdk/` - TypeScript SDK used by the frontend
- `scripts/` - Hardhat deployment script

## Commands

```bash
npm install
npm run compile
npm run deploy
```

```bash
cd sdk
npm install
npm run build
```

```bash
cd frontend
npm install
npm run build
```
