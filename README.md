# Stream Nation Regression Testing Framework

## Overview

This is a comprehensive regression testing framework for the Stream Nation Android app, covering 300+ test cases across all major features using Appium and WebdriverIO.

## Test Coverage

### Modules Covered
- **Authentication** (Sign In, Sign Up, Social Login, OTP) - 41 test cases
- **Account Management** (Profile, Settings, Password, Delete Account) - 51 test cases
- **Home Dashboard** (Sales, Leaderboard, Month Picker) - 18 test cases
- **Shop & Cart** (Products, Cart Management, Order History) - 35 test cases
- **Wallet** (Balance, Transactions, Withdrawals, Payment Methods) - 74 test cases
- **Recruitment** (Dashboard, Leaderboard, Pending Requests) - 42 test cases
- **Help & Support** (Help Center, Feedback, Legal) - 25 test cases

**Total Test Cases:** 300+

## Project Structure

```
Stream_Nation_App_Android/
├── test/
│   ├── data/
│   │   ├── testData.js              # Basic test data
│   │   ├── roleAccounts.js          # Role-based accounts
│   │   └── regressionTestData.js    # Comprehensive regression test data
│   ├── helpers/
│   │   └── loginHelper.js           # Login utilities
│   ├── pageobjects/
│   │   ├── LoginPage.js
│   │   ├── HomeScreen.js
│   │   ├── ... (15 total page objects)
│   └── specs/
│       ├── smoke.spec.js            # Critical path smoke test
│       ├── regression/              # Regression test suites
│           ├── auth/                # Authentication tests
│           ├── account/             # Account management tests
│           └── ...
├── test-scripts/                    # Execution scripts
├── test-artifacts/                  # Screenshots, videos, logs
├── wdio.conf.js                     # WebdriverIO configuration
└── package.json                     # Dependencies and scripts
```

## Prerequisites

1. **Node.js** (v14 or higher)
2. **Appium Server** (v2.0 or higher)
3. **Android Device/Emulator** with Stream Nation UAT app installed
4. **Environment Variables** configured in `.env` file

## Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment
Create a `.env` file in the project root:
```env
EMAIL=your-test-email@example.com
PASSWORD=your-test-password
ANDROID_UDID=your-device-udid
```

### 3. Start Appium Server
```bash
appium
```

## Running Tests

### Smoke Test
```bash
npm run test:smoke
```

### Full Regression Suite
```bash
npm run test:regression
```

### Module-Specific Tests
```bash
# Authentication tests
npm run test:regression:auth

# Wallet tests
npm run test:regression:wallet
```

## Test Results

All test artifacts (screenshots, videos, logs) are saved in the `test-artifacts/` directory for review.

## License
ISC
