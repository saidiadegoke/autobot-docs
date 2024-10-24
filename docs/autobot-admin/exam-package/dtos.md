### Documentation for Exam-Related DTOs in `autobot.app.admin.exam`

This document provides an overview of the various Data Transfer Objects (DTOs) used for managing exams and exam sessions in the system. These DTOs handle requests and responses for operations like creating exams, joining exams, submitting answers, and managing exam sessions.

---

### **`ExamDefaultDTO`**

#### Purpose:
Represents the default settings and configuration for an exam. It includes allowed durations, number of questions, capacities, and the default duration and capacity for the exam.

#### Fields:
- **`allowedDurations`**: Array of allowed durations (in minutes).
- **`allowedNumberOfQuestions`**: Array of allowed numbers of questions.
- **`allowedCapacities`**: Array of allowed capacities (number of participants).
- **`defaultDuration`**: Default exam duration (in minutes).
- **`capacity`**: Capacity for the exam (number of participants).
- **`examName`**: The name of the exam.

#### Constructors:
- **`ExamDefaultDTO(ExamDefaultEntity entity, ObjectMapper mapper, String examName)`**: Initializes the DTO from an entity and parses the string fields into arrays using `ObjectMapper`.

---

### **`ExamDefaultServerDTO`**

#### Purpose:
DTO that extends `ResponseMessage`, used for responding with default exam settings when requested by the client.

#### Fields:
- **`allowedDurations`**: Array of allowed durations.
- **`allowedNumberOfQuestions`**: Array of allowed numbers of questions.
- **`allowedCapacities`**: Array of allowed capacities.
- **`defaultDuration`**: Default duration for the exam.
- **`capacity`**: Maximum capacity for the exam.
- **`backupCapacity`**: Backup capacity for the exam.

---

### **`ExamSessionDTO`**

#### Purpose:
Represents the detailed information of an exam session, including the exam's status, duration, and connected/disconnected nodes. This DTO is used when tracking live exam sessions or when uploading session data to the server.

#### Fields:
- **Exam Info**: `examName`, `examUUID`, `subject`, `status`.
- **Timing**: `startDateTime`, `endDateTime`, `durationInMinutes`, `timeLeftInMinutes`.
- **Capacity and Nodes**: `capacity`, `connectedNodes`, `disconnectedNodes`, `totalNodesStarted`, `totalNodesSubmitted`, `totalTerminated`.
- **Network**: `totalNetworkFailureCount`, `totalNetworkFailureByUniqueNodeCount`, `permanentNetworkLossCount`.
- **Nodes List**: `List<ExamSessionNodeDTO> nodesList`.

#### Constructors:
- **`ExamSessionDTO(ExamSessionEntity entity)`**: Initializes the DTO from an `ExamSessionEntity`, calculating the time left for the exam and formatting date strings for `startDateTime` and `endDateTime`.

---

### **`ExamSessionEndNotificationDTO`**

#### Purpose:
Represents the notification DTO used to signal the end of an exam session.

#### Fields:
- **`examUUID`**: The UUID of the exam session.

---

### **`ExamSessionNodeDTO`**

#### Purpose:
Represents detailed information about a specific client node participating in an exam session. This DTO tracks the node's exam status, network metrics, and submission details.

#### Fields:
- **Node Info**: `registrationNumber`, `ipAddress`, `candidateName`, `nodeUUID`.
- **Exam Info**: `centerUUID`, `examName`, `examUUID`, `subject`.
- **Status**: `startStatus`, `endStatus`, `connectedStatus`.
- **Metrics**: `cpuUsage`, `ramUsage`, `dataSent`, `dataReceived`.
- **Exam Progress**: `responseCount`, `submissionCount`, `timeLeftInMinutes`, `lastUpdatedMinutesAgo`, `totalNetworkFailureDuringExam`.

#### Constructors:
- **`ExamSessionNodeDTO(ExamSessionNodeEntity entity)`**: Initializes the DTO from an `ExamSessionNodeEntity` and formats time-related fields.

---

### **`ExamSessionStartNotificationDTO`**

#### Purpose:
Used to notify clients when an exam session starts. It contains exam details like the name, UUID, subject, duration, and question count.

#### Fields:
- **Exam Info**: `examName`, `examUUID`, `subject`, `status`.
- **Timing**: `startDateTime`, `endDateTime`, `startTimeStr`, `endTimeStr`.
- **Node-Specific Info**: `submissionCountSoFar`.

#### Constructors:
- **`ExamSessionStartNotificationDTO(ExamSessionDTO examSessionDTO)`**: Initializes the DTO from an `ExamSessionDTO` object.

---

### **`JoinExamRequestDTO`**

#### Purpose:
DTO for a client node's request to join an exam session. Used for both regular and RDP-based exam sessions.

#### Fields:
- **`examUUID`**: The UUID of the exam the node wants to join.
- **`nodeUUID`**: The UUID of the client node.
- **`rdpClientDTOList`**: List of RDP clients associated with the request (used in RDP-based exams).

---

### **`NewExamRequestDTO`**

#### Purpose:
Represents a request to create a new exam, including the name, duration, number of questions, and capacity.

#### Fields:
- **`examName`**: The name of the exam.
- **`duration`**: Duration of the exam (in minutes).
- **`numberOfQuestions`**: Number of questions in the exam.
- **`capacity`**: Maximum capacity of the exam (number of participants).

---

### **`NewExamResponseDTO`**

#### Purpose:
Represents the response DTO after creating a new exam. It includes exam details like duration, number of questions, and the UUID of the created exam.

#### Fields:
- **Exam Info**: `examName`, `examUUID`.
- **Timing**: `durationInMinutes`, `date`.
- **Capacity**: `capacity`, `session`, `connectedNodeCount`.

#### Constructors:
- **`NewExamResponseDTO(ExamSessionEntity entity)`**: Initializes the DTO from an `ExamSessionEntity`.

---

### **`RemoveReportsRequestDTO`**

#### Purpose:
DTO used to request the removal of reports from a particular center based on its UUID.

#### Fields:
- **`centerUUID`**: UUID of the center whose reports are to be removed.

---

### **`SubmitAnswerRequestDTO`**

#### Purpose:
DTO used by client nodes to submit answers during an exam session. It tracks submission counts, system performance metrics (CPU, RAM), and network usage.

#### Fields:
- **Node and Exam Info**: `ipAddress`, `nodeUUID`, `examUUID`.
- **Submission**: `submissionCount`.
- **Performance**: `cpuUsage`, `ramUsage`, `dataSent`, `dataReceived`.
- **Timing**: `startTime`, `endTime`.
- **RDP Clients**: `List<RDPClientDTO>`.

---

### **`SubmitAnswerResponseDTO`**

#### Purpose:
Represents the server’s response to a client’s answer submission. It tracks time left, total submissions by the node, and RDP-related submission counters.

#### Fields:
- **`instruction`**: Instructions from the server (if any).
- **`examUUID`**: UUID of the exam.
- **`timeLeftInMinutes`**: Time left for the exam session.
- **`totalSubmissionsByNode`**: Total submissions by the node.
- **`rdpNodeSubmissionCounter`**: Map of RDP node submission counts.

---

### Summary:

The exam-related DTOs in `autobot.app.admin.exam` package manage various aspects of exams and exam sessions, including configuration, creation, joining, progress tracking, and answer submission. These DTOs play a crucial role in client-server communication and ensure seamless management of exam sessions, both for standard and RDP-based scenarios. The use of Jackson annotations ensures proper serialization/deserialization, and Lombok annotations reduce boilerplate code.