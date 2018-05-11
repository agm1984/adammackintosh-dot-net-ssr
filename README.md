# adammackintosh.net - Frontend Client SSR

> This React app features server-side rendering, react-helmet, and the result of several years of advanced meta data and SEO optimizations. Feel free to inspect.

**NOTE:** Some aspects of the app are the result of hundreds of hours of UI component building and fine tuning. Deep directory traversal is recommended for forensic analysis.

## Install ESLint
> First, copy the contents of `.eslintrc.json` to clipboard, then:

``` bash
$ eslint --init
```
1. Select 'Use a popular style guide'
2. Select Airbnb
3. Select React Yes
4. Select JSON
5. Select Update ESLint

Paste clipboard contents back into `.eslintrc.json`

## Adjust Scripts

1. Install `node-sass-chokidar`
2. Install `cross-env`
3. Add SASS compiler
4. Add project version environment key/value pair to `react-scripts start`

``` json
"scripts": {
    "build-css": "node-sass-chokidar src/ -o src/",
    "watch-css": "npm run build-css && node-sass-chokidar src/ -o src/ --watch --recursive",
    "start": "cross-env REACT_APP_VERSION=$npm_package_version react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test --env=jsdom",
    "eject": "react-scripts eject"
  },
```

## Install
``` bash
$ git clone https://github.com/agm1984/adammackintosh-dot-net-ssr.git
$ cd adammackintosh-dot-net-ssr
$ yarn install
$ yarn start
```

## Environment Config
The App contains an example environment config which facilitates Apollo Client configuration and CORS.

Simply rename the file from `./src/env/config.example.js` to `./src/env/config.js` and change the database credentials.

## How to Add a New Feature
> This project generally follows the Component-as-a-Folder Architecture Pattern. This is the most scalable approach that also minimizes potential for file collisions in multi-developer environments.

### Required Steps
1. Create a folder in `./src/components`
2. CSS can be kept with the component or based in `./src/styles` but property inheritance should be avoided. Relying on inheritance creates hard to diagnose bugs and does not foster server-side rendering.
3. Create Component UI
4. Define Redux data flow as needed, reducers are combined in `./src/store/index.js`
5. Define GraphQL Queries & Mutations as needed
6. Define validator.js validations for Redux-Form if there is any data input.

## Todo

- Add puppeteer to provide a hands-free browsing experience (demonstrate QA and automation by clicking around the website automatically, like Ranorex)
- Find way to implement this as image preloaded state: http://www.rand-on.com/projects/2018_quadtree/quadtree.html
- Put poll rating system for each Example so people can rate its impressiveness out of 10 (with optional reasons top positive, top negative)
- Graph poll results with Recharts use Neo4j
- Add gamification system that allows users to achieve 100% visibility of examples
- Add gamification easter eggs with animations


## Contact

### Email
adam@adammackintosh.net

### GitHub

Submit any questions as issues on GitHub: https://github.com/agm1984/adammackintosh-dot-net-ssr/issues