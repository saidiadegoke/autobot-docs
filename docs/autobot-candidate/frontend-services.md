# Autobot Candidate Frontend Services

This document provides a summary of the frontend services used in the Autobot Candidate Application, as represented in the attached image.

## Services Overview

The following services are organized under the `app/services` directory:

### 1. **Config Service**
   - **Purpose**: Manages application configuration settings, including loading and storing configuration data.
   - **Files**:
     - `config.service.ts`: The main service file for managing application configuration.
     - `config.service.spec.ts`: The specification file for unit tests related to the Config Service.

### 2. **Database Service**
   - **Purpose**: Handles database interactions, including CRUD operations and data retrieval.
   - **Files**:
     - `database.service.ts`: The main service file for database-related functionality.
     - `database.service.spec.ts`: The specification file for unit tests related to the Database Service.

### 3. **Emitter Service**
   - **Purpose**: Implements an event emitter for managing events and subscriptions throughout the application.
   - **Files**:
     - `emitter.service.ts`: The main service file for the Emitter Service functionality.
     - `emitter.service.spec.ts`: The specification file for unit tests related to the Emitter Service.

### 4. **HTTP Service**
   - **Purpose**: Provides methods for making HTTP requests to external APIs and backend services.
   - **Files**:
     - `http.service.ts`: The main service file for HTTP operations.
     - `http.service.spec.ts`: The specification file for unit tests related to the HTTP Service.

### 5. **Local Storage Service**
   - **Purpose**: Facilitates interaction with the browser's local storage, allowing data persistence between sessions.
   - **Files**:
     - `local-storage.service.ts`: The main service file for local storage operations.
     - `local-storage.service.spec.ts`: The specification file for unit tests related to the Local Storage Service.

### 6. **RDP Config Service**
   - **Purpose**: Manages the Remote Desktop Protocol (RDP) configuration settings for the application.
   - **Files**:
     - `rdp-config.service.ts`: The main service file for handling RDP-related configurations.

### 7. **RX Stomp Service Factory**
   - **Purpose**: Provides a factory for creating instances of RxJS Stomp clients for WebSocket communication.
   - **Files**:
     - `rx-stomp-service-factory.ts`: The main service file for the RX Stomp Service Factory.

### 8. **RX Stomp Service**
   - **Purpose**: Manages the communication between the application and the WebSocket server using Stomp protocol.
   - **Files**:
     - `rx-stomp.service.ts`: The main service file for RX Stomp communication.

### 9. **Session Service**
   - **Purpose**: Handles session management within the application, including user authentication and session persistence.
   - **Files**:
     - `session.service.ts`: The main service file for session management.
     - `session.service.spec.ts`: The specification file for unit tests related to the Session Service.
