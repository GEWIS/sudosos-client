# SudoSOS Client
Frontend client for the SudoSOS barsystem

## Description
This repository contains the frontend client for the SudoSOS barsystem. It is built using TypeScript and Axios, and utilizes the Swagger API specification for generating code.

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
