# Class Starter

A platform for crowdfunding specialized lectures and educational events.

## Problem

There's a lack of specialized lectures outside of traditional university settings. Many people want to attend lectures on niche topics, but organizing them faces high transaction costs - coordinating speakers, venues, collecting payments, and ensuring trust between organizers and attendees.

Drawing from R.H. Coase's theory on transaction costs, when the cost of coordinating a transaction is too high, otherwise valuable exchanges simply don't happen. This is why many potential lectures never materialize.

## Solution

Class Starter lowers transaction costs by using smart contracts on the Base blockchain to create a trustless crowdfunding system for lectures.

**Key features:**
- Crowdfund lectures with transparent treasury management
- Trustless system - no need to trust a central organizer
- Withdraw your funds if the lecture isn't what you expected
- Low fees on Base blockchain make micro-contributions feasible

## Repository Structure

This is a monorepo containing:

- **`mobile/`** - Expo React Native app for discovering and funding lectures
- **`Baal/`** - DAO smart contracts (based on DAOhaus Baal)
- **`contracts/`** - Hardhat development environment

## Getting Started

### Prerequisites
- Node.js v22.10.0 or later
- npm or yarn

### Mobile App (Expo)

```bash
cd mobile
npm install
npm start
```

### Smart Contracts (Baal)

```bash
cd Baal
npm install --legacy-peer-deps
npx hardhat compile
npx hardhat test
```

### Contracts (Hardhat 3)

```bash
cd contracts
npm install
npx hardhat compile
```

## Technology Stack

- **Frontend**: React Native, Expo
- **Smart Contracts**: Solidity, Hardhat
- **Blockchain**: Base (Ethereum L2)
- **DAO Framework**: DAOhaus Baal

## License

ISC
