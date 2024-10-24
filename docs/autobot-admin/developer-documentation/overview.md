# Overview

The **AutoBot Admin** system is composed of two distinct but interconnected projects:

1. **AutoBot Admin Backend**:
   - **Technology**: Spring Boot (Java)
   - **Purpose**: The backend serves as the core of the application, managing the business logic, database interactions, and handling API requests. It provides services to manage exam centers, client nodes, and examination data, and serves as the bridge between the frontend and the underlying database or service layers. It exposes RESTful endpoints for the frontend to interact with.
   - **Responsibilities**:
     - Handles user authentication and authorization.
     - Manages the exam flow (start, monitor, and end exams).
     - Provides APIs for uploading reports and retrieving exam-related data.
     - Interfaces with the database to manage all exam center-related data.

2. **AutoBot Admin Frontend**:
   - **Technology**: Angular (TypeScript)
   - **Purpose**: The frontend is the user interface layer of the system, developed using Angular. It provides administrators with the ability to interact with the backend services in a visual, user-friendly manner. The frontend handles UI rendering, user input, and displays data retrieved from the backend.
   - **Responsibilities**:
     - Provides an admin dashboard where exam centers and candidate systems can be managed.
     - Allows administrators to initiate and monitor exams, upload reports, and access exam results.
     - Sends requests to the backend and processes the responses for displaying data to the user.

### How They Fit Together

The **AutoBot Admin** system follows a **client-server architecture**, where the **backend** (Spring Boot) acts as the server, and the **frontend** (Angular) acts as the client. The backend provides RESTful APIs that the frontend consumes to perform various operations.

**Bundling Approach**: The Angular frontend is packaged into the Spring Boot backend as static resources. When the backend is deployed, it serves both the frontend UI and the API. In production, this results in a single application that handles both the UI and the backend services.

The backend hosts the frontend by serving static files generated during the Angular build process from its `src/main/resources/static` directory. As a result, a single application can be deployed that provides both the frontend and backend from the same server.

### Architectural Pattern: **Monolithic Application**

This design can be classified as a **monolithic architecture**, where both the frontend and backend components are packaged and deployed together as a single unit.

#### Advantages of the Monolithic Design:
1. **Simplicity**: The development and deployment process is simpler since there's only one application to manage. The frontend and backend are tightly coupled, making deployment straightforward.
2. **Single Deployment**: Since the frontend is packaged with the backend, it ensures compatibility between the two. The application can be deployed to a single server or environment.
3. **Easier for Small Teams**: With everything in one place, managing the application is easier for smaller teams. There's less overhead in terms of maintaining multiple repositories or services.
4. **Shared Codebase**: Shared dependencies and libraries can be managed more easily within a single project, avoiding versioning conflicts.

The **AutoBot Admin** system uses a **monolithic architecture**, where the frontend and backend are bundled and deployed together. This architecture works well for smaller applications, providing simplicity and ease of deployment.