# React with TypeScript and CssModules

https://stackoverflow.com/questions/50747062/load-css-module-in-reactjs-typescript-and-react-rewired

Here are the steps I followed so far:

- npm install -g create-react-app

- create-react-app firstapp --scripts-version=react-scripts-ts

- npm install react-app-rewired --save-dev

- npm install --save-dev codebandits/react-app-rewire-css-modules sass-loader node-sass

- package.json: "start": "react-app-rewired start --scripts-version react-scripts-ts"

- config-overrides.js:

  const rewireCssModules = require('react-app-rewire-css-modules'); module.exports = function override(config, env){ config = rewireCssModules(config, env);
  return config; }

I correctly set my App.module.scss file, and referenced it in my App.tsx file:

import styles from './App.module.scss';

When I run the project, I have an error regarding the css module: Cannot find module './App.module.scss'.

When I do the exact same project without the typescript configuration, it works though.

What should I change for the CSS modules to be taken into account?

I came accross typings-for-css-modules-loader, but I'm not sure how to integrate it in my configuration since I didn't eject the webpack configuration.

Thanks in advance,

Thomas .T

**EDIT 1:** I added a global.d.ts file with:

- declare module '*.css'
- declare module '*.scss'

And it did the trick. I didn't use typings-for-css-modules-loader in the end.

The answer comes from this article: <https://hackernoon.com/zero-config-react-typescript-css-modules-jest-with-poi-bbcedfe2383a>