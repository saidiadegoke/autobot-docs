### Summary of the Classes

---

#### 1. **CenterDetailsDTO**
- **Purpose**: Data Transfer Object (DTO) for transferring center details.
- **Fields**: Includes `centerName`, `uuid`, `referenceNumber`, `state`, `address`, `town`, `status`, `capacity`, `backupCapacity`, and `errorMessage`.
- **Constructors**: 
  - Initializes from a `CenterEntity` object.
  - Initializes from a `CenterDetailsServerDTO` object.
  
#### 2. **CenterDetailsServerDTO**
- **Purpose**: DTO extending `ResponseMessage` that holds server response details about a center.
- **Fields**: Similar to `CenterDetailsDTO`, it includes `centerName`, `uuid`, `referenceNumber`, `state`, `address`, `town`, `status`, `capacity`, and `backupCapacity`.

#### 3. **CenterReportResponseDTO**
- **Purpose**: DTO for reporting center performance metrics.
- **Fields**: Includes performance metrics like `averageSchedulePerformance`, `totalStartedVSSelfEnded`, `cpuOverEightyPercentPercentage`, and other capacity and performance measures.

#### 4. **ComputerRecordDTO**
- **Purpose**: DTO for representing computer node information in the system.
- **Fields**: Includes detailed hardware and system information such as `sysSerial`, `ipAddress`, `osHostname`, `cpuBrand`, `memSize`, `diskInfo`, and network and CPU-related fields.
- **Constructor**: Initializes the DTO from a `ClientNodeEntity`, formatting data such as disk size, memory, CPU, and network speed.

#### 5. **ComputerReportResponseDTO**
- **Purpose**: DTO for reporting the status and performance of computer nodes within a center.
- **Fields**: Contains details like `centerReferenceNumber`, `centerUUID`, and metrics on different types of nodes (`totalRealizedNodes`, `totalStandaloneNodes`, etc.), along with a list of `ComputerRecordDTO` for individual node details.

#### 6. **ExamRecordDTO**
- **Purpose**: DTO for representing the details of an exam session.
- **Fields**: Includes `examName`, `examUUID`, `status`, `durationInMinutes`, `capacity`, `connectedNodes`, `sessionCount`, `isUploaded`, `startDateTime`, `endDateTime`, and formatted date/time strings.
- **Constructor**: Initializes from an `ExamSessionEntity` object, formatting start and end times.

#### 7. **ExamReportResponseDTO**
- **Purpose**: DTO for reporting a list of exam sessions.
- **Fields**: Contains a list of `ExamRecordDTO` objects representing individual exam sessions (`nodeList`).

---

### General Notes:
- All classes use **Jackson annotations** (`@JsonIgnoreProperties`, `@JsonInclude`) for handling JSON serialization and deserialization, ensuring that only non-null fields are included, and any unknown properties are ignored.
- **Lombok annotations** (`@Getter`, `@Setter`, `@NoArgsConstructor`) are used to generate boilerplate code such as getters, setters, and no-argument constructors.
- The classes focus on mapping data between entities, DTOs, and external systems (e.g., `CenterDetailsServerDTO`, `ClientNodeEntity`, `ExamSessionEntity`).

These DTOs ensure seamless data transfer between different layers in the application, making it easier to handle external responses, internal entities, and reporting mechanisms.