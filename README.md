# Fruits

This is a test project about fruits :apple:

## Table of Contents
* [Technologies Used](#technologies-used)
* [Setup](#setup)

## Technologies Used

Fruits is created with:

- Angular (15.2.8)
- Angular Material (15.2.8)
- NgRx (15.4.0)
- Tailwind (3.3.2)
- Jest (29.5.0)
- [Fruityvice API](https://fruityvice.com/)

## Setup

### Clone the repo

```shell
git clone https://github.com/mavalroot/fruits.git
```

### Install npm packages

Install the npm packages described in the package.json and verify that it works:

```shell
npm install
npm start
```

#### npm scripts

These are the most useful commands defined in `package.json`:

* `npm start` - runs the TypeScript compiler, asset copier, and a server at the same time, all three in "watch mode".
* `npm run build` - runs the TypeScript compiler and asset copier once.
* `npm run watch` - runs the TypeScript compiler and asset copier in "watch mode"; when changes occur to source files, they will be recompiled or copied into `dist/`.

These are the test-related scripts:

* `npm run test` - runs Jest tests one time.
* `npm run test:w` - runs Jest tests in watch and coverage mode.
