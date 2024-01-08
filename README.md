# SudoSOS Client
Frontend client for the SudoSOS barsystem

## Description
This repository contains the frontend client for the SudoSOS barsystem. It is built using TypeScript and Axios, and utilizes the Swagger API specification for generating code.

The `main` and the `develop` branch are not regular development workflow branches. They represent the state of the backend for these branches. I.e, the `main` client branch shadows the `main` SudoSOS backend branch

Therefore, if any changes are made to this repo you will have to drop the development branch and force push a new version. You can do this as following:
```shell
#!/bin/bash

# Ensure you're on the main branch
git checkout main

# Fetch the latest changes from the remote repository
git fetch origin main

# Resetting the main branch to the latest changes from remote
git reset --hard origin/main

# Checkout a new branch named 'develop' from 'main'
git checkout -b develop

# Execute the necessary npm commands
npm run update-swagger:dev && npm run genbuild

# Commit changes with a specific message
git commit -m "Updated development from main"

# Push the changes to the remote 'develop' branch
git push -f origin develop
```

## Installation
To install and use this client, follow these steps:
1. Clone the repository: `git clone https://gitlab.com/sudosos/sudosos-client.git`
2. Install dependencies: `npm install`

## Usage
To build the client, run `npm run gen-build`
This will first generate the TypeScript code under ./src and then generate the necessary files in the `dist/` directory.

## Example Usage

### Unauthorized API Usage
```typescript
const basePath = 'https://sudosos.gewis.nl/api/v1'
const configuration = new Configuration({ basePath });

const bannersApi = new BannersApi(configuration);
bannersApi.getAllOpenBanners().then((res) => {
  console.log(res.data);
}).catch((err) => {
  console.error(err);
});
```

### Authorized API Usage
```typescript
import {AuthenticateApi, BalanceApi, BannersApi, Configuration, UsersApi} from "@sudosos/sudosos-client";

const basePath = 'https://sudosos.gewis.nl/api/v1'
const configuration = new Configuration({ basePath });

let jwtToken: string = null;

// Your API key
const key: string = "API_KEY";

// Your UserId
const userId: number = 0;

// First we get a jwtToken using our ApiKey
const authApi = new AuthenticateApi(configuration).keyAuthentication({
  key,
  userId,
}).then((res) => {
  jwtToken = res.data.token;
})

// Construct axios config
const withKeyConfiguration = new Configuration({
  basePath,
  accessToken: () => jwtToken,
});

// Now we can make authenticated API requests
const balanceApi = new BalanceApi(withKeyConfiguration);
balanceApi.getBalances().then((res) => {
  console.log(res.data);
}).catch((err) => {
  console.error(err);
});
```
For a implementation and more info see the [sudosos-frontend-common](https://github.com/GEWIS/sudosos-frontend-common#README) repo.

## Contributing
Contributions are welcome! If you encounter any issues or have suggestions for improvements, please open an issue on the [issue tracker](https://gitlab.com/sudosos/sudosos-client/issues).
