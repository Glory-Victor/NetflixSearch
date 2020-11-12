# Simple React JS Project

## What is the use of this Repo

This Project is a Simple ReactJS Project which demonstrates the following
1. Search and renders list of Netflix series
2. Renders Netflix series and relevant season and episode info

## Prerequisites

### Install Node JS
Refer to https://nodejs.org/en/ to install nodejs

### Install create-react-app
Install create-react-app npm package globally. This will help to easily run the project and also build the source files easily. Use the following command to install create-react-app

```bash
npm install -g create-react-app
```

## Cloning and Running the Application in local

Clone the project into local

Install all the npm packages. Go into the project folder and type the following command to install all npm packages

```bash
npm install
```

In order to run the application Type the following command

```bash
npm start
```

The Application Runs on **localhost:3000**

## Application design

#### Components

1. **Series** Component : This Component displays a resulted search of series in card layout. This Component gets the data by hitting an GET API

2. **Season** Component : This Component Displays the details of the series, the season dropdown and relevant episodes and listed.

3. **Unavailable** Component : This Component Displays the data unavailable message with a button to navigate back to the home page.

#### URL

/series which ties to *Series* Component
/season which ties to *Season* Component
/unavailable which ties to *Unavailable* Component
 
## Resources

**create-react-app** : The following link has all the commands that can be used with create-react-app
https://github.com/facebook/create-react-app

**ReactJS** : Refer to https://reactjs.org/ to understand the concepts of ReactJS


