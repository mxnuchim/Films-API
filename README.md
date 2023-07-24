# Films API with NestJS and MongoDB

![NestJS Logo](https://nestjs.com/img/logo_text.svg)

This is my submission. This project is a Films API developed using NestJS, MongoDB, and GitHub Actions for CI/CD. It provides endpoints to manage film data, add comments and fetch films and comments. The application is designed to run on port 3000 and is integrated with an automated CI/CD pipeline for seamless integration and deployment to AWS EC2, which serves as the production environment.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Continuous Integration and Deployment](#continuous-integration-and-deployment)
- [Technologies Used](#technologies-used)
- [License](#license)

## Getting Started

### Prerequisites

To run this application locally, ensure you have the following installed on your system:

- Node.js (version 18.x or later)
- npm (Node Package Manager)
- MongoDB (Make sure MongoDB is running on your local machine or provide the connection details of your MongoDB server in the application configuration). I have provided my database URL temporarily for your review.

### Installation

1. Clone the repository to your local machine:

```bash
git clone https://github.com/mxnuchim/films-api.git
```

2. Change into the project directory:

```bash
cd films-api
```

3. Install dependencies:

```bash
npm install
```

```bash
yarn
```

### Running the application

1. To start the Films API server locally, run the following command:

```bash
npm run start:dev
```

The server will be accessible at http://localhost:3000.

### API Endpoints

The following API endpoints are available:

- POST /api/films/create-films: Creates films in the database
- GET /api/films/get-films: Retrieves all films in the database
- GET /api/health-check: Checks health of API and ensures it runs
- POST /api/comments/create-comment: Creates a comment for a film
- GET /api/comments/get/:{filmId}: Get comments for a film
- POST /api/comments/delete-comment: Deletes a comment for a film

### Continuous Integration and Deployment (CI/CD)

This project is integrated with GitHub Actions for automated CI/CD. The CI/CD pipeline is triggered on each push to the main branch and each pull request targeting the main branch. The pipeline includes the following steps:

- Install Node.js and dependencies
- Build the application
- Restart the server using PM2
- After successful CI/CD, the code is automatically deployed to the production environment on AWS EC2.

### Technologies Used

- NestJS
- MongoDB
- GitHub Actions
- AWS EC2

### License

This project is licensed under the MIT License.
This single markdown file contains all the sections and content from the previous version. Feel free to copy and use it for your project. Remember to adjust any placeholder URLs or customize the content to match your actual project details.
