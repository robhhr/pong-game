<h3 align="center">
  <img src="http://designedgecanada.com/wp-content/uploads/2018/03/b9e11f0d-e030-447e-808a-3d0f6ed64084-620x130.png" alt="RED Academy" width="200">
</h3>

### Pong Game

<p>The game consists in the rebuild of the Classic Pong Game. The game starts with one ball and after 3 points, a new ball will appear with more speed and smaller to make the game more challenging.</p>

### Technologies used

The text processor used was:

- Microsoft Visual Studio Code

The languages used were:

- HTML
- CSS
- JavaScript

# Pong Game Starter

A starter project for a basic pong game using SVGs.

## Setup

Ensure you have [Node.js](https://nodejs.org/en/) installed first.

**Install dependencies:**

`$ npm install`

**Run locally with the Parcel dev server:**

`$ npm start`

Once you run the start command you can access your project at http://localhost:3000.

Read more about the [Parcel web application bundler here](https://parceljs.org/).

## Deploy

The deployment workflow for this project will be a bit different from what you've used when deploying simple static websites.

To deploy your finished Pong project as a GitHub page, you must first **update the `predeploy` script in the `package.json` file with the name of your repo.**

For example, if your repo URL is:

https://github.com/bob/pong-project

Update the `predeploy` script as follows:

```json
"predeploy": "rm -rf dist && parcel build index.html --public-url /pong-project",
```

Once you have done this, you can run:

`$ npm run deploy`

Now check out your deployed site 🙂
