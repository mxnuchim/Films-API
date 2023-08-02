export const htmlContent = `
      <html>
        <head>
          <title>Films API Project</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              margin: 20px;
              font-family: Arial, sans-serif;
              line-height: 1.6;
              margin-left: 20%;
              margin-right: 20%;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              background-color: #f7f7f7;
            }
            h1 {
              color: #007bff;
            }
            p {
              color: #333;
            }
            ul {
              list-style: disc;
              margin-left: 30px;
            }
            li {
              margin-bottom: 10px;
            }
            .api-docs-link {
              display: inline-block;
              margin-top: 20px;
              color: #007bff;
              text-decoration: none;
              border-bottom: 1px solid #007bff;
              transition: border-color 0.2s ease-in-out;
            }
            .api-docs-link:hover {
              border-color: transparent;
            }
            /* Styles for the logos */
            .logos-container {
              display: flex;
              justify-content: center;
              align-items: center;
              margin-top: 20px;
            }
            .logo {
              margin: 10px;
            }
            /* Media Query for Mobile Devices */
            @media (max-width: 768px) {
              body {
                margin: 0; /* Reset margin for mobile devices */
                margin-left: 5%; /* Optional: Apply a smaller margin on the left */
                margin-right: 5%; /* Optional: Apply a smaller margin on the right */
              }
              .logos-container {
                display: flex;
                flex-direction: column;
                align-items: center;
              }
              .logo {
                margin: 25px;
              }
            }
          </style>
        </head>
        <body>
          <h1>Films API Submission with NestJS, TypeScript and MongoDB by Manuchimso Oliver</h1>
          <div class="logos-container">
            <img class="logo" src="https://nestjs.com/img/logo_text.svg" alt="NestJS Logo" width="200" height="auto">
            <img class="logo" src="https://www.mongodb.com/assets/images/global/leaf.png" alt="MongoDB Logo" width="200" height="auto">
            <img class="logo" src="https://seeklogo.com/images/T/typescript-logo-B29A3F462D-seeklogo.com.png" alt="TypeScript Logo" width="200" height="auto">
            <img class="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png" alt="GitHub Logo" width="200" height="auto">
          </div>
          <p>
            This project is a Films API developed using NestJS, MongoDB, and GitHub Actions for CI/CD. It provides endpoints to manage film data, add comments, and fetch films and comments.
          </p>
          <p>
            The key features of this Films API project include:
          </p>
          <ul>
            <li>Integration with MongoDB for storing film data and comments.</li>
            <li>Continuous Integration and Continuous Deployment (CI/CD) using GitHub Actions.</li>
            <li>Modular and component-based approach for easy organization of code into separate modules.</li>
            <li>Endpoints to manage film data, including fetching films and adding comments.</li>
          </ul>

          <h2>Components:</h2>
          <ol>
            <li><strong>Controllers:</strong> Handle incoming requests and delegate the business logic to appropriate services.</li>
            <li><strong>Services:</strong> Contain the business logic and interact with the MongoDB database using the Data Access Layer.</li>
            <li><strong>Data Access Layer:</strong> Encapsulates the interactions with the MongoDB database using Mongoose, providing a simple and efficient way to work with the data.</li>
            <li><strong>Models:</strong> Define the data structure and schema for the MongoDB documents, allowing seamless communication with the database.</li>
          </ol>

          <h2>Table of Contents</h2>
          <ul>
            <li><a href="#getting-started">Getting Started</a></li>
              <ul>
                <li><a href="#prerequisites">Prerequisites</a></li>
                <li><a href="#installation">Installation</a></li>
                <li><a href="#running-the-application">Running the Application</a></li>
              </ul>
            <li><a href="#api-endpoints">API Endpoints</a></li>
            <li><a href="#continuous-integration-and-deployment">Continuous Integration and Deployment</a></li>
            <li><a href="#technologies-used">Technologies Used</a></li>
            <li><a href="#license">License</a></li>
          </ul>

          <h2 id="getting-started">Getting Started</h2>

          <h3 id="prerequisites">Prerequisites</h3>
          <p>
            To run this application locally, ensure you have the following installed on your system:
          </p>
          <ul>
            <li>Node.js (version 18.x or later)</li>
            <li>npm (Node Package Manager)</li>
            <li>MongoDB (Make sure MongoDB is running on your local machine or provide the connection details of your MongoDB server in the application configuration). I have provided my database URL temporarily for your review.</li>
          </ul>

          <h3 id="installation">Installation</h3>
          <ol>
            <li>Clone the repository to your local machine:</li>
          </ol>

          <pre><code>git clone https://github.com/mxnuchim/films-api.git
          </code></pre>

          <ol start="2">
            <li>Change into the project directory:</li>
          </ol>

          <pre><code>cd films-api
          </code></pre>

          <ol start="3">
            <li>Install dependencies:</li>
          </ol>

          <pre><code>npm install
          </code></pre>

          <pre><code>yarn
          </code></pre>

          <h3 id="running-the-application">Running the application</h3>
          <p>
            To start the Films API server locally, run the following command:
          </p>

          <pre><code>npm run start:dev
          </code></pre>

          <p>
            The server will be accessible at <a href="http://localhost:3000/api">http://localhost:3000/api</a>.
          </p>

          <p>
            Now that you set it up, check out the API documentation at <a class="api-docs-link" href="http://localhost:3000/api/docs">http://localhost:3000/api/docs</a>.
          </p>

          <h2 id="api-endpoints">API Endpoints in this project</h2>
          <p>
            The following API endpoints are available:
          </p>

          <ul>
            <li>POST /api/films/create-films: Creates films in the database</li>
            <li>GET /api/films/get-films: Retrieves all films in the database</li>
            <li>GET /api/health-check: Checks the health of the API and ensures it runs</li>
            <li>POST /api/comments/create-comment: Creates a comment for a film</li>
            <li>GET /api/comments/get/:filmId: Get comments for a film</li>
            <li>DELETE /api/comments/delete-comment: Deletes a comment for a film</li>
          </ul>

          <h2 id="continuous-integration-and-deployment">Continuous Integration and Deployment (CI/CD)</h2>
          <p>
            This project is integrated with GitHub Actions for automated CI/CD. The CI/CD pipeline is triggered on each push to the main branch and each pull request targeting the main branch. The pipeline includes the following steps:
          </p>

          <ul>
            <li>Install Node.js and dependencies</li>
            <li>Build the application</li>
            <li>Restart the server using PM2</li>
            <li>After successful CI/CD, the code is automatically deployed to the production environment on AWS EC2.</li>
          </ul>

          <h2 id="technologies-used">Technologies Used</h2>
          <ul>
            <li>NestJS</li>
            <li>MongoDB</li>
            <li>GitHub Actions</li>
            <li>AWS EC2</li>
            <li>Nginx</li>
          </ul>

          <h2 id="license">License</h2>
          <p>
            This project is licensed under the MIT License.
          </p>

        </body>
      </html>
    `;
