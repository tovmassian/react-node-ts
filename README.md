# react-node-ts

This is a Node.js application written in Express and Overnight.js frameworks/libraries. Here is the tech stack:

#### tech stack
- Express.js
- Overnight.js
- Jasmine
- TypeScript
- ESLint
- Prettier

## Development mode setup

Make sure you have installed `node: v10.16.0` and `npm: v6.9.0`. Check this [doc](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) for more info.

*  Run `npm ci` from your terminal in your project directory to install node modules.
 
*  Run `npm run start-dev` from your terminal to run both front-end and back-end.

Your Express API will be available on `http://localhost:5000/`.

## Test and check your app code

* Run `npm test` to test your code.
 
* Run `npm run lint` to check your code linting.

P.S. For linting rules there are several predefined recommended rules. You can your preferred rules on `.eslintrc`. As there besides `ESLint`, there is also `Prettier` installed in the project on every linting check it will automatically try to fix linting errors if they are configured in `.prettierrc` file.

## Build for production

As the whole project is set up with typescript you need to transpile and build JavaScript out of your source code. This step is mostly for automation deployment platforms such as (Jenkins, Bamboo, Heroku, etc.). Some additional platform-specific configuration may be required. 

* Run `npm ci` to install your main(back-end) dependencies.
* Run `npm run build` to build your production code in `/build` directory.
* Run `npm start` to run your application on production.

## CI 

For Continuous Integration, GitHub Workflow is used, with the given job configuration at `.github/workflows/ci.yml` file. It will run on every push, so you can make that step required to protect your master branch from merging broken PRs.


