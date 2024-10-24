### Detailed Documentation for `CenterController`

The `CenterController` class located in the `autobot.app.admin.center` package is a **REST API controller** responsible for handling requests related to the management of exam centers in the Autobot Admin application. This controller enables various operations such as retrieving center details, verifying center references, and managing computer and exam reports. Each endpoint handles a specific operation that interacts with the corresponding service layer (`CenterService`) and returns appropriate responses.

---

### Annotations and Configurations

1. **@CrossOrigin(origins = "*", maxAge = 3600)**:
   - This annotation enables **Cross-Origin Resource Sharing (CORS)** for all origins (`*`) and allows requests to be cached for up to 3600 seconds (1 hour). This is useful when the API is consumed by different domains.

2. **@RestController**:
   - Marks the class as a **REST controller** in a Spring Boot application. Each method returns a **domain object** instead of a view. The returned objects are serialized into JSON or XML depending on the client’s request.

3. **@RequestMapping("/api/me/center")**:
   - Specifies that all requests handled by this controller will be prefixed with `/api/me/center`. Each method defines the specific path and HTTP method for various operations related to center management.

---

### Fields

- **CenterService (centerService)**:
   - Injected using `@Autowired`, the `CenterService` provides the business logic for interacting with the center and managing reports. It is the core service layer that communicates with the database and performs the necessary operations.
  
- **Logger (logger)**:
   - `Logger` instance from `SLF4J` is used to log critical information and errors for debugging and monitoring purposes.

---

### Endpoints and Methods

#### 1. **Retrieve Center Details**
   - **Method**: `GET /api/me/center/retrieve-details`
   - **Description**: Retrieves the details of the exam center. 
   - **Service Call**: `centerService.getCenterDetails()`
   - **Response**:
     - A `ResponseMessage` is created using `APIUtil.createDefaultResponse` to wrap the center details. If the center is not registered, the error message is retrieved from `ErrorMessagesEnum.centerNotRegistered`.
     - **HTTP Status**: 200 OK
   
   ```java
   @RequestMapping(value = "/retrieve-details", method = RequestMethod.GET)
   public ResponseEntity retrieveCenterDetails() { ... }
   ```

#### 2. **Verify Center Reference**
   - **Method**: `POST /api/me/center/verify`
   - **Description**: Verifies a center based on the provided reference number in the request body.
   - **Request Body**: `VerifyCenterRequest` containing the center reference number.
   - **Service Call**: `centerService.verifyReferenceNumber(request.getReferenceNumber())`
   - **Response**:
     - A `ResponseMessage` is created, with success or error messages based on whether the center exists or not. If an error message is present in the `CenterDetailsDTO`, it will be returned.
     - **HTTP Status**: 200 OK
   
   ```java
   @RequestMapping(value = "/verify", method = RequestMethod.POST)
   public ResponseEntity verifyCenterReference(@RequestBody VerifyCenterRequest request) { ... }
   ```

#### 3. **Get Computer Report**
   - **Method**: `GET /api/me/center/get-computer-report`
   - **Description**: Fetches the computer report for the center.
   - **Service Call**: `centerService.getComputerReport()`
   - **Response**:
     - A `ResponseMessage` containing the `ComputerReportResponseDTO`. If there is an error retrieving the report, it returns the corresponding error message from `ErrorMessagesEnum.reportRetrieveError`.
     - **HTTP Status**: 200 OK
   
   ```java
   @RequestMapping(value = "/get-computer-report", method = RequestMethod.GET)
   public ResponseEntity getComputerReport() { ... }
   ```

#### 4. **Upload Computer Report**
   - **Method**: `GET /api/me/center/upload-computer-report`
   - **Description**: Uploads the computer report for the center. This method also handles exceptions and logs any issues that occur during the report upload process.
   - **Service Call**: `centerService.uploadComputerReport()`
   - **Response**:
     - A `ResponseMessage` is returned. If an exception occurs during the upload, the `APIUtil.parseException` method is used to handle the exception and return an error response.
     - **HTTP Status**: 200 OK
   
   ```java
   @RequestMapping(value = "/upload-computer-report", method = RequestMethod.GET)
   public ResponseEntity uploadComputerReport() { ... }
   ```

#### 5. **Get Center Report**
   - **Method**: `GET /api/me/center/get-center-report`
   - **Description**: Retrieves the center report.
   - **Service Call**: `centerService.getCenterReport()`
   - **Response**:
     - A `ResponseMessage` containing the `CenterReportResponseDTO`. In case of an error, the corresponding error message from `ErrorMessagesEnum.reportRetrieveError` is returned.
     - **HTTP Status**: 200 OK
   
   ```java
   @RequestMapping(value = "/get-center-report", method = RequestMethod.GET)
   public ResponseEntity getCenterReport() { ... }
   ```

#### 6. **Upload Center Report**
   - **Method**: `GET /api/me/center/upload-center-report`
   - **Description**: Uploads the center report for the exam center. This method also logs errors if they occur during the process.
   - **Service Call**: `centerService.uploadCenterReport()`
   - **Response**:
     - A `ResponseMessage` is returned. If any exception occurs during the process, it is logged, and the error response is returned via `APIUtil.parseException`.
     - **HTTP Status**: 200 OK
   
   ```java
   @RequestMapping(value = "/upload-center-report", method = RequestMethod.GET)
   public ResponseEntity uploadCenterReport() { ... }
   ```

#### 7. **Get Exam Report**
   - **Method**: `GET /api/me/center/get-exam-report`
   - **Description**: Retrieves the exam report for the center.
   - **Service Call**: `centerService.getExamReport()`
   - **Response**:
     - A `ResponseMessage` containing the `ExamReportResponseDTO`. If there is an error retrieving the report, it returns the corresponding error message from `ErrorMessagesEnum.reportRetrieveError`.
     - **HTTP Status**: 200 OK
   
   ```java
   @RequestMapping(value = "/get-exam-report", method = RequestMethod.GET)
   public ResponseEntity getExamReport() { ... }
   ```

---

### Error Handling

The controller is designed with error handling in mind:

- **Logging**: Any issues encountered during processing are logged using SLF4J, which helps with debugging and auditing.
- **APIUtil**: This utility class is responsible for parsing exceptions and creating default response messages based on the result of service calls.
