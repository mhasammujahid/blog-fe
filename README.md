# Blog Manager Project - Frontend

This repository contains the frontend code for the Blog Manager Project, built using React. The project is part of a MERN (MongoDB, Express.js, React, Node.js) stack application.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Scripts](#scripts)
- [Dependencies](#dependencies)
- [License](#license)

## Introduction

The Blog Manager Project is a web application that allows users to create, edit, delete, and view blog posts. This repository specifically handles the frontend side of the application using React.

## Features

- User authentication and authorization
- Create, edit, and delete blog posts
- View a list of all blog posts
- View individual blog post details
- Responsive design

## Installation

To get started with the project, follow these steps:

1. Clone the repository:

    ```sh
    git clone https://github.com/mhasammujahid/blog-fe.git
    cd blog-manager
    ```

2. Install the dependencies:

    ```sh
    npm install
    ```

## Usage

To start the development server, run:

```sh
npm start
```

This will start the React application and you can view it in your browser at `http://localhost:3000`.

## Folder Structure

The project structure is organized as follows:

```
blog-manager/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   ├── pages/
│   ├── services/
│   ├── App.js
│   ├── index.js
│   └── ...
├── .gitignore
├── package.json
├── README.md
└── ...
```

- **public/**: Contains the public assets and the `index.html` file.
- **src/**: Contains the source code of the application.
  - **components/**: Reusable React components.
  - **pages/**: Components representing different pages of the application.
  - **services/**: Contains the API service functions.
  - **App.js**: The main app component.
  - **index.js**: The entry point of the React application.

## Scripts

In the project directory, you can run the following scripts:

- `npm start`: Starts the development server.
- `npm run build`: Builds the app for production.
- `npm test`: Runs the test suite.
- `npm run eject`: Ejects the Create React App configuration.

## Dependencies

The project uses the following major dependencies:

- [React](https://reactjs.org)
- [React Router](https://reactrouter.com)
- [Axios](https://github.com/axios/axios)
- [Redux](https://redux.js.org)
- [ReactRedux](https://react-redux.js.org)
- [Bootstrap](https://getbootstrap.com/)

## License

This project is licensed under the MIT License.
