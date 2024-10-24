# App Components

### Autobot Admin Developer Documentation

The **Autobot Admin** project is structured into multiple packages, each focusing on specific functionality within the application. Below is a detailed breakdown of the packages and the role of the key classes.

---

### 1. **`autobot.app.admin.center` Package**

This package contains classes and logic related to managing "centers" within the application. Based on the project structure, it is used to manage or organize entities like learning centers, locations, or operational centers.

---

### 2. **`autobot.app.admin.clientnode` Package**

The `clientnode` package contains logic for handling client nodes or client-side functionalities. This could be for dealing with interactions from client applications or other services connected to Autobot Admin.

---

### 3. **`autobot.app.admin.dialect` Package**

This package deals with custom SQL dialect implementations for the application, particularly focusing on SQLite.

- **`SQLDialect`**: This class extends an existing SQL dialect class (probably from Hibernate or another ORM). It registers various column types (such as `TINYINT`, `BIGINT`, `CHAR`, etc.) that map to specific data types in the SQLite database.
  
  - This class handles various data types used in the database and maps them to their appropriate representations in SQLite. For example, it registers `Types.INTEGER` as `"integer"` and `Types.VARCHAR` as `"varchar"`.
  
- **`SQLiteIdentityColumnSupport`**: Provides support for identity columns, which are used for auto-incrementing primary keys in databases like SQLite. This class likely manages how identity columns (auto-increment fields) are handled when working with SQLite in the application.

---

### 4. **`autobot.app.admin.dto` Package**

The DTO (Data Transfer Object) package contains classes that are used to transfer data between different parts of the application.

- **`ResponseMessage`**: Encapsulates responses sent from the server, containing information such as status codes, messages, and data objects.
- **`SimpleMessageDTO`**: A simpler version of `ResponseMessage`, used for lightweight communications, where fewer fields are needed.

---

### 5. **`autobot.app.admin.enums` Package**

This package contains enums, which define a set of constants that can be used across the application for various purposes.

- **`ErrorMessagesEnum`**: Contains predefined error messages that the application can return. These messages may correspond to specific error codes or situations.
- **`RequestStatusesEnum`**: Defines different statuses that a request can have, such as "OK", or "FAIL". This is used to manage the flow of requests and their outcomes.
- **`ResponseCodes`**: Defines different response codes, most likely for HTTP responses. These include FAIL(`01`) for bad request and OK(`00`) for success.
- **`SubjectsEnum`**: Enumerates different subjects, which could be related to educational or assessment modules.

---

### 6. **`autobot.app.admin.exam` Package**

This package contains logic related to exams, assessments, or testing functionality. The package name suggests that this module handles interactions related to exams within the system.

---

### 7. **`autobot.app.admin.exceptions` Package**

This package handles exceptions specific to the application.

- **`InvalidInputException`**: A custom exception that is thrown when input provided by a user or a client does not meet the expected format or validation criteria.

---

### 8. **`autobot.app.admin.home` Package**

- **`DefaultController`**: This class is the main controller that handles the default route or root endpoints of the application.

---

### 9. **`autobot.app.admin.http` Package**

The `http` package handles all HTTP-related operations, including communication with external services through APIs.

- **`AutobotClient`**: Likely a  class that interacts with external APIs or services. This could be using Feign or another HTTP client library to make API calls and handle responses.
- **`FeignConfig`**: Configuration class for setting up Feign clients. Feign is a declarative HTTP client used for making HTTP requests to REST APIs. This configuration may include things like request logging, timeout settings, and error handling.
- **`FeignHeaderInterceptor`**: This class likely intercepts HTTP requests and adds custom headers to each request before it is sent. These headers could include things like authorization tokens or specific API keys.

---

### 10. **`autobot.app.admin.socket` Package**

The `socket` package manages WebSocket communication, allowing for real-time, two-way communication between the server and the client.

- **`CustomSocketMessage`**: This class defines the structure of messages that are sent over WebSocket connections.
- **`SocketMessagePayloadTypesEnum`**: Enum that defines the types of payloads that can be transmitted over the WebSocket, such as text, binary data, or JSON objects.
- **`WebConfig`**: A configuration class for setting up WebSocket communication, possibly defining WebSocket endpoints or protocols.
- **`WebSocketConfig`**: Another configuration class specifically for configuring WebSocket connections, including things like allowed origins and security policies.

---

### 11. **`autobot.app.admin.util` Package**

This package provides utility classes that contain reusable methods or functionalities used throughout the project.

- **`APIUtil`**: Utility class for common API operations, possibly for building standard responses, formatting HTTP requests, or validating request payloads.
- **`ArraysUtil`**: Contains utility methods for working with arrays, such as sorting, merging, or searching through arrays.
- **`FormatterUtil`**: Provides methods for formatting various types of data, such as dates, strings, or numbers.
- **`UUIDUtil`**: A utility class for generating and validating UUIDs (Universally Unique Identifiers), which are often used for generating unique identifiers for entities in the system.

---

### 12. **`AutobotAdminApplication`**

This is the entry point of the entire Autobot Admin application. It contains the `main()` method that starts the application. If this is a Spring Boot application, this class annotated with `@SpringBootApplication`, serving as the bootstrap class for launching the entire project.
