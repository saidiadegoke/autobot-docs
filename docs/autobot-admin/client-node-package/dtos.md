### Documentation for Client Node DTOs (Data Transfer Objects)

This document provides an overview of several Data Transfer Objects (DTOs) used in the `autobot.app.admin.clientnode` package. These DTOs are primarily used for client node communication, including registration, status updates, and real-time metrics.

---

#### **`ConnectedNodesCounterDTO`**

- **Purpose**: Represents a simple DTO to track the total number of connected client nodes.
  
- **Fields**:
  - `totalConnectedNodes`: The total number of connected nodes in the system.
  
- **Constructor**:
  - **`ConnectedNodesCounterDTO(int count)`**: Initializes the DTO with the total number of connected nodes.
  
- **Annotations**:
  - **`@JsonInclude(JsonInclude.Include.NON_NULL)`**: Ensures that only non-null fields are included when the object is serialized to JSON.
  - **`@JsonIgnoreProperties(ignoreUnknown = true)`**: Ignores any unknown properties during deserialization, ensuring flexibility when receiving JSON from external sources.
  - **`@Getter`, `@Setter`, `@NoArgsConstructor`**: Lombok annotations to automatically generate getters, setters, and a no-argument constructor.

---

#### **`ConnectToServerRequestDTO`**

- **Purpose**: DTO for handling the request to register or connect a client node to the server.
  
- **Fields**:
  - Network, hardware, and system details such as:
    - `ipAddress`, `systemIPAddress`: The node’s IP address and system IP address.
    - `sysModel`, `sysSerial`, `sysOEM`: System model, serial number, and OEM details.
    - `osDistribution`, `osArchitecture`, `osHostname`: Operating system details.
    - `cpuManufacturer`, `cpuBrand`, `cpuProcessors`, `cpuCores`, `cpuPhysicalCores`: CPU details.
    - `cpuSpeed`, `cpuMaxSpeed`, `cpuSpeedStr`, `cpuMaxSpeedStr`: CPU speed and maximum speed as numeric values and formatted strings.
    - `memSize`, `memSizeStr`, `memSizeTotalAvailable`, `memSizeTotalAvailableStr`: Memory details.
    - `dskType`, `dskSerial`, `dskSize`, `dskSizeStr`: Disk information (type, serial, and size).
    - `netInterface`, `netSpeed`, `netSpeedLong`, `netMacAddress`: Network interface details.
    - `motherBoardSerial`, `cpuProcessorID`: Additional hardware identifiers.
    - `uuidUniqueId`, `uuidThinId`: UUID values for identifying the client node.
    - `nodeUUID`: Unique node identifier.
    - `appVersion`: The version of the app running on the client node.
    
- **Annotations**:
  - **`@JsonInclude(JsonInclude.Include.NON_NULL)`**: Includes only non-null fields during serialization.
  - **`@JsonIgnoreProperties(ignoreUnknown = true)`**: Ignores unknown properties in incoming JSON requests.
  - **`@Getter`, `@Setter`, `@NoArgsConstructor`**: Lombok annotations for automatic generation of getters, setters, and a no-arg constructor.

---

#### **`ConnectToServerResponseDTO`**

- **Purpose**: DTO for sending the server's response when a client node registers or connects to the server.
  
- **Fields**:
  - `nodeUUID`: Unique identifier of the node.
  - `candidateName`: Name assigned to the client node (e.g., a candidate in a testing system).
  - `registrationNumber`: Registration number of the client node.
  - `subject`: Subject associated with the node's session (e.g., for exams).
  - `isExamInProgress`: Indicates whether an exam is in progress.
  - `examSessionStartNotificationDTO`: Details of the exam session, represented by `ExamSessionStartNotificationDTO`.
  
- **Constructors**:
  - **`ConnectToServerResponseDTO(String nodeUUID, String candidateName, String registrationNumber, String subject)`**: Constructor to initialize a response with node information and associated subject.
  
- **Annotations**:
  - **`@JsonInclude(JsonInclude.Include.NON_NULL)`**: Excludes null fields during serialization.
  - **`@JsonIgnoreProperties(ignoreUnknown = true)`**: Ignores unknown properties during deserialization.
  - **`@Getter`, `@Setter`, `@NoArgsConstructor`**: Lombok annotations for automatic generation of getters, setters, and a no-arg constructor.

---

#### **`PulseCheckDTO`**

- **Purpose**: DTO for handling pulse check requests to track real-time metrics of a client node (network, RAM, CPU usage).
  
- **Fields**:
  - `nodeUUID`: Unique identifier for the node.
  - `currentNetworkSpeed`: Current network speed of the client node.
  - `currentRAMUsage`: Current RAM usage of the node.
  - `currentCPUUsage`: Current CPU usage of the node.
  
- **Annotations**:
  - **`@Data`**: Lombok annotation that generates getters, setters, `toString()`, `equals()`, and `hashCode()` methods.
  
---

#### **`RDPClientDTO`**

- **Purpose**: DTO representing a Remote Desktop Protocol (RDP) client node, typically used in remote access or thin-client scenarios.
  
- **Fields**:
  - **Node Information**:
    - `rdpNodeUUID`: Unique identifier for the RDP node.
    - `isConnected`: Boolean flag indicating if the node is connected.
  
  - **Real-Time Metrics**:
    - `currentNetworkSpeed`: Current network speed of the node.
    - `currentRAMUsage`: Current RAM usage of the node.
    - `currentCPUUsage`: Current CPU usage of the node.
    - `lastUpdated`: Timestamp indicating when the node was last updated.
  
  - **Additional Fields**:
    - `submissionCount`: The number of submissions made by the node.
  
- **Constructors**:
  - **`RDPClientDTO(String rdpNodeUUID)`**: Initializes a new `RDPClientDTO` with the given UUID and marks the node as connected.
  - **`RDPClientDTO(String rdpNodeUUID, boolean isConnected, long currentNetworkSpeed, long currentRAMUsage, long currentCPUUsage, Date lastUpdated, int submissionCount)`**: Full constructor to initialize all fields.
  
- **Annotations**:
  - **`@Getter`, `@Setter`, `@NoArgsConstructor`, `@AllArgsConstructor`, `@Builder`, `@Data`**: Lombok annotations that automatically generate getters, setters, constructors, and other utility methods like `toString()` and `hashCode()`.

