# ISRAEL PODCAST APP

This is a ReadMe for launching Israel Podcast APP both in develop and production mode.

This webpage is a SPA (Single Page Application) as the requirement says.

## How to run the APP

You need the lastest version of Node and NPM. Also GIT installed in your computer.

You need to clone this repository and install dependencies:

```
> $ git clone https://github.com/isAlon85/react-podcast-app-israel.git
> $ cd react-podcast-app-israel
> $ npm install or yarn install
```

In the project directory, you can run:

### `npm start` - Development mode

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build` - Production mode (JS and CSS mimified)

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

After this, you have to run:

```
> $ npm install -g serve
> $ serve -s build
```

You can run the optimized build in the port that "serve" tells you. It can be either 3000 or another free one if 3000 is busy (example: 52681)

[http://localhost:3000](http://localhost:3000)

[http://localhost:52120](http://localhost:52120)