# App Components

The **Autobot Server** is designed to handle backend operations, including processing requests, managing data, and interacting with external services. Below is a detailed breakdown of its components based on the provided structure.

### 1. Enums

- **HandlerErrorMessage**: Contains error messages related to handler operations.

### 2. Exceptions

- **DuplicateCenterException**: Thrown when a center that is being added already exists.
- **InvalidInputException**: Thrown for invalid inputs provided by the user.

### 3. External Services

- **ApiService**: A service that handles API calls to external services.
- **ApiUtils**: Utility class for API-related functionalities.
- **CenterDetailsServerDTO**: Data Transfer Object (DTO) for center details retrieved from the server.
- **CenterResponseDto**: DTO for responses related to center queries.
- **ExternalApiConfig**: Configuration class for external API settings.
- **ResponseMessage**: DTO for standardized responses from the server.

### 4. Model

#### Exports
- **Center**: Represents a center entity.
- **CenterReportDTO**: Data Transfer Object for center reports.
- **CenterReportFilter**: Represents filters applicable to center reports.
- **ComputerRecordDTO**: DTO for computer records associated with a center.
- **ComputerReportDTO**: DTO for reports related to computers.
- **ErrorMessage**: Standardized error message structure.
- **ExamDefault**: Represents default settings for exams.
- **ExamNodeComputerDTO**: DTO for node computers involved in exams.
- **ExamReportUploadDTO**: DTO for uploading exam reports.
- **ExamSummaryDTO**: DTO for summarizing exam data.
- **ExamSummaryExportDTO**: DTO for exporting exam summaries.
- **RemoveReportsRequestDTO**: DTO for requests to remove reports.

### 5. Services

#### Database Service
- **DatabaseService**: Responsible for handling database operations.

#### Report Service
- **ReportService**: Manages report generation and retrieval.

#### Utility Classes
- **DatabaseUtil**: Provides utility functions for database interactions.
- **ExportExcelUtil**: Utility for exporting data to Excel.
- **MyAPIUtil**: Custom utility for handling specific API tasks.
- **UploadToS3Util**: Utility for uploading files to Amazon S3.

### 6. Handlers
Handlers process incoming requests and manage business logic for various endpoints. Some key handlers include:
- **AdminReportsHandler**: Handles requests related to admin report operations.
- **DeleteAllReportsHandler**: Manages the deletion of reports.
- **ExcelMakerHandlerBlog**: Responsible for generating Excel files for blogs.
- **ExportCentersHandler**: Manages the export of center-related data.
- **GetCenterHandler**: Retrieves information about specific centers.
- **GetExamDefaultHandler**: Fetches default exam settings.
- **SaveExamReportHandler**: Handles the saving of exam reports.
- **UploadCenterReportHandler**: Manages the upload of center reports.
- **UploadComputerReportHandler**: Handles the upload of computer-related reports.

### 7. Resources
- **application.properties**: Configuration file for the application, containing essential parameters for its operation.
