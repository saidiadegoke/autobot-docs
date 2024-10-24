### Documentation for `ExamService` and `ExamServiceImpl`

This document provides detailed documentation for the `ExamService` interface and its implementation in `ExamServiceImpl`. These classes manage the core functionality related to creating, starting, monitoring, and submitting exams within the system. They also handle client node communication and pulse checks during exams.

---

### **`ExamService` Interface**

#### Purpose:
Defines the contract for services related to managing exams, including fetching default settings, creating new exams, joining exams, and submitting answers.

#### Methods:

- **`void getExamDefaultValuesFromServer()`**: Fetches the default exam configuration values from the server and updates the local database.
- **`ExamDefaultDTO getExamDefaultSettings()`**: Retrieves the default settings for the exam.
- **`NewExamResponseDTO createNewExam(NewExamRequestDTO newExamRequestDTO)`**: Creates a new exam session based on the provided request.
- **`ExamSessionDTO startExam(String examUUID)`**: Starts the specified exam session.
- **`ExamSessionDTO monitorExam(String examUUID)`**: Monitors an ongoing exam session.
- **`SimpleMessageDTO endExamByAdmin(String examUUID)`**: Ends the specified exam session by the admin.
- **`ResponseMessage uploadExam(String examUUID)`**: Uploads the results of the specified exam session to the server.
- **`void setUploadIncomplete(String examUUID)`**: Marks the exam upload as incomplete.
- **`ExamSessionDTO joinExam(JoinExamRequestDTO requestDTO)`**: Allows a client node to join an exam session.
- **`ExamSessionDTO joinExamRDP(JoinExamRequestDTO requestDTO)`**: Allows a Remote Desktop Protocol (RDP) client node to join an exam session.
- **`ExamSessionDTO joinExamRDPMemory(JoinExamRequestDTO requestDTO)`**: Allows an RDP client node to join an exam session using memory-based session management.
- **`SubmitAnswerResponseDTO submitAnswer(SubmitAnswerRequestDTO requestDTO)`**: Submits answers for a client node in an ongoing exam session.
- **`SubmitAnswerResponseDTO submitAnswerRDP(SubmitAnswerRequestDTO requestDTO)`**: Submits answers for an RDP client node.
- **`SubmitAnswerResponseDTO submitAnswerRDPMemory(SubmitAnswerRequestDTO requestDTO)`**: Submits answers for an RDP client node using memory-based session management.
- **`SimpleMessageDTO submitExamByNode(SubmitAnswerRequestDTO requestDTO)`**: Submits the exam for a client node.
- **`SimpleMessageDTO submitExamByNodeRDP(SubmitAnswerRequestDTO requestDTO)`**: Submits the exam for an RDP client node.
- **`SimpleMessageDTO submitExamByNodeRDPMemory(SubmitAnswerRequestDTO requestDTO)`**: Submits the exam for an RDP client node using memory-based session management.
- **`void pulseCheck(PulseCheckDTO pulseCheckDTO)`**: Performs a pulse check to update the connection status of a client node.
- **`void pulseCheckRDP(List<RDPClientDTO> rdpClientDTOList)`**: Performs a pulse check for RDP client nodes.
- **`void removeReports()`**: Removes reports from the system based on the center UUID.
- **`ExamSessionNodeDTO findByNodeUUIDAndExamUUID(String nodeUUID, String examUUID)`**: Finds a node's session by its UUID and the exam's UUID.
- **`int countAllNodes()`**: Counts the total number of nodes in an exam session.

---

### **`ExamServiceImpl` Class**

#### Purpose:
Implements the `ExamService` interface to provide the functionality of managing exams, client nodes, pulse checks, and submissions during an exam session. It handles various aspects like starting, monitoring, and ending exams, managing client connections, and communicating with the admin and client nodes.

#### Key Fields:

