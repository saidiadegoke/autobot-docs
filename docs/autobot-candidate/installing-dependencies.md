# Installing Dependencies

## Introduction

This document provides instructions on how to install the necessary dependencies for both the Autobot Candidate Frontend and Backend projects. Ensure that you have cloned the repositories before proceeding with the dependency installation.

## Prerequisites

- **Node.js and npm**: For the frontend, you need Node.js installed, which comes with npm (Node Package Manager). You can check if Node.js and npm are installed by running the following commands in your terminal:

  ```bash
  node --version
  npm --version
  ```

  If Node.js is not installed, download and install it from the [official Node.js website](https://nodejs.org/).

- **Java Development Kit (JDK)**: For the backend, ensure that you have Java JDK installed. You can check the Java version by running:

  ```bash
  java -version
  ```

  If you do not have the JDK installed, download it from the [Oracle website](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html) or use [OpenJDK](https://openjdk.java.net/).

- **Apache Maven**: The backend uses Maven for dependency management. You can check if Maven is installed by running:

  ```bash
  mvn -v
  ```

  If Maven is not installed, you can download it from the [official Apache Maven website](https://maven.apache.org/download.cgi).

## Installing Dependencies

### Step 1: Navigate to the Frontend Directory

Open your terminal and navigate to the frontend project directory:

```bash
cd autobot-candidate-frontend
```

### Step 2: Install Frontend Dependencies

Run the following command to install the frontend dependencies using npm:

```bash
npm install
```

This command will read the `package.json` file in the frontend directory and install all the required packages listed there. This may take a few minutes depending on your internet speed.

### Step 3: Navigate to the Backend Directory

After installing the frontend dependencies, navigate to the backend project directory:

```bash
cd ../autobot-candidate-backend
```

### Step 4: Install Backend Dependencies

To install the backend dependencies, run the following command:

```bash
mvn clean install
```

This command will compile the project, run any tests, and package the application. It will also download all the required dependencies defined in the `pom.xml` file. Depending on your system and the number of dependencies, this process may take a few minutes.

## Step 5: Verify Installation

### For Frontend

To verify that the frontend dependencies were installed correctly, you can run the following command:

```bash
npm run serve or npm start
```

This will start the development server, and you should be able to access the application in your browser.

### For Backend

To verify that the backend dependencies were installed correctly, you can run the following command:

```bash
mvn spring-boot:run
```

This command will start the backend application, and you should see logs indicating that the server is running.

