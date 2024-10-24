# Setting Up Development Environment

## Overview

This document provides instructions on setting up the development environment for the Autobot Candidate Project, specifically focusing on the required Integrated Development Environments (IDEs) and installations of essential tools such as Node.js, npm, Maven, and Java (either version 11 or 17).

## Prerequisites

Before you begin, ensure that you have the following tools and software installed on your machine:

### 1. Integrated Development Environments (IDEs)

- **Visual Studio Code (VS Code)**
  - A popular, lightweight code editor with support for various extensions and features.
  - Download and install from [Visual Studio Code](https://code.visualstudio.com/).

- **IntelliJ IDEA**
  - A powerful IDE primarily used for Java development, suitable for backend applications.
  - Download and install from [JetBrains IntelliJ IDEA](https://www.jetbrains.com/idea/download/).

### 2. Java Development Kit (JDK)

- **Java 11 or Java 17**
  - You need to have either Java 11 or Java 17 installed on your machine. The choice depends on your project's requirements and compatibility with AWS Lambda.
  
#### Installation Steps:

- **Java 11:**
  - Download from [AdoptOpenJDK](https://adoptopenjdk.net/) or [Oracle](https://www.oracle.com/java/technologies/javase/jdk11-archive-downloads.html).
  
- **Java 17:**
  - Download from [AdoptOpenJDK](https://adoptopenjdk.net/) or [Oracle](https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html).

### 3. Node.js and npm

- **Node.js**
  - Node.js is a JavaScript runtime that allows you to run JavaScript on the server side and is required for the frontend development.
  
#### Installation Steps:

1. Download and install Node.js from the [Node.js official website](https://nodejs.org/). This installation includes npm (Node Package Manager).

2. After installation, verify the installation by opening a terminal and running the following commands:

   ```bash
   node --version
   npm --version
   ```

   This should return the installed versions of Node.js and npm.

### 4. Apache Maven

- **Maven**
  - Maven is a build automation tool primarily for Java projects. It is used for managing project dependencies, builds, and documentation.

#### Installation Steps:

1. Download Apache Maven from the [Apache Maven official website](https://maven.apache.org/download.cgi).

2. Follow the installation instructions provided on the website, which may include setting environment variables.

3. Verify the installation by running the following command in your terminal:

   ```bash
   mvn -v
   ```

   This should return the installed version of Maven along with the Java version it is using.

## Setting Up the Environment

### Step 1: Configure Environment Variables (Optional)

- Depending on your operating system, you may need to set environment variables for Java and Maven to make them accessible from the command line.

#### For Windows:

1. **Set JAVA_HOME:**
   - Right-click on "This PC" > Properties > Advanced system settings > Environment Variables.
   - Click "New" under System variables and enter:
     - Variable name: `JAVA_HOME`
     - Variable value: Path to your JDK installation (e.g., `C:\Program Files\Java\jdk-11.0.24`).

2. **Update PATH Variable:**
   - Find the `Path` variable in System variables, select it, and click "Edit".
   - Add new entries for:
     - `%JAVA_HOME%\bin`
     - Path to Maven `bin` folder (e.g., `C:\apache-maven-3.8.1\bin`).

#### For macOS/Linux:

1. Open your terminal and edit your shell profile file (e.g., `~/.bashrc`, `~/.zshrc`).
   
2. Add the following lines:

   ```bash
   export JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk-11.0.24.jdk/Contents/Home
   export PATH=$JAVA_HOME/bin:$PATH
   export MAVEN_HOME=/path/to/apache-maven-3.8.1
   export PATH=$MAVEN_HOME/bin:$PATH
   ```

3. Save the file and run `source ~/.bashrc` or `source ~/.zshrc` to apply the changes.
