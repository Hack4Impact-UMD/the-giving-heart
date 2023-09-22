# The Giving Heart

**Description**: [insert description later]

**Point of Contact**:
|Name| Email|
| :---       | :---        |
|Insert Name| Insert Email |

## Installation + Quick Start

### Installation
- VSCode: https://code.visualstudio.com/download
  - Recommended Extensions:
    - GitLens — Git supercharged
    - Nextjs snippets
- NVM + Node.js: https://www.freecodecamp.org/news/node-version-manager-nvm-install-guide/
  - `nvm install --lts` will install and use the latest long-term support of Node.js (**18.18.0** as of 9/22/23)
- Mongodb Community Edition: https://www.mongodb.com/docs/v4.4/administration/install-community/
- Mongodb Compass (GUI): https://www.mongodb.com/products/tools/compass
- Postman: https://www.postman.com/downloads/

### Quick Start
1. Clone the repo: `git clone https://github.com/Hack4Impact-UMD/the-giving-heart.git`
2. Install Yarn (the package manager we will be using): `npm install --global yarn`
3. Create a `.env` file with the following content:
```env
# to connect to hosted database
# MONGODB_URI=mongodb+srv://<user>:<password>@<cluster>

# for local development
MONGODB_URI=mongodb://localhost:27017 

PAYLOAD_SECRET=PAYLOAD_CUSTOM_SERVER_EXAMPLE_SECRET_KEY
PAYLOAD_PUBLIC_SERVER_URL=http://localhost:3000
NEXT_PUBLIC_SERVER_URL=http://localhost:3000
PAYLOAD_PUBLIC_SEED=true
PAYLOAD_DROP_DATABASE=true
```
4. Use the MongoDB CLI `mongo` to create a database: run `mongo` then `db test` 
5. `cd` into repo and run `yarn && yarn dev` to spin up application
6. Admin portal: http://localhost:3000/admin
7. Website: http://localhost:3000/

## Developer Notes

### Express

In every Payload app is a `server.ts` file in which you instantiate your own Express server and attach Payload to it. This is where you can can add any custom Express middleware or routes you need to serve your front-end. To combine Payload with your framework on the same server, we need to do three main things:

1. Modify your `server.ts` file to build and serve your front-end using the APIs provided by your framework
2. Modify your `package.json` scripts include your framework's build commands
3. Use a separate `tsconfig.server.json` file to build the server, because your front-end may require incompatible TypeScript settings

#### Next.js

For Next.js apps, your `server.ts` file looks something like this:

```ts
import next from 'next'
import nextBuild from 'next/dist/build'

// Instantiate Express and Payload
// ...

// If building, start the server to build the Next.js app then exit
if (process.env.NEXT_BUILD) {
  app.listen(3000, async () => {
    await nextBuild(path.join(__dirname, '../'))
    process.exit()
  })

  return
}

// Attach Next.js routes and start the server
const nextApp = next({
  dev: process.env.NODE_ENV !== 'production',
})

const nextHandler = nextApp.getRequestHandler()

app.get('*', (req, res) => nextHandler(req, res))

nextApp.prepare().then(() => {
  app.listen(3000)
})
```

Check out the [server.ts](./src/server.ts) in this repository for a complete working example. You can also see the [Next.js docs](https://nextjs.org/docs/advanced-features/custom-server) for more details.

Then your `package.json` might look something like this:

```json
// ...
"scripts": {
  // ...
  "build:payload": "payload build",
  "build:server": "tsc --project tsconfig.server.json",
  "build:next": "next build",
  "build": "yarn build:payload && yarn build:server && yarn build:next",
}
```

Check out the [package.json](./src/package.json) in this repository for a complete working example. You can also see the [Next.js docs](https://nextjs.org/docs/api-reference/cli#build) for more details.

### Eject

If you prefer another front-end framework or would like to use Payload as a standalone CMS, you can easily eject the front-end from this template. To eject, simply run `yarn eject`. This will uninstall all Next.js related dependencies and delete all files and folders related to the Next.js front-end. It also removes all custom routing from your `server.ts` file and updates your `eslintrc.js`.

> Note: Your eject script may not work as expected if you've made significant modifications to your project. If you run into any issues, compare your project's dependencies and file structure with this template, see [./src/eject](./src/eject) for full details.

### Seed

On boot, a seed script is included to scaffold a basic database for you to use as an example. This is done by setting the `PAYLOAD_DROP_DATABASE` and `PAYLOAD_PUBLIC_SEED` environment variables which are included in the `.env.example` by default. You can remove these from your `.env` to prevent this behavior. You can also freshly seed your project at any time by running `yarn seed`. This seed creates an admin user with email `dev@payloadcms.com`, password `test`, and a `home` page.

> NOTICE: seeding the database is destructive because it drops your current database to populate a fresh one from the seed template. Only run this command if you are starting a new project or can afford to lose your current data.

### Production

To run Payload in production, you need to build and serve the Admin panel. To do so, follow these steps:

1. First, invoke the `payload build` script by running `yarn build` or `npm run build` in your project root. This creates a `./build` directory with a production-ready admin bundle.
1. Then, run `yarn serve` or `npm run serve` to run Node in production and serve Payload from the `./build` directory.
