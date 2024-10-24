# Building for Distribution

## Overview

This document outlines the process of building the Autobot Candidate Project for production. The frontend application is built and its output is copied into the backend project. The combined application is packaged into a `.jar` file, which can then be delivered to customers.

## Steps to Build the Application for Production

### Step 1: Build the Frontend

1. **Navigate to the Frontend Directory**

   Open your terminal and navigate to the frontend project directory:

   ```bash
   cd autobot-candidate-frontend
   ```

2. **Install Frontend Dependencies** (if not done previously)

   Make sure all frontend dependencies are installed. If you haven't done this, run:

   ```bash
   npm install
   ```

3. **Build the Frontend Application**

   Run the following command to build the frontend application for production:

   ```bash
   npm run build
   ```

   This command will generate a production-ready build of the frontend application, typically located in the `dist/autobot-client-web` directory.

### Step 2: Copy Frontend Files to Backend

1. **Navigate to the Backend Directory**

   After building the frontend, navigate to the backend project directory:

   ```bash
   cd ../autobot-candidate-backend
   ```

2. **Copy Frontend Files to Backend**

   Use the following command to copy the built frontend files into the backend's static resources directory:

   ```bash
   cp -r dist/autobot-client-web/* src/main/resources/static/
   ```

   This command copies all the files from the frontend build directory into the `static` directory of the backend project. These files will be served by the backend application when deployed.

### Step 3: Package the Backend Application

1. **Package the Backend Application**

   To package the combined application (frontend and backend) into a `.jar` file, run:

   ```bash
   mvn clean package
   ```

   This command compiles the backend code and creates a `.jar` file that includes both the backend application and the copied frontend assets.

### Step 4: Delivering the Application

Once the `.jar` file is created, it can be found in the `target` directory of the backend project. This `.jar` file is ready to be delivered to customers. It contains the entire application, and the frontend will be accessible through the backend server.

## Additional Notes

- For deploying or testing the `.jar` file, you can use a command such as:

  ```bash
  java -jar target/autobot-candidate-backend-1.0-SNAPSHOT.jar
  ```

- Monitor application logs for any issues after deployment.
