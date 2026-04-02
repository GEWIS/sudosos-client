# SudoSOS Client

> **This repository has been archived as of April 2, 2026.** The SudoSOS client is now generated and published as part of the [SudoSOS Backend](https://github.com/GEWIS/sudosos-backend/tree/develop/client) repository and distributed via npm as [`@gewis/sudosos-client`](https://www.npmjs.com/package/@gewis/sudosos-client). Please use the npm package going forward.

---

## Migration Guide

If you are currently using the GitHub-hosted client (this repo), follow the steps below to migrate to the new `@gewis/sudosos-client` npm package.

### 1. Update your dependency

Remove the old GitHub-based dependency and install the new npm package.

**Before (package.json):**
```json
"@sudosos/sudosos-client": "github:GEWIS/sudosos-client#<commit-sha>"
```

**After (package.json):**
```json
"@gewis/sudosos-client": "<version>"
```

Or install directly:
```bash
npm install @gewis/sudosos-client
# or
yarn add @gewis/sudosos-client
```

### 2. Update all imports

The package scope has changed from `@sudosos` to `@gewis`. Update every import across your codebase:

**Before:**
```typescript
import { type UserResponse, BalanceApi, Configuration } from '@sudosos/sudosos-client';
```

**After:**
```typescript
import { type UserResponse, BalanceApi, Configuration } from '@gewis/sudosos-client';
```

You can do this in bulk with a find-and-replace:
```bash
# Using sed
find . -type f -name '*.ts' -o -name '*.vue' | xargs sed -i "s/@sudosos\/sudosos-client/@gewis\/sudosos-client/g"
```

### 3. Refactor API calls to use single-parameter object syntax

The new client uses a single object parameter instead of positional arguments. This is the most significant change and affects all API method calls.

**Before (positional arguments):**
```typescript
// Multiple positional args, many of which may be undefined
apiService.user.getAllUsers(take, skip, search, undefined, undefined, undefined, type);
apiService.user.getIndividualUser(userId);
apiService.user.getUsersTransfers(userId, take, skip);
apiService.user.updateUserNfc(userId, { nfcCode });
apiService.debtor.deleteFine(fineId);
apiService.rbac.deletePermission(id, entity, action, relation);
```

**After (single object parameter):**
```typescript
// Named parameters in an object, no need for undefined placeholders
apiService.user.getAllUsers({ take, skip, search, type });
apiService.user.getIndividualUser({ id: userId });
apiService.user.getUsersTransfers({ id: userId, take, skip });
apiService.user.updateUserNfc({ id: userId, updateNfcRequest: { nfcCode } });
apiService.debtor.deleteFine({ id: fineId });
apiService.rbac.deletePermission({ id, entity, action, relation });
```

Key things to note:

- Positional arguments become named properties in a single object.
- You no longer need to pass `undefined` as a placeholder for optional parameters you want to skip.
- Request body parameters are now passed as a named property (e.g. `updateNfcRequest: { nfcCode }` instead of just `{ nfcCode }` as a second argument).

### 4. Verify everything works

After making the changes, run your type checker and tests to verify nothing was missed:
```bash
npm run type-check
npm run test
```

---

For a reference implementation of this migration, see [GEWIS/sudosos-frontend PR #812](https://github.com/GEWIS/sudosos-frontend/pull/812).

---

## Legacy Documentation

<details>
<summary>Click to expand the original README</summary>

### Description
This repository contained the frontend client for the SudoSOS barsystem. It was built using TypeScript and Axios, and utilized the Swagger API specification for generating code.

### Installation
1. Clone the repository: `git clone https://github.com/GEWIS/sudosos-client.git`
2. Install dependencies: `npm install`

### Usage
To build the client, run `npm run gen-build`.
This generates the TypeScript code under `./src` and the necessary files in the `dist/` directory.

### Example Usage

#### Unauthorized API Usage
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

#### Authorized API Usage
```typescript
import { AuthenticateApi, BalanceApi, Configuration } from "@sudosos/sudosos-client";

const basePath = 'https://sudosos.gewis.nl/api/v1'
const configuration = new Configuration({ basePath });

let jwtToken: string = null;
const key: string = "API_KEY";
const userId: number = 0;

const authApi = new AuthenticateApi(configuration).keyAuthentication({
  key,
  userId,
}).then((res) => {
  jwtToken = res.data.token;
})

const withKeyConfiguration = new Configuration({
  basePath,
  accessToken: () => jwtToken,
});

const balanceApi = new BalanceApi(withKeyConfiguration);
balanceApi.getBalances().then((res) => {
  console.log(res.data);
}).catch((err) => {
  console.error(err);
});
```

For more info see the [sudosos-frontend-common](https://github.com/GEWIS/sudosos-frontend-common#README) repo.

</details>
