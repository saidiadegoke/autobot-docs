# Setting Up the Development Environment

This guide will walk you through the steps to set up both the **AutoBot Admin Backend** and the **Angular Frontend**. It will also include instructions on bundling the Angular frontend into the Spring Boot Admin backend for a complete deployment package.

---

## Prerequisites

Before starting, make sure you have the following installed on your system:

### 1. **Java Development Kit (JDK)**
   - **Version**: JDK 14 or higher is required.
   - **Download**: [Java SE Development Kit](https://www.oracle.com/java/technologies/javase-downloads.html)

### 2. **Apache Maven**
   - **Version**: Apache Maven 3.6.3 or higher.
   - **Download**: [Apache Maven Official Site](https://maven.apache.org/install.html)

### 3. **Node.js and npm**
   - **Node.js**: Version 12 or higher.
   - **npm**: Installed along with Node.js.
   - **Download**: [Node.js Official Site](https://nodejs.org/)

### 4. **Git**
   - **Version**: Latest stable version.
   - **Download**: [Git-SCM](https://git-scm.com/)

### 5. **Angular CLI**
   - **Version**: Latest Angular CLI.
   - **Installation**: Run the following command:
     ```bash
     npm install -g @angular/cli
     ```

---

## Steps to Set Up the Backend

### Step 1: Clone the Backend Repository

Clone the **AutoBot Admin Backend** repository:

```bash
git clone git@bitbucket.org:morgengreen1/autobot-admin-backend.git
```

### Step 2: Navigate to the Backend Directory

```bash
cd autobot-admin-backend
```

### Step 3: Build the Backend Project

Make sure to build the project using Maven to resolve all dependencies:

```bash
mvn clean install
```

This will compile the backend project, resolve dependencies, and generate necessary JAR files.

### Step 4: Run the Backend Application

Once the build is successful, start the backend application using Spring Boot:

```bash
mvn spring-boot:run
```

By default, the application should be accessible at `http://localhost:8080`.

---

## Steps to Set Up the Frontend

### Step 1: Clone the Frontend Repository

Clone the **AutoBot Admin Frontend** repository:

```bash
git clone git@bitbucket.org:morgengreen1/autobot-admin-frontend.git
```

### Step 2: Navigate to the Frontend Directory

```bash
cd autobot-admin-frontend
```

### Step 3: Install Node Modules

Install all dependencies for the Angular frontend using `npm`:

```bash
npm install
```

### Step 4: Run the Angular Frontend Locally (Optional)

To run the frontend independently during development, use the Angular CLI:

```bash
ng serve --open
```

This will start the Angular application at `http://localhost:4200`. You can view and make changes to the frontend during development without bundling it with the backend.

---

## Bundling the Angular Frontend with the Spring Boot Backend

To package the Angular frontend into the Spring Boot backend, follow the steps below:

### Step 1: Build the Angular Frontend

Before bundling the frontend into the backend, you need to generate the production build for Angular:

```bash
ng build --prod
```

This will generate the production-ready files inside the `dist/` directory.

### Step 2: Copy Angular Build to Backend

After building the Angular frontend, copy the contents of the `dist/` folder into the Spring Boot static resources folder (`src/main/resources/static`) in the backend project.

1. Navigate to the Angular frontend build directory:
   ```bash
   cd dist/[your-angular-app-name]
   ```
   Replace `[your-angular-app-name]` with the actual name of the built application directory.

2. Copy the built frontend files into the backend's `static/` directory:
   ```bash
   cp -r * ../../autobot-admin-backend/src/main/resources/static/
   ```

### Step 3: Rebuild the Backend

After copying the Angular build files to the backend project, rebuild the Spring Boot project to ensure that the Angular frontend is bundled:

```bash
cd ../../autobot-admin-backend
mvn clean install
```

### Step 4: Run the Bundled Application

Finally, run the backend application with the bundled frontend:

```bash
mvn spring-boot:run
```

The entire application (backend + frontend) should now be accessible at `http://localhost:9090`.
