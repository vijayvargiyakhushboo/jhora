# electron-boilerplate-sqlite

Truly tiny boilerplate for an Electron app that includes SQLite support. See the [blog post](http://blog.arrayofbytes.co.uk/?p=379) for more.

```
git clone https://github.com/optimistanoop/jhora.git
cd electron-boilerplate-sqlite
npm install
npm start
```

## To install dependency packages in windows OS

`npm i -g windows-build-tools`

## After that

`npm i sqlite3 --build-from-source`

## Building a release package

Releases can only be built on the target platform.

`npm run release`

## Using native modules

If you wish to use native modules, you must run `npm run postinstall` after first install of the module.

## Thanks to...

* Primary inspiration: https://github.com/szwacz/electron-boilerplate
* SQLite JS: https://github.com/bytheway/electron-sqlite3/

