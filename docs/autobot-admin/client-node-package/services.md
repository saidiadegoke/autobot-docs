### Documentation: `ClientNodeService` and `ClientNodeServiceImpl`

---

#### **`ClientNodeService` Interface**

This interface defines the core functionality for registering client nodes within the system. It provides a method for registering a client node based on the incoming request data.

- **Method:**
  - `ConnectToServerResponseDTO registerClientNode(ConnectToServerRequestDTO requestDTO) throws InvalidInputException;`
    - **Purpose**: Registers a client node by taking a `ConnectToServerRequestDTO` as input and returning a `ConnectToServerResponseDTO` with registration details.
    - **Throws**: `InvalidInputException` if the request data is incomplete or invalid.
    
---

#### **`ClientNodeServiceImpl` Class**

This class implements the `ClientNodeService` interface and handles the business logic for registering client nodes, checking for capacity limits, and associating nodes with ongoing exams.

##### **Main Functionalities:**

1. **`registerClientNode(ConnectToServerRequestDTO requestDTO)`**
   - **Purpose**: Registers a client node with detailed logic for validating the request, checking center and exam capacity, and saving the node to the database.
   - **Steps:**
     1. **Validation**:
        - Checks if `requestDTO` or `ipAddress` is null.
        - Verifies if the client node's app version matches the current app version.
     2. **Node Registration**:
        - Checks if a node with the given UUID already exists.
        - If not, it checks if the center has reached its maximum capacity and if any ongoing exam has room for new nodes.
        - If all checks pass, it either registers a new node or updates the existing node's information.
     3. **Center Capacity and Exam Session Checks**:
        - Before registering a new node, the method checks:
          - If the center has exceeded its maximum capacity of connected nodes.
          - If any pending or ongoing exam sessions have available capacity for more nodes.
     4. **Node Registration Finalization**:
        - Saves the node to the database, generates registration number and candidate name for new nodes, and updates existing node records.
     5. **Notifying Admin**:
        - Sends a message to the admin via WebSocket with the total count of connected nodes.
     6. **Exam Session Checks**:
        - If an exam is in progress, the method verifies that the exam's end time has not passed and updates the node with the appropriate exam session information.
   
   - **Returns**: `ConnectToServerResponseDTO` containing node UUID, candidate name, registration number, and exam session details if an exam is in progress.

2. **`init()`**
   - **Purpose**: This method runs at application startup (via `@PostConstruct`) and initializes the system by deleting all previously connected nodes.
   - **Logic**:
     - Deletes all client nodes from the repository or marks them as "disconnected".
     - This ensures a fresh start for node connections when the system restarts.

##### **Fields:**

- **Autowired Components**:
  - **`SimpMessagingTemplate`**: Used for sending WebSocket messages to the admin to update the number of connected nodes.
  - **`ClientNodeRepository`**: Handles CRUD operations for `ClientNodeEntity` objects.
  - **`CenterRepository`**: Used to retrieve center information, particularly to check capacity limits.
  - **`ExamSessionRepository` and `ExamSessionNodeRepository`**: Manages interactions with exam session entities, including checks on whether an exam is ongoing and its capacity.
  - **`ExamService`**: Provides additional exam-related logic.
  
- **`appVersion`**: Injected from the application's configuration to validate client nodes' app versions during registration.

- **Logger**: Logs errors and important operations, such as when there are parsing issues or registration problems.

---

#### **Detailed Explanation of Logic**

1. **Client Node Validation**:
   - Ensures that critical information such as the IP address and app version is provided before attempting to register a node. If the information is missing or outdated, the system throws an `InvalidInputException`.

2. **Capacity Checks**:
   - Before registering a new node, the system checks if the total number of connected nodes exceeds the center's capacity.
   - It also checks if any ongoing or pending exam sessions have available capacity for more nodes. If the node count exceeds any of these limits, an exception is thrown to prevent further registrations.

3. **Registration Process**:
   - If the node is new (determined by checking its UUID), a unique registration number and candidate name are generated. Otherwise, the node is updated with the new request data.
   - The method also formats various hardware details such as CPU, memory, and disk information before saving the node to the database.

4. **Admin Notifications**:
   - After registering the node, the method sends a message to the admin to update the total count of connected nodes using WebSocket communication.

5. **Exam Session Handling**:
   - The method checks if an exam session is in progress and whether the node can still join the exam. If the exam has ended, the node is not allowed to join. If the exam is still running, the node is registered with the exam session, and the client is notified that the exam is in progress.

6. **System Initialization**:
   - The `init()` method runs at startup to clean up the system by removing all previously connected nodes or marking them as "disconnected". This ensures a fresh start when the system restarts, and no stale node data remains.
