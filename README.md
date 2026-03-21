# Stream Nation Regression Testing Framework

## Overview

This is a comprehensive regression testing framework for the Stream Nation Android app, covering 300+ test cases across all major features.

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
│   │   ├── ShopPage.js
│   │   ├── CartPage.js
│   │   ├── WalletPage.js
│   │   └── ... (15 total page objects)
│   └── specs/
│       ├── smoke.spec.js            # Critical path smoke test
│       ├── roles/                   # Role-based tests
│       └── regression/              # Regression test suites
│           ├── auth/                # Authentication tests
│           ├── account/             # Account management tests
│           ├── home/                # Home dashboard tests
│           ├── shop/                # Shop & cart tests
│           ├── wallet/              # Wallet tests
│           ├── recruitment/         # Recruitment tests
│           └── support/             # Help & support tests
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
# Test Account Credentials
EMAIL=your-test-email@example.com
PASSWORD=your-test-password

# Device Configuration
ANDROID_UDID=your-device-udid

# Optional: Additional test accounts
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=admin-password
```

### 3. Start Appium Server

```bash
appium
```

### 4. Connect Android Device

```bash
# Check device connection
adb devices

# Get device UDID
adb devices -l
```

## Running Tests

### Quick Start - High Priority Tests

Run the most critical tests first:

```bash
npm run test:high
```

This will execute:
- Critical authentication tests (login, signup)
- Core shop and cart functionality
- Essential wallet operations

### Smoke Test

Run the critical path smoke test:

```bash
npm run test:smoke
```

### Full Regression Suite

Run all 300+ regression tests:

```bash
npm run test:regression
```

⚠️ **Note:** Full regression takes approximately 2-3 hours

### Module-Specific Tests

Run tests for specific modules:

```bash
# Authentication tests
npm run test:regression:auth

# Account management tests
npm run test:regression:account

# Home dashboard tests
npm run test:regression:home

# Shop & cart tests
npm run test:regression:shop

# Wallet tests
npm run test:regression:wallet

# Recruitment tests
npm run test:regression:recruitment

# Help & support tests
npm run test:regression:support
```

### Priority-Based Tests

Run tests by priority level:

```bash
# High priority tests (~30 minutes)
npm run test:high

# Medium priority tests (~1 hour)
npm run test:medium

# Low priority tests (~1 hour)
npm run test:low
```

### Role-Based Tests

Run tests for specific user roles:

```bash
npm run test:roles
```

## Test Results

### Artifacts Location

All test artifacts are saved in `test-artifacts/`:

```
test-artifacts/
├── screenshots/          # Screenshots for all tests
│   ├── PASSED_*.png
│   └── FAILED_*.png
├── recordings/           # Video recordings for all tests
│   ├── PASSED_*.mp4
│   └── FAILED_*.mp4
└── page-sources/         # XML page sources
    └── *.xml
```

### Viewing Results

1. **Console Output:** Real-time test execution status
2. **Screenshots:** Visual verification of test state
3. **Videos:** Full test execution recording
4. **Page Source:** XML dump for debugging selectors

## Current Implementation Status

### ✅ Completed
- [x] Test framework setup
- [x] Page Object Model structure
- [x] Smoke test implementation
- [x] Role-based testing framework
- [x] Video recording and screenshot capture
- [x] Test data management
- [x] Regression test structure
- [x] High-priority test samples

### 🚧 In Progress
- [ ] Full authentication test suite (41 test cases)
- [ ] Account management test suite (51 test cases)
- [ ] Home dashboard test suite (18 test cases)
- [ ] Shop & cart test suite (35 test cases)
- [ ] Wallet test suite (74 test cases)
- [ ] Recruitment test suite (42 test cases)
- [ ] Help & support test suite (25 test cases)

### 📋 Planned
- [ ] Test reporting dashboard
- [ ] CI/CD integration
- [ ] Performance metrics
- [ ] Test data generators
- [ ] Parallel execution

## Test Development Guide

### Creating New Tests

1. **Choose the appropriate module directory:**
   ```
   test/specs/regression/[module]/
   ```

2. **Follow the naming convention:**
   ```
   [feature]-[priority].spec.js
   
   Examples:
   - signin-high-priority.spec.js
   - profile-medium-priority.spec.js
   - help-center-low-priority.spec.js
   ```

3. **Use the test template:**

```javascript
const PageObject = require('../../pageobjects/PageObject');
const testData = require('../../data/regressionTestData');
require('dotenv').config();

describe('[Feature] - [Priority] Regression Tests', () => {

    before(async () => {
        // Setup: Login if needed
    });

    it('TC### - should [expected behavior]', async () => {
        // Test implementation
        
        console.log('✅ TC### PASSED: [description]');
    });

    after(async () => {
        // Cleanup
    });
});
```

### Best Practices

1. **Use Test Data:** Always use `regressionTestData.js` for test data
2. **Descriptive Names:** Use clear, descriptive test names
3. **Assertions:** Include meaningful assertions
4. **Logging:** Add console logs for test progress
5. **Cleanup:** Always clean up test data in `after` hooks
6. **Waits:** Use appropriate timeouts from `testData.timeouts`
7. **Error Handling:** Use try-catch for optional elements

## Troubleshooting

### Common Issues

#### 1. App Not Launching
```bash
# Check device connection
adb devices

# Restart Appium server
pkill -f appium
appium
```

#### 2. Element Not Found
- Check page source in `test-artifacts/recordings/`
- Update selectors in page objects
- Increase wait timeout

#### 3. Tests Timing Out
- Increase timeout in `wdio.conf.js`
- Check network connectivity
- Verify app is not frozen

#### 4. Flaky Tests
- Add explicit waits
- Check for race conditions
- Verify element stability

### Debug Mode

Run tests with verbose logging:

```bash
wdio run wdio.conf.js --suite [suite-name] --logLevel trace
```

## Maintenance

### Regular Tasks

1. **Weekly:**
   - Run smoke tests
   - Review failed tests
   - Update selectors if needed

2. **Monthly:**
   - Run full regression suite
   - Update test data
   - Review and optimize slow tests

3. **Per Release:**
   - Run full regression suite
   - Generate test report
   - Update documentation

### Updating Tests

When app changes:

1. Update page objects with new selectors
2. Update test data if needed
3. Run affected test suite
4. Fix failing tests
5. Document changes

## Contributing

### Adding New Test Cases

1. Create test spec in appropriate module directory
2. Update `regressionTestData.js` if needed
3. Create/update page objects
4. Run tests locally
5. Document in implementation plan

### Code Review Checklist

- [ ] Test follows naming convention
- [ ] Uses test data from `regressionTestData.js`
- [ ] Includes proper assertions
- [ ] Has cleanup in `after` hook
- [ ] Logs test progress
- [ ] Handles errors gracefully

## Support

For questions or issues:
- Check existing test cases for examples
- Review page objects for available methods
- Consult `implementation_plan.md` for roadmap
- Check `task.md` for implementation status

## License

ISC
# Stream-Nation-PH
