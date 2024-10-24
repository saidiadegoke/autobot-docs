# Installing Dependencies

To set up the Autobot server environment successfully, you need to install the necessary dependencies. This guide will walk you through the installation process for each required component.

## 1. Java Development Kit (JDK)

### Installing JDK 11 or 17

- **For macOS:**
  1. Open Terminal.
  2. Use Homebrew to install JDK:
     ```bash
     brew install openjdk@11
     # or for JDK 17
     brew install openjdk@17
     ```
  3. After installation, add the JDK to your path:
     ```bash
     echo 'export JAVA_HOME="$(brew --prefix openjdk@11)"' >> ~/.bash_profile
     # or for JDK 17
     echo 'export JAVA_HOME="$(brew --prefix openjdk@17)"' >> ~/.bash_profile
     source ~/.bash_profile
     ```

- **For Windows:**
  1. Download the JDK installer from [Oracle's Official Website](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html) or [AdoptOpenJDK](https://adoptopenjdk.net/).
  2. Run the installer and follow the prompts.
  3. Set the `JAVA_HOME` environment variable:
     - Right-click on "This PC" or "My Computer" and select "Properties."
     - Click on "Advanced system settings" and then "Environment Variables."
     - Under "System variables," click "New" and add:
       - Variable name: `JAVA_HOME`
       - Variable value: Path to your JDK installation (e.g., `C:\Program Files\Java\jdk-11.0.10`).
  4. Update the `Path` variable to include the JDK `bin` directory.

- **For Linux:**
  1. Open Terminal.
  2. Install JDK using APT (for Ubuntu):
     ```bash
     sudo apt update
     sudo apt install openjdk-11-jdk
     # or for JDK 17
     sudo apt install openjdk-17-jdk
     ```

## 2. Apache Maven

### Installing Maven

- **For macOS:**
  1. Open Terminal.
  2. Use Homebrew to install Maven:
     ```bash
     brew install maven
     ```

- **For Windows:**
  1. Download the Maven binary zip file from [Maven's Official Website](https://maven.apache.org/download.cgi).
  2. Extract the zip file to a directory (e.g., `C:\Program Files\Apache\maven`).
  3. Set the `M2_HOME` environment variable:
     - Follow similar steps as setting `JAVA_HOME`.
       - Variable name: `M2_HOME`
       - Variable value: Path to your Maven installation.
  4. Add Maven to your `Path` variable:
     - Append `;%M2_HOME%\bin` to the `Path` variable.

- **For Linux:**
  1. Open Terminal.
  2. Install Maven using APT (for Ubuntu):
     ```bash
     sudo apt update
     sudo apt install maven
     ```

## 3. Docker

### Installing Docker

- **For macOS:**
  1. Download Docker Desktop from [Docker's Official Website](https://www.docker.com/products/docker-desktop).
  2. Open the downloaded file and drag Docker to your Applications folder.
  3. Launch Docker from the Applications folder and follow any prompts to complete the installation.

- **For Windows:**
  1. Download Docker Desktop from [Docker's Official Website](https://www.docker.com/products/docker-desktop).
  2. Run the installer and follow the prompts.
  3. Ensure you have WSL 2 installed if you're using Windows 10 or later.

- **For Linux:**
  1. Open Terminal.
  2. Follow the installation instructions for your specific Linux distribution on [Docker's official documentation](https://docs.docker.com/engine/install/).

## 4. AWS SAM CLI

### Installing AWS SAM CLI

- **For macOS:**
  1. Open Terminal.
  2. Install using Homebrew:
     ```bash
     brew tap aws/tap
     brew install aws-sam-cli
     ```

- **For Windows:**
  1. Download the installer from [AWS SAM CLI Installation Guide](https://docs.aws.amazon.com/serverless-application-model/latest/userguide/serverless-sam-cli-install.html).
  2. Run the installer.

- **For Linux:**
  1. Open Terminal.
  2. Follow the installation instructions provided in the [AWS SAM CLI Installation Guide](https://docs.aws.amazon.com/serverless-application-model/latest/userguide/serverless-sam-cli-install.html).

## 5. Node.js and NPM (for the Frontend)

### Installing Node.js

- **For macOS:**
  1. Open Terminal.
  2. Install using Homebrew:
     ```bash
     brew install node
     ```

- **For Windows:**
  1. Download the Node.js installer from [Node.js Official Website](https://nodejs.org/en/download/).
  2. Run the installer and follow the prompts.

- **For Linux:**
  1. Open Terminal.
  2. Install Node.js using APT (for Ubuntu):
     ```bash
     sudo apt update
     sudo apt install nodejs npm
     ```

## 6. Angular CLI (for the Frontend)

### Installing Angular CLI

After installing Node.js, you can install Angular CLI globally by running the following command in your terminal or command prompt:

```bash
npm install -g @angular/cli
```