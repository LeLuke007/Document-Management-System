# Document-Management-System
A Document Management System using Blockchain ~ By Team Dark (Aditya Saini &amp; Satyam Naik)

### Prerequisites
  - Node -v 
    - v8.11.4
  - npm --version 
    - 5.6.0
  - Truffle Version
    - Truffle v4.1.14 (core: 4.1.14)
    - Solidity v0.4.24 (solc-js)
  - Ganache-cli --version
    - Ganache-cli v6.1.8 (ganache-core: 2.2.1)
  - [Meta Mask](https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn) Browser Extension
   
### Setup

```sh
  # Clone the repository
  $ https://github.com/SatyamNaik009/Document-Management-System
  
  # Change to current directory
  # Install Ganache-cli and Truffle
  $ npm install -g ganache-cli truffle@v4.1.14
  
  # Open a new terminal, Run Below Command and keep it alive
  $ ganache-cli
  
  # Run Solidity Unit Tests to check if environment is ready
  $ truffle test
  $ truffle compile
  $ truffle migrate
  
  # If Required, Install node modules
  $ npm install
  
  # Compile smart contracts
  $ npm run recompile
  
  # Once compilation is Complete Run React App
  $ npm run start
```

### How To
```sh
   Step:1 On any Web Browser open localhost:3000
   Step:2 Import Accounts from Meta Mask using Private Keys from the Ganache-cli tab.
   Step:3 Go to Login and Select Account from Drop Down.
   Step:4 Update profile with Either requester or Verifier from the Profile Edit Page in the Drop Down Menu on Top Right.
   Step:5 Requester Submits Documents for Verification.
   Step:6 Verifier Verifies Documents.
   Step:7 Once Login Documents would be visible in to menu.
   Step:8 Click on the Documents and the screen of document counts would be visible.
   Step:9 Verify Document from the verifier account.
   Step:10 Add documents from requester account.
```

### Credits
  - Team Dark
    - Aditya Saini
    - Satyam Naik
  - Various Web Sources
