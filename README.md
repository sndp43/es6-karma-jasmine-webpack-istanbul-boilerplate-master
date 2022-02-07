# ES6 Karma Jasmine Webpack Istanbul Boilerplate

[![devDependency Status](https://david-dm.org/dcroitoru/es6-karma-jasmine-webpack-istanbul-boilerplate/dev-status.svg)](https://david-dm.org/dcroitoru/es6-karma-jasmine-webpack-istanbul-boilerplate?type=dev)

Boilerplate for building a client-based JavaScript library in ES6 using the following components:

* [Babel](https://babeljs.io/)
* [Webpack 2](https://webpack.github.io/)
* [Jasmine](http://jasmine.github.io/)
* [Karma](http://karma-runner.github.io/)
* [Istanbul](https://github.com/deepsweet/istanbul-instrumenter-loader)

### Setup
```
npm install
```

### Dev Server
```
npm start
```
Open browser at **localhost:8080**. Should display a welcome message.

### Tests
```
npm test
```
Will open a chrome window and watch for changes.

### Coverage
```
npm run coverage
```
Will generate coverage report.

### Error
Hi Issue i am facing here is i am not able to spy on "LogMsg" function in "module.spec.js" 
hence its throwing following error:- 
Chrome 98.0.4758 (Windows 10.0.0) module should display proper hi and spy on LogMsg FAILED
Expected spy LogMsg to have been called.

## Credits
* https://github.com/dcroitoru/es6-karma-jasmine-webpack-istanbul-boilerplate
* https://github.com/zyml/es6-karma-jasmine-webpack-boilerplate
