### Documentation for `ExamControllerClient` and `ExamControllerSocket`

This document provides an overview of two controllers, `ExamControllerClient` and `ExamControllerSocket`, that handle various exam-related functionalities, including submission of exam answers, joining exams, performing pulse checks, and managing client-server WebSocket interactions.

---

### **`ExamControllerClient` Class**

#### **Purpose**:
The `ExamControllerClient` class provides a REST API for client nodes to interact with the exam system. It allows for submitting answers, checking exam status, performing pulse checks, and handling Remote Desktop Protocol (RDP)-related requests. It utilizes the `ExamService` for the underlying business logic.

#### **Annotations**:
- **`@CrossOrigin(origins = "*", maxAge = 3600)`**: Enables Cross-Origin Resource Sharing (CORS) for all origins with a max age of 3600 seconds.
- **`@RestController`**: Marks this class as a REST controller.
- **`@RequestMapping("/api/client/exam")`**: Defines the base URL for all endpoints in this controller.

#### **Endpoints**:

1. **`/submit-answer`** (`POST`)
   - **Purpose**: Submits an answer for a regular exam.
   - **Parameters**: `SubmitAnswerRequestDTO` (in the request body).
   - **Returns**: `SubmitAnswerResponseDTO` wrapped in a `ResponseMessage`.
   - **Error Handling**: Catches any exceptions and logs errors.

2. **`/submit-answer-rdp`** (`POST`)
   - **Purpose**: Submits an answer for an RDP (Remote Desktop Protocol) exam.
   - **Parameters**: `SubmitAnswerRequestDTO` (in the request body).
   - **Returns**: `SubmitAnswerResponseDTO` wrapped in a `ResponseMessage`.

3. **`/submit-exam`** (`POST`)
   - **Purpose**: Submits the exam from a client node (regular exam).
   - **Parameters**: `SubmitAnswerRequestDTO` (in the request body).
   - **Returns**: `SimpleMessageDTO` wrapped in a `ResponseMessage`.

4. **`/submit-exam-rdp`** (`POST`)
   - **Purpose**: Submits the exam from an RDP client node.
   - **Parameters**: `SubmitAnswerRequestDTO` (in the request body).
   - **Returns**: `SimpleMessageDTO` wrapped in a `ResponseMessage`.

5. **`/join-exam-rdp`** (`POST`)
   - **Purpose**: Allows an RDP client node to join an exam session.
   - **Parameters**: `JoinExamRequestDTO` (in the request body).
   - **Returns**: `ExamSessionDTO` wrapped in a `ResponseMessage`.

6. **`/pulse-check-rdp`** (`POST`)
   - **Purpose**: Performs a pulse check for RDP client nodes, which is a mechanism to monitor the health and performance of nodes during an exam.
   - **Parameters**: A list of `RDPClientDTO` objects (in the request body).
   - **Returns**: A `ResponseMessage` indicating success or failure.

---

### **`ExamControllerSocket` Class**

#### **Purpose**:
The `ExamControllerSocket` class provides WebSocket endpoints for real-time communication between client nodes and the exam system. It handles tasks like joining exams, performing pulse checks, and monitoring exams in progress. The WebSocket communication is particularly useful for live, ongoing exams.

#### **Annotations**:
- **`@Controller`**: Marks this class as a Spring MVC controller.
- **`@MessageMapping`**: Used to map WebSocket messages to specific methods.
- **`@SendTo`**: Specifies the destination of WebSocket responses, allowing communication with subscribed clients.

#### **WebSocket Endpoints**:

1. **`/join-exam`** (WebSocket)
   - **Purpose**: Allows a client node to join an exam session.
   - **Parameters**: `JoinExamRequestDTO`.
   - **Returns**: An `ExamSessionDTO` object that contains information about the joined exam session.
   - **WebSocket Response Topic**: `/topic/watch-exam-session-admin`.

2. **`/join-exam-rdp`** (WebSocket)
   - **Purpose**: Allows an RDP client node to join an exam session.
   - **Parameters**: `JoinExamRequestDTO`.
   - **Returns**: An `ExamSessionDTO` object containing exam session information.
   - **WebSocket Response Topic**: `/topic/watch-exam-session-admin`.

3. **`/pulse-check`** (WebSocket)
   - **Purpose**: Allows a client node to send real-time performance metrics (e.g., network speed, CPU, and RAM usage).
   - **Parameters**: `PulseCheckDTO`.
   - **Returns**: No response. The method processes the pulse check and performs necessary actions.

4. **`/pulse-check-rdp`** (WebSocket)
   - **Purpose**: Performs a pulse check for multiple RDP client nodes.
   - **Parameters**: A list of `RDPClientDTO` objects.
   - **Returns**: No response. The method processes the pulse check for all the nodes in the list.

5. **`/ping`** (WebSocket)
   - **Purpose**: Keeps the WebSocket connection alive by sending "ping" messages.
   - **Parameters**: A `String` message.
   - **Returns**: No response. The method is used to maintain the connection.

---

### **Common Components Used in Both Controllers**

1. **`ExamService`**:
   - A service that provides the core logic for exam-related functionalities such as submitting answers, joining exams, pulse checks, and RDP-related operations. The service is autowired into both controllers.

2. **`APIUtil`**:
   - A utility class that helps with creating default responses and handling exceptions. It is used in both controllers for response creation and exception parsing.

3. **DTOs (Data Transfer Objects)**:
   - **`SubmitAnswerRequestDTO`**: Used for submitting answers from the client.
   - **`SubmitAnswerResponseDTO`**: The response to the client after submitting answers.
   - **`JoinExamRequestDTO`**: Used for joining an exam session.
   - **`ExamSessionDTO`**: Represents information about an exam session.
   - **`RDPClientDTO`**: Contains information about an RDP client node.
   - **`PulseCheckDTO`**: Contains real-time performance metrics from client nodes.

4. **Response Wrappers**:
   - **`ResponseMessage`**: A general-purpose response wrapper used to structure API responses with status, message, and data.
   - **`SimpleMessageDTO`**: A simpler version of `ResponseMessage` used when minimal data is required in the response.

5. **Error Handling**:
   - **`ErrorMessagesEnum`**: An enum containing various error messages, including messages for exam-related issues such as continuing an exam or submitting answers.
   - **Logging**: The `logger` is used to capture and log errors for debugging purposes, ensuring that any exceptions thrown during exam interactions are recorded.

---

### **Conclusion**

The `ExamControllerClient` provides REST APIs for client nodes to interact with the exam system, handling requests like answer submissions, exam joining, and pulse checks. On the other hand, the `ExamControllerSocket` leverages WebSocket communication for real-time monitoring of exams and client interactions, especially useful during live exams.

Both controllers utilize `ExamService` for business logic and `APIUtil` for consistent response formatting and error handling, ensuring seamless interaction between client nodes and the exam system.