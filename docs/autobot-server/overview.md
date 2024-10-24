# Overview of Autobot Server

The **Autobot server application** is designed to facilitate the management and monitoring of examination centers. It consists of two primary components: the **Frontend**, developed in Angular, and the **Backend**, structured as a Maven project tailored for AWS Lambda deployment. 

#### Backend Architecture

The backend handles various tasks related to data processing and reporting. It includes several key components:

- **Maven Project**: The backend is organized as a Maven project, allowing for easy dependency management and build automation.
  
- **Handlers**: The backend features multiple handlers responsible for processing specific functionalities. These handlers include:
  - **AdminReportsHandler**: Manages administrative report generation and retrieval.
  - **DeleteAllReportsHandler**: Facilitates the deletion of reports from the system.
  - **ExcelMakerHandlerBlog**: Generates Excel reports for users.
  - **ExportCentersHandler**: Handles the export of center data.
  - **GetCenterHandler**: Retrieves details about specific examination centers.
  - **GetExamDefaultHandler**: Provides default examination settings.
  - **SaveExamReportHandler**: Saves generated exam reports to the database.
  - **UploadCenterReportHandler**: Manages the uploading of center-related reports.
  - **UploadComputerReportHandler**: Handles the uploading of computer usage reports.

Each of these handlers is designed to respond to specific API requests from the frontend or Lambda functions.

#### Frontend Architecture

The frontend of the Autobot application is built using **Angular**, providing a responsive and user-friendly interface. The main features of the frontend include:

- **Dashboard**: The central component of the application, the dashboard displays examination center details and their statuses. This information is dynamically fetched from the backend, allowing users to monitor the performance and operations of various testing centers in real time.

- **API Integration**: The frontend communicates with the backend via Lambda functions. This architecture allows the application to leverage AWS's serverless capabilities, enhancing scalability and reducing infrastructure management overhead.

