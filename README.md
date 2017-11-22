# Full Stack JS Project - React Configuration
**`fullstack-js-08--react-configuration`**


## Context
You are going to build a full stack web application with node.js + React. In order to become familiar with how a node project works, you will be responsible for configuring the  initial major components of the project.  

- express server
- application routes
- views
- api layer
  - data access
  - data models + relations (ORM)
  - RESTful routes
- authentication
  - initial configuration
  - application integration
- React
  - **initial configuration [this assignment]**
  - application api integration
  - application auth integration


## The Assignment
For this assignment, we will focus on the application's **React configuration**.

###  Overview

#### Assignment Components

For this assignment you will need to complete 2 principle tasks:

- **(A) configure React in our node application**  
- **(B) create our application React components**

#### (A) Configuring React

In the context of our full stack application requires four things:

1. Creating files/folders for React in our application

2. Installing + configuring React build tools (webpack and babel) for converting React JSX to normal javascript.

3. Adjust our `npm run dev` command in `package.json` to watch for changes in our react source files.

4. Configure the express application to send an `.ejs` file that contains our React application.

We will use the yemoan `nxkplus` generator for parts 1 + 2, and you will have instructions for parts 3 + 4 in the *Requirements* section below.

#### (B) Create Application React Components

You will need to create the react components for our specific application:
- `JobListings`
- `CompanyListings`
- `LoginForm`
- `RegisterForm`
- `NoMatch404`


### Requirements

#### (A) Configuring React

- [x] **- [x] **Run the nxkplus react generator**
  ```sh
  yo nxkplus:react
  ```
  - installs webpack/babel libraries  
  - generates React config files:
    - `webpack.config.js`
    - `.babelrc`
  - install react, react-dom, react-dom-router libraries
  - generates application files/folders
    - `/src/client/js`
    - `/src/client/js/App.js`
    - `/src/views/reactApp.ejs`

- [x] **- [x] **Configure `package.json` dev build scripts**
  - this tells our `npm run dev` command also to run webpack/babel on our `/client/js` folder

  ```js
  ...
  "scripts": {
    "dev": "npm-run-all --parallel dev:server dev:webpack",
    "dev:webpack": "./node_modules/.bin/webpack --watch",
    "dev:server": "NODE_ENV=development nodemon server.js --watch src --watch server.js --ignore src/client",
    ...
  }
  ```

- [x] **Configure `server.js` to send `reactApp.js` view**
  - if no routes match, send `reactApp.ejs` to client.
  ```js
  ...
  app.use('/api', apiRouter)
  app.use('/auth', authRouter)
  app.use('/', pageRouter)

  app.use((req, res)=>{
    res.render('reactApp.ejs')
  })
  ...
  ```

- [x] **Run `npm run dev` Test routes in browser**
  - In Terminal:
  ```sh
  npm run dev
  ```

  - In Browser:
    - `http://localhost:3000/demo` : (demo route)
    - `http://localhost:3000/ex/:value` (dynamic route)
    - `http://localhost:3000/pagenotfound` (404, pagenotfound route)

  - In Atom:
    - make changes to `App.js` and see that they work in browser.


#### (B) Configuring React in Application

- [x] **Download + unzip component folder with files into `src/client/js/`**
```sh
curl https://raw.githubusercontent.com/muktek/assignment--fullstack-js-08-react-integration/master/components-files.zip > components-files.zip

unzip components-files.zip -d /src/client/js
```

- [x] **Import components into `App.js` and configure React router**
  ```
  /companies -- CompanyListings
  /jobs      -- JobListings
  /login     -- Login}/>
  /register   -- RegisterForm
  *            -- NoMatch404
  ```

## Setup Instructions

In Terminal:

```sh
# (1) navigate to your project--devjobs directory
cd ~/Documents/muktek/assignments/project--devjobs

# (2) Commit your changes from the previous demo
git add .
git commit -m 'committing work from part-07-auth-1'

# (3) You will work on the part-08-react-configuration branch for this feature
git checkout -b part-08-react-configuration

```
