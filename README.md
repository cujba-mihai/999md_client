### Requirements

- [Volta](https://docs.volta.sh/guide/getting-started)

### Getting started

Run the following command on your local environment:

```shell
git clone --depth=1 https://github.com/cujba-mihai/999md_client.git 999_md_client
cd 999_md_client
npm install
```

Then, you can run locally in development mode with live reload:

```shell
npm run dev
```

Open http://localhost:3000 with your favorite browser to see your project.

```shell
.
├── README.md                       # README file
├── __mocks__                       # Mocks for testing
├── .husky                          # Husky configuration
├── .vscode                         # VSCode configuration
├── public                          # Public assets folder
├── src
│   ├── components                  # Custom reusable components
│   ├── pages                       # Website Pages
│   ├── styles                      # Styles folder
│   └── utils                       # Utility functions
└── tsconfig.json                   # TypeScript configuration
```

### Deploy to production

You can see the results locally in production mode with:

```shell
$ npm run build
$ npm run start
```

You can create an optimized production build with:

```shell
npm run build-prod
```
