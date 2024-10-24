### Detailed Documentation for `ExamController`

The `ExamController` class within the `autobot.app.admin.exam` package is a **REST API controller** responsible for managing exam-related operations in the Autobot Admin application. This controller exposes various endpoints that allow administrators to perform tasks such as retrieving default exam settings, creating new exams, starting exams, monitoring progress, and ending exams. Additionally, it handles the uploading of exam reports and ensures appropriate error handling and logging.

---

### Annotations and Configurations

1. **@CrossOrigin(origins = "*", maxAge = 3600)**:
   - Allows cross-origin requests from any origin (`*`) and sets the maximum cache age for preflight requests to 3600 seconds (1 hour).

2. **@RestController**:
   - Marks the class as a REST controller, which returns domain objects in JSON or XML form.

3. **@RequestMapping("/api/me/exam")**:
   - Maps all the endpoints in this controller to the `/api/me/exam` path. Each method defines specific sub-paths and HTTP methods for various exam-related operations.

4. **@Qualifier("examServiceImpl")**:
   - Ensures that the specific implementation of `ExamService`, `examServiceImpl`, is injected into this controller.

---

### Fields

- **ExamService (examService)**:
   - The service that provides the business logic for handling exam operations such as creating, starting, and ending exams.
  
- **CenterService (centerService)**:
   - Injected `CenterService` used to handle actions related to uploading reports during the exam process.

- **Logger (logger)**:
   - SLF4J logger used to log critical information and errors for debugging and monitoring purposes.

---

### Endpoints and Methods

#### 1. **Retrieve Default Exam Settings**
   - **Method**: `GET /api/me/exam/default-settings`
   - **Description**: Retrieves the default settings for exams.
   - **Service Call**: `examService.getExamDefaultSettings()`
   - **Response**:
     - Returns a `ResponseMessage` containing `ExamDefaultDTO`. If an error occurs, it returns an error message from `ErrorMessagesEnum.examDefaultError`.
     - **HTTP Status**: 200 OK

   ```java
   @RequestMapping(value = "/default-settings", method = RequestMethod.GET)
   public ResponseEntity getExamDefaultSettings() { ... }
   ```

#### 2. **Create New Exam**
   - **Method**: `POST /api/me/exam/create-new`
   - **Description**: Creates a new exam based on the provided `NewExamRequestDTO`.
   - **Request Body**: `NewExamRequestDTO` containing details about the new exam.
   - **Service Call**: `examService.createNewExam(requestDTO)`
   - **Response**:
     - Returns a `ResponseMessage` containing `NewExamResponseDTO`. If an error occurs, it returns a corresponding error message from `ErrorMessagesEnum.examDefaultError`.
     - **HTTP Status**: 200 OK

   ```java
   @RequestMapping(value = "/create-new", method = RequestMethod.POST)
   public ResponseEntity createNewExam(@RequestBody NewExamRequestDTO requestDTO) { ... }
   ```

#### 3. **Start Exam**
   - **Method**: `GET /api/me/exam/start-exam/{examUUID}`
   - **Description**: Starts an exam identified by the `examUUID`.
   - **Path Parameter**: `examUUID` is used to identify the exam that needs to be started.
   - **Service Call**: `examService.startExam(examUUID)`
   - **Response**:
     - Returns a `ResponseMessage` containing `ExamSessionDTO`. If an error occurs, it returns an error message from `ErrorMessagesEnum.examStartError`.
     - **HTTP Status**: 200 OK

   ```java
   @RequestMapping(value = "/start-exam/{examUUID}", method = RequestMethod.GET)
   public ResponseEntity startExam(@PathVariable("examUUID") String examUUID) { ... }
   ```

#### 4. **Monitor Exam**
   - **Method**: `GET /api/me/exam/monitor-exam/{examUUID}`
   - **Description**: Monitors the progress of an ongoing exam.
   - **Path Parameter**: `examUUID` is used to identify the exam being monitored.
   - **Service Call**: `examService.monitorExam(examUUID)`
   - **Response**:
     - Returns a `ResponseMessage` containing `ExamSessionDTO`. If an error occurs, it returns an error message from `ErrorMessagesEnum.examStartError`.
     - **HTTP Status**: 200 OK

   ```java
   @RequestMapping(value = "/monitor-exam/{examUUID}", method = RequestMethod.GET)
   public ResponseEntity monitorExam(@PathVariable("examUUID") String examUUID) { ... }
   ```

#### 5. **End Exam**
   - **Method**: `GET /api/me/exam/end-exam/{examUUID}`
   - **Description**: Ends the exam session for the specified exam.
   - **Path Parameter**: `examUUID` is used to identify the exam that needs to be ended.
   - **Service Call**: `examService.endExamByAdmin(examUUID)`
   - **Response**:
     - Returns a `ResponseMessage` containing `SimpleMessageDTO`. If an error occurs, it returns an error message from `ErrorMessagesEnum.examEndError`.
     - **HTTP Status**: 200 OK

   ```java
   @RequestMapping(value = "/end-exam/{examUUID}", method = RequestMethod.GET)
   public ResponseEntity endExam(@PathVariable("examUUID") String examUUID) { ... }
   ```

#### 6. **Upload Exam Report**
   - **Method**: `GET /api/me/exam/upload-exam/{examUUID}`
   - **Description**: Uploads exam-related reports, including exam, computer, and center reports.
   - **Path Parameter**: `examUUID` identifies the exam for which reports are uploaded.
   - **Service Call**:
     - First, uploads the exam report using `examService.uploadExam(examUUID)`.
     - Then, uploads the computer and center reports using `centerService.uploadComputerReport()` and `centerService.uploadCenterReport()`, respectively.
   - **Response**:
     - Returns a `ResponseMessage` containing the upload status. If any part of the process fails, the exam upload is marked as incomplete, and the reports are removed. The appropriate error response is returned.
     - **HTTP Status**: 200 OK

   ```java
   @RequestMapping(value = "/upload-exam/{examUUID}", method = RequestMethod.GET)
   public ResponseEntity uploadExam(@PathVariable("examUUID") String examUUID) { ... }
   ```

---

### Error Handling and Logging

- **Error Handling**:
   - Each method tries to catch exceptions and uses `APIUtil.parseException(e)` to handle and return appropriate error messages when issues occur.
   - Specific exceptions such as validation errors (e.g., `InvalidInputException`) are handled by the service layer and caught in the controller.

- **Logging**:
   - Errors encountered during exam operations are logged using SLF4J's `logger.error()` for better tracking and debugging.

---

### Request and Response

#### Request Example for Starting an Exam:

```bash
GET /api/me/exam/start-exam/1234-abcd
```

#### Response Example for Exam Start:

```json
{
  "status": "success",
  "data": {
    "examSessionId": "1234-abcd",
    "status": "started",
    "startTime": "2024-09-29T10:00:00"
  },
  "message": "Exam started successfully"
}
```

#### Response Example for Uploading Exam:

```json
{
  "status": "success",
  "data": {
    "examUUID": "1234-abcd",
    "reportStatus": "Uploaded",
    "computerReport": "Uploaded",
    "centerReport": "Uploaded"
  },
  "message": "Exam reports uploaded successfully"
}
```

---

### Summary

The `ExamController` is responsible for managing various stages of exam operations in the Autobot Admin application, from creating and starting exams to monitoring and uploading reports. It provides essential methods for:

- Retrieving default exam settings.
- Creating new exams.
- Starting and ending exams.
- Uploading exam and associated reports.

The controller also ensures that errors are properly handled and logged, improving the overall robustness of the exam management process. This functionality is critical for managing and monitoring candidate exams in a real-time environment.

