# System Requirements for Autobot Server

Before setting up the Autobot server environment, ensure your system meets the following requirements:

## 1. Operating System

- **Windows**: Windows 10 or later
- **macOS**: macOS Mojave (10.14) or later
- **Linux**: Any modern distribution (Ubuntu, CentOS, Fedora, etc.)

## 2. Hardware Requirements

- **Processor**: Multi-core processor (Intel i5/Ryzen 5 or better recommended)
- **RAM**: Minimum of 8 GB (16 GB or more recommended for better performance)
- **Storage**: 
  - Minimum of 10 GB of free disk space for the Autobot server and its dependencies.
  - SSD is preferred for faster read/write speeds.

## 3. Software Requirements

### Java Development Kit (JDK)

- **Version**: JDK 11 or JDK 17
- **Download**: [AdoptOpenJDK](https://adoptopenjdk.net/) or [Oracle's Official Website](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html)
- **Configuration**: Set the `JAVA_HOME` environment variable to point to your JDK installation.

### Apache Maven

- **Version**: Latest stable release
- **Download**: [Maven's Official Website](https://maven.apache.org/download.cgi)
- **Configuration**: Add Maven to your system's `PATH`.

### Docker

- **Download**: [Docker Desktop](https://www.docker.com/products/docker-desktop) (available for Windows, macOS, and Linux)
- **Configuration**: Follow the installation instructions for your operating system.

### AWS SAM CLI

- **Prerequisites**: Ensure Python 3.6 or later is installed on your system.
- **Installation**: Follow the [AWS SAM CLI Installation Guide](https://docs.aws.amazon.com/serverless-application-model/latest/userguide/serverless-sam-cli-install.html).

### Node.js and NPM (for the Frontend)

- **Version**: Node.js 14.x or later
- **Download**: [Node.js Official Website](https://nodejs.org/en/download/)
- **Note**: NPM is included with Node.js.

### Angular CLI (for the Frontend)

- **Installation**: After installing Node.js, you can install Angular CLI globally by running the following command:
  ```bash
  npm install -g @angular/cli
  ```

## 4. Network Requirements

- **Internet Access**: Required for downloading dependencies, updates, and accessing external APIs.
- **Local Network**: Ensure your system can communicate over your local network, especially if you're working with remote servers.

