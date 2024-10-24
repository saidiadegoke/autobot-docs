# Autobot Condidate Backend Components

This documentation provides an overview of the backend components of the Autobot Candidate Application, categorizing them into their respective packages. The application is built using Java and follows a structured approach, which enhances maintainability and scalability.

## Project Structure Overview

### 1. **Controllers**
The `controllers` package contains classes responsible for handling incoming requests and returning appropriate responses.

- **ExamControllerSocket.java**
  - Manages WebSocket connections for exam-related functionalities.

- **NodeController.java**
  - Handles HTTP requests related to node operations.

- **NodeControllerRDP.java**
  - Manages Remote Desktop Protocol (RDP) related functionalities.

### 2. **Dialect**
The `dialect` package includes custom SQL dialect implementations.

- **SQLDialect.java**
  - Provides specific SQL dialect functionality for the application.

- **SQLiteIdentityColumnSupport.java**
  - Supports identity column generation for SQLite databases.

### 3. **Data Transfer Objects (DTO)**
The `dto` package includes classes used for transferring data between client and server.

- **ClientNodeTypeDto.java**
- **ConnectRequestDTO.java**
- **ConnectToAdminResponseDTO.java**
- **ExamSessionEndNotificationDTO.java**
- **ExamSessionStartNotificationDTO.java**
- **JoinExamRequestDTO.java**
- **NodeSystemPropertyDTO.java**
- **PulseCheckDTO.java**
- **RDClientDTO.java**
- **ResponseMessage.java**
- **SubmitAcknowledgmentMessage.java**
- **SubmitAnswerRequestDTO.java**
- **SubmitAnswerResponseDTO.java**

### 4. **Enums**
The `enums` package contains enumerations for various constants used throughout the application.

- **ErrorMessagesEnum.java**
- **RequestStatusesEnum.java**
- **ResponseCodes.java**
- **SocketMessagePayloadTypesEnum.java**
- **SubjectsEnum.java**
- **SubmitInstructionsEnum.java**

### 5. **Exceptions**
The `exceptions` package holds custom exceptions used for handling specific error scenarios.

- **InvalidInputException.java**
  - Thrown when invalid input is detected.

### 6. **HTTP**
The `http` package manages HTTP communication.

- **AutobotClient.java**
  - A client for making HTTP calls to the admin server.

- **CustomFeignClient.java**
  - A custom Feign client for simplified HTTP requests.

- **FeignConfig.java**
  - Configuration settings for Feign clients.

### 7. **Services**
The `services` package contains service interfaces and implementations that encapsulate business logic.

- **ConnectService.java**
  - Interface for connecting client nodes to the admin server.

- **ConnectServiceImpl.java**
  - Implementation of the `ConnectService`.

- **ConnectServiceRDPImpl.java**
  - Implementation for handling RDP connections.

- **ExamService.java**
  - Interface for managing exam-related functionalities.

- **ExamServiceImpl.java**
  - Implementation of the `ExamService`.

- **ExamServiceRDPImpl.java**
  - RDP-specific implementation of the `ExamService`.

### 8. **Socket**
The `socket` package handles WebSocket communication.

- **AutobotStompSessionHandler.java**
  - Manages STOMP sessions for WebSocket communication.

- **AutobotStompSessionHandlerRDP.java**
  - RDP-specific STOMP session handler.

- **CustomSocketMessage.java**
  - Represents messages sent over WebSocket connections.

### 9. **Storage**
The `storage` package contains classes related to data persistence.

- **ClientNodeEntity.java**
  - Entity representing client node data.

- **ClientNodeRepository.java**
  - Repository interface for client node data access.

### 10. **Utility Classes**
The `util` package includes various utility classes for common functionalities.

- **APIUtil.java**
  - Utility class for handling API-related tasks.

- **IPAddress.java**
  - Utility for managing IP address operations.

- **SigarUtil.java**
  - Utility class for system monitoring and metrics.

- **SystemInfoUtil.java**
  - Gathers and manages system information.

- **AutobotClientnodeApplication.java**
  - Main application entry point for the Autobot Client Node.