- **`SimpMessagingTemplate simpMessagingTemplate`**: Used to send messages via WebSockets to connected clients (admin and nodes).
- **`ExamDefaultRepository examDefaultRepository`**: Repository for fetching and saving default exam settings.
- **`ExamSessionRepository examSessionRepository`**: Repository for managing exam sessions.
- **`ExamSessionNodeRepository examSessionNodeRepository`**: Repository for managing the nodes participating in an exam.
- **`CenterRepository centerRepository`**: Repository for fetching information about exam centers.
- **`ClientNodeRepository clientNodeRepository`**: Repository for managing client nodes.
- **`AutobotClient autobotClient`**: Used for making API calls to external services, such as uploading exam data.
- **`Set<String> disconnectedUuidSet`**: Keeps track of nodes that have disconnected during the exam.
- **`Set<String> submittedUuidSet`**: Tracks nodes that have submitted the exam.
- **`List<ExamSessionNodeEntity> examSessionNodeEntityListMemory`**: A memory-based list to store session nodes for RDP-based exams.
- **`Map<String, Integer> rdpNodeSubmissionCounter`**: Tracks submission counts for RDP nodes.
- **`boolean isExamRDPMode`**: Indicates if the exam is running in RDP mode.
- **`boolean isExamRDPSubmissionInProgress`**: Tracks if an RDP-based exam submission is in progress.
- **`ScheduledExecutorService executorService`**: Manages scheduled tasks for monitoring exam sessions and ending exams.

#### Core Methods:

- **`ExamDefaultDTO getExamDefaultSettings()`**: Retrieves default exam settings and handles exceptions if defaults are missing.
- **`NewExamResponseDTO createNewExam(NewExamRequestDTO newExamRequestDTO)`**: Creates a new exam session by validating the request and ensuring the center's capacity is not exceeded.
- **`ExamSessionDTO startExam(String examUUID)`**: Starts an exam session and schedules periodic tasks to monitor the session and end it after the duration is over.
- **`ExamSessionDTO monitorExam(String examUUID)`**: Provides live updates about an ongoing exam session to the admin.
- **`SimpleMessageDTO endExamByAdmin(String examUUID)`**: Allows the admin to manually end an exam session.
- **`ResponseMessage uploadExam(String examUUID)`**: Uploads the exam session data to the server.
- **`ExamSessionDTO joinExam(JoinExamRequestDTO requestDTO)`**: Handles the logic for a client node joining an exam, including checking for exam capacity limits and node registration.
- **`ExamSessionDTO joinExamRDP(JoinExamRequestDTO requestDTO)`**: Allows RDP client nodes to join the exam and updates the session accordingly.
- **`ExamSessionDTO joinExamRDPMemory(JoinExamRequestDTO requestDTO)`**: Manages RDP-based client nodes using in-memory session handling.
- **`SubmitAnswerResponseDTO submitAnswer(SubmitAnswerRequestDTO requestDTO)`**: Submits answers for a client node and updates the admin with the latest exam session data.
- **`SubmitAnswerResponseDTO submitAnswerRDP(SubmitAnswerRequestDTO requestDTO)`**: Submits answers for RDP client nodes.
- **`SubmitAnswerResponseDTO submitAnswerRDPMemory(SubmitAnswerRequestDTO requestDTO)`**: Handles answer submission for RDP-based nodes using memory-based session management.
- **`SimpleMessageDTO submitExamByNode(SubmitAnswerRequestDTO requestDTO)`**: Finalizes the exam submission for a client node.
- **`pulseCheck(PulseCheckDTO pulseCheckDTO)`**: Updates the connection status of a client node based on a pulse check.
- **`removeReports()`**: Removes reports from the system.
- **`updateOngoingExamSessionStatistics(String examUUID)`**: Periodically updates statistics for an ongoing exam session, such as network failures and disconnected nodes.

#### Additional Utility Methods:
- **`updateExamSessionWithNodeList()`**: Updates the exam session with the latest information about connected nodes.
- **`endExam()`**: Ends an exam session and sends notifications to all clients.
- **`pulseCheckRDP()`**: Handles pulse checks for RDP client nodes to ensure they remain connected.

#### Scheduled Tasks:
- **Pulse Check Scheduler**: A scheduled task that periodically updates the status of nodes during an ongoing exam and disconnects inactive nodes.
- **Exam End Scheduler**: Automatically ends the exam after the scheduled time.

---

### Summary:

The `ExamService` and `ExamServiceImpl` handle all exam-related operations, including exam creation, node participation, answer submission, and pulse checking. The implementation supports both regular and RDP-based exams, ensuring seamless client-server communication and real-time monitoring for the admin. The system is designed to handle disconnections, manage node capacities, and provide regular updates to all participants during an exam.