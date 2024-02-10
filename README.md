# Interactive Dashboard React NodeJS

Welcome to the Interactive Dashboard MUI NodeJS project! This project is a combination of a React frontend and a NodeJS backend, providing a comprehensive dashboard solution. Below are instructions on how to quickly set up and run both the frontend and backend.

## Quick Start

### Prerequisites
Ensure you have the following installed on your local machine:
- [Node.js](https://nodejs.org/) (LTS)
- [npm](https://www.npmjs.com/) (LTS)
- MongoDB

For Windows installation, refer to [Node.js on Windows](https://phoenixnap.com/kb/install-node-js-npm-on-windows). For Linux & Mac, check [this guide](https://updivision.com/blog/post/guide-what-is-lamp-and-how-to-install-it-on-ubuntu-and-macos).

### ExpressJS API Backend Installation

1. Clone the repository from [GitHub](https://github.com/Deadtargaryen/Interactive_Dashboard_MUI_Node_JS).

2. Open a terminal and navigate to the project's root directory.

3. Run the following commands:

    ```bash
    npm install
    ```

4. Copy the `.env.example` file and name it `.env`. Update the variables, especially `DB_LINK` for MongoDB connection.

5. Run the following command to start the ExpressJS API:

    ```bash
    npm start
    ```

### Material React Frontend Installation

1. Set up the API following the backend installation steps.

2. Download and install [Node.js LTS version](https://nodejs.org/en/download/).

3. Navigate to the root directory of the project and run:

    ```bash
    yarn install
    ```

    or

    ```bash
    npm install
    ```

4. Create an `.env` file in the project root with the following variables:

    ```
    REACT_APP_URL=your-react-project
    REACT_APP_API_URL=the-path-of-the-api
    REACT_APP_IS_DEMO=false # set to true for restrictions, false otherwise
    ```

5. In `package.json`, in the `proxy` variable, add the correct path to your API.

6. Run the following command to start the Material React frontend:

    ```bash
    yarn start
    ```

    or

    ```bash
    npm start
    ```


## Reporting Issues

If you encounter any issues or have feedback, please use [GitHub Issues](https://github.com/Deadtargaryen/Interactive_Dashboard_MUI_Node_JS/issues). Before reporting, ensure you are using the latest version and provide detailed steps to reproduce the problem.

## Licensing

- Copyright 2024 [Temple Labs](#)
- Temple Labs [license](#)