### Documentation for Enums

---

### **`ExamNodeStatusEnum`**

This enum defines the possible statuses of an exam node during the lifecycle of an exam session. It categorizes the states related to the connection and progress of a node (client or participant) within an exam session.

#### Enum Values:
- **`STARTED`**: Indicates that the exam session for the node has started.
- **`NOT_STARTED`**: Indicates that the node has not yet started the exam session.
- **`ENDED`**: Indicates that the exam session for the node has ended.
- **`NOT_ENDED`**: Indicates that the exam session for the node is still in progress and has not ended.
- **`CONNECTED`**: Indicates that the node is currently connected to the exam session.
- **`NOT_CONNECTED`**: Indicates that the node is disconnected from the exam session.

---

### **`ExamStatusEnum`**

This enum defines the various possible statuses of an exam session as a whole. It helps track the current state of an exam during its lifecycle, from its creation to its completion or potential issues.

#### Enum Values:
- **`PENDING`**: The exam is created but has not yet started.
- **`STARTED`**: The exam session has started and is currently ongoing.
- **`ERROR`**: There is an error with the exam session (e.g., technical issues).
- **`COMPLETED`**: The exam session has successfully completed.
- **`UPLOADED`**: The results or exam data have been uploaded to the server.
- **`SUBMITTED`**: The exam has been submitted by the participants or nodes.
- **`DISCONTINUED`**: The exam session has been terminated prematurely, either by admin action or system issues.
- **`OUTDATED`**: The exam session is considered outdated and no longer active.

---

### **`SubmitInstructionsEnum`**

This enum defines the possible instructions given to a participant or node in an exam session regarding the submission of answers.

#### Enum Values:
- **`CONTINUE`**: Instructs the node to continue submitting answers as the exam is still ongoing.
- **`SUBMIT`**: Instructs the node to submit the exam, indicating that all questions have been answered or the session is ending.

---

### Summary:

These enums represent key states and instructions in the lifecycle of an exam session and its participating nodes. They help structure the logic and flow for managing the exam's progress, tracking node status, and ensuring smooth transitions from creation to completion.