### Documentation for `ExamServiceMemoryImpl`

The `ExamServiceMemoryImpl` class implements the `ExamService` interface, offering a memory-based alternative to manage exam sessions, client nodes, and pulse checks. This implementation stores exam session data and nodes in memory for efficient real-time updates and periodic synchronization with the database.

---

### **`ExamServiceMemoryImpl` Class**

#### Key Dependencies:
- **`SimpMessagingTemplate`**: Facilitates WebSocket communication between the server, nodes, and admin.
- **`ExamDefaultRepository`, `ExamSessionRepository`, `ExamSessionNodeRepository`, `CenterRepository`, `ClientNodeRepository`**: Various repositories used for retrieving and persisting data related to exam sessions, default settings, and client nodes.
- **`AutobotClient`**: Used for sending requests and responses to an external server for tasks like uploading exam data.

#### Key Fields:
- **`disconnectedUuidSet`**: Keeps track of client nodes that have disconnected during the exam.
- **`currentExamSessionDTO`**: Holds the current exam session details in memory.
- **`currentExamsNodesList`**: A list that stores the current nodes participating in the exam.
- **`mapper`**: ObjectMapper used for JSON serialization and deserialization.
- **`executorService`**: Handles scheduled tasks such as pulse checks and timed exam closures.

---

### Core Methods:

#### **`ExamDefaultDTO getExamDefaultSettings()`**
Retrieves the default settings for exams, including capacities, durations, and number of questions allowed. If no settings are found, it attempts to load them from the server.

#### **`NewExamResponseDTO createNewExam(NewExamRequestDTO newExamRequestDTO)`**
Creates a new exam session after validating the provided request for capacity, duration, and number of questions. Ensures no other exam is running and updates any open sessions to "DISCONTINUED."

#### **`ExamSessionDTO startExam(String examUUID)`**
Starts the specified exam session by:
1. Resetting connection statuses and clearing previously joined nodes.
2. Setting the start and end times based on the session duration.
3. Scheduling periodic tasks to monitor the session and automatically close it when the time expires.

Sends a start notification via WebSocket to inform all connected nodes.

#### **`ExamSessionDTO monitorExam(String examUUID)`**
Monitors an ongoing exam session, returning details about the exam session and all currently connected nodes.

#### **`SimpleMessageDTO endExamByAdmin(String examUUID)`**
Allows the admin to manually end an exam session. It updates the exam's status to "COMPLETED" and sends a notification to all connected nodes.

#### **`ResponseMessage uploadExam(String examUUID)`**
Uploads the results of the exam session to the server. If the exam session has already been uploaded, it throws an error. Also updates the center's reference number before uploading.

#### **`ExamSessionDTO joinExam(JoinExamRequestDTO requestDTO)`**
Allows a client node to join the specified exam session by checking if:
1. The exam UUID is valid.
2. The node has already joined the exam.
3. The exam session is not at capacity.

The node's details (e.g., registration number, IP address) are stored, and the total number of connected nodes is updated.

#### **`SubmitAnswerResponseDTO submitAnswer(SubmitAnswerRequestDTO requestDTO)`**
Processes answer submissions from nodes by:
1. Incrementing the submission count for the node.
2. Updating the node's resource usage (CPU, RAM).
3. Sending real-time updates to the admin via WebSocket.

If the node has submitted all required answers, the system instructs it to submit the exam.

#### **`SimpleMessageDTO submitExamByNode(SubmitAnswerRequestDTO requestDTO)`**
Handles the submission of the entire exam by a node. It:
1. Marks the node's session as "ENDED."
2. Updates the submission status in real-time for the admin.

#### **`void pulseCheck(PulseCheckDTO pulseCheckDTO)`**
Performs a pulse check on a client node to ensure its connection is still active. If the node is found in the current exam, its connection status is updated.

#### **`void updateOngoingExamSessionStatistics(String examUUID)`**
Periodically checks the connection status of all nodes and:
1. Marks nodes that have not sent updates in the last 20 seconds as "NOT_CONNECTED."
2. Updates statistics related to the network failure and disconnection of nodes.
3. Sends updates to the admin via WebSocket.

---

### Scheduled Tasks:

#### **Pulse Check Scheduler**
- Periodically checks the connection status of nodes during the exam.
- Disconnects nodes that have not sent updates in the last 20 seconds.

#### **Exam End Scheduler**
- Automatically ends the exam when the session duration is completed.
- Sends an end notification to all connected nodes.
- Saves the exam session and node details to the database after the exam ends.

---

### Utility Methods:

#### **`updateExamSessionWithNodeList()`**
Updates the exam session with the list of connected nodes and their current statuses.

#### **`updateNodeInCurrentExamsNodesList()`**
Updates a node's details in the memory-based list of exam session nodes.

#### **`getTotalNodesSubmittedStatus()`**
Calculates the total number of nodes that have submitted the exam.

#### **`markNodesAsDisconnectedByUpdatedAt()`**
Marks nodes as "NOT_CONNECTED" if they haven't sent updates for a specified duration (e.g., 20 seconds).

---

### Summary:

`ExamServiceMemoryImpl` provides a real-time, memory-based implementation of managing exam sessions, client nodes, and communication. It supports dynamic pulse checks, submission handling, and periodic synchronization of exam data with the database.