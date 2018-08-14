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

You will need to complete 2 principle tasks:

- **(A) configure React in our node application**  
- **(B) create our application React components**


## Requirements

#### (A) Configuring React

- [x] **Run the nxko:react code generator**

  ```sh
  yo nxko:react
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

- [x] **Configure `package.json` dev build scripts**
  - this tells our `npm run dev` command also to run the webpack watcher on our `src/client/js` folder

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
  // ...
  app.use('/api', apiRouter)
  app.use('/auth', authRouter)
  app.use('/', pageRouter)

  app.use((req, res)=>{
    res.render('reactApp.ejs')
  })
  // ...
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

- [x] **Download + unzip folder with react component files into `src/client/js/`**
```sh
curl https://raw.githubusercontent.com/muktek/assignment--fullstack-js-08-react-integration/master/components-files.zip > components-files.zip

unzip components-files.zip -d src/client/js
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
cd ~/muktek/assignments/project--devjobs

# (2) Commit your changes from the previous demo
git add .
git commit -m 'committing work from part-07-auth'

# (3) You will work on the part-08-react-configuration branch for this feature
git checkout -b part-08-react-configuration
```
