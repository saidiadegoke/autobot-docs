# Running the Autobot Server Application

The Autobot application consists of a frontend built with Angular and a backend that utilizes AWS Lambda for production. Each component runs independently, and this document will guide you through the process of running both the frontend and the backend.

## 1. Running the Frontend

### Prerequisites

Make sure you have installed the following:
- Node.js (with npm)
- Angular CLI

### Steps to Run the Frontend

1. **Navigate to the Frontend Directory:**
   Open your terminal and navigate to the frontend directory of the Autobot application.
   ```bash
   cd path/to/autobot-server-frontend
   ```

2. **Install Dependencies:**
   If you haven't done this yet, install the required dependencies using npm:
   ```bash
   npm install
   ```

3. **Run the Angular Application:**
   Use the Angular CLI to serve the application:
   ```bash
   ng serve --open
   ```
   This command will compile the application and open it in your default web browser at `http://localhost:4200`. 

4. **Access the Application:**
   Once the Angular application is running, you can access it by navigating to:
   ```
   http://localhost:4200
   ```

## 2. Running the Backend

### Prerequisites

Ensure you have the following installed:
- Java Development Kit (JDK 11 or 17)
- Apache Maven
- AWS SAM CLI

### Steps to Run the Backend Locally

1. **Navigate to the Backend Directory:**
   Open your terminal and navigate to the backend directory of the Autobot application.
   ```bash
   cd path/to/autobot-server-backend
   ```

2. **Build the Application:**
   Compile the backend application using Maven. This will also package your application.
   ```bash
   mvn clean package
   ```

3. **Run the AWS SAM CLI:**
   Use the AWS SAM CLI to start the local testing environment. Make sure you are in the backend directory where the `template.yaml` file is located.
   ```bash
   sam local start-api
   ```

4. **Access the Backend API:**
   The backend API should now be accessible via the following URL:
   ```
   http://localhost:3000
   ```

### Deploying to Production

When ready to deploy to production, the backend will be deployed to AWS Lambda. Ensure that your Lambda functions are set up and configured correctly in the AWS Management Console.

- Use the AWS CLI or SAM CLI to deploy your application.
- Follow best practices for configuring your Lambda environment, such as setting environment variables, IAM roles, and resource permissions.

