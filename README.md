<h1 align='center'>
  Session Manager
</h1>

<p align='center'>
  <img src='public/images/actual-cookie-cog-128.png'>
</p>

## Developers ๐งโ๐ป

- node >= v16.13.1

- npm >= v8.1.2

- ๐งถ yarn >= v1.22.17

[Best way to get node/npm ๐ฅ](https://github.com/nvm-sh/nvm#installing-and-updating)

> To install dependencies navigate to the project root & run:

```console
 yarn
```

> to run json-server and the application on localhost for development:

```console
yarn start
```

### Deploy as extension

1. Run `make build` in project root to prepare for deployment in browser as an extension

2. Go to your browsers extension page and enable developer mode

3. Load the extension and point to dist folder

4. Reload extension each time after running `make build`

---

### Planned Features

- [ ] Easy session switching between multiple logins per domain
