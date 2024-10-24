### Documentation for Repositories

---

### **`ExamDefaultRepository`**

This repository interface extends `JpaRepository` and `JpaSpecificationExecutor` to provide CRUD operations and specification-based querying for the `ExamDefaultEntity`.

#### Key Inheritance:

- **`JpaRepository<ExamDefaultEntity, Long>`**: Provides basic CRUD operations like `save`, `findById`, `findAll`, `delete`, etc., for `ExamDefaultEntity`. The primary key type is `Long`.
- **`JpaSpecificationExecutor<ExamDefaultEntity>`**: Allows the execution of queries using specifications, which enable complex queries based on criteria without writing explicit query methods.

---

### **`ExamSessionNodeRepository`**

This repository interface provides custom query methods and transactional updates for `ExamSessionNodeEntity`. It handles operations related to exam session nodes, including querying by node and exam UUIDs, counting submissions, and updating node statuses.

#### Key Methods:

- **`findByExamUUID(String uuid)`**: Fetches the first `ExamSessionNodeEntity` with a matching exam UUID.
- **`findByNodeUUID(String uuid)`**: Fetches the first `ExamSessionNodeEntity` with a matching node UUID.
- **`findFirstByNodeUUID(String uuid)`**: Finds the first node by its UUID.
- **`findByNodeUUIDAndExamUUID(String nodeUUID, String examUUID)`**: Fetches the node with matching `nodeUUID` and `examUUID`.
- **`countAllByCpuUsageGreaterThan(int value)`**: Counts all nodes where CPU usage is greater than a specified value.
- **`countAllByStartStatusEquals(String value)`**: Counts nodes that have a specific start status.
- **`findFirstByOrderBySubmissionCountDesc()`**: Finds the node with the highest submission count.
- **`updateAllSetConnectedStatusWhereSubmissionCountLessThan(String status, int submissionCount)`**: Updates the connected status for nodes where the submission count is less than the given value.
- **`updateAllSetConnectedStatusWhereUpdatedAtLessThan(String status, Date updatedAt)`**: Updates the connected status for nodes that haven’t been updated since a given timestamp.

#### Key Annotations:

- **`@Transactional`**: Ensures that multiple operations within a method are executed in a single transaction.
- **`@Modifying`**: Marks query methods that modify data (e.g., `UPDATE` or `DELETE` queries).
- **`@Query`**: Allows writing custom SQL or JPQL queries for specific operations (e.g., updating node connection status).

---

### **`ExamSessionRepository`**

This repository interface provides methods to interact with `ExamSessionEntity`, including querying for specific exam sessions, marking exams as completed, and updating or closing open exams.

#### Key Methods:

- **`findByExamUUID(String uuid)`**: Fetches the exam session by its UUID.
- **`findFirstByStatus(String status)`**: Fetches the first exam session with a given status.
- **`findFirstByOrderByIdDesc()`**: Fetches the most recently created exam session.
- **`saveAndFlush(ExamSessionEntity entity)`**: Saves the entity and immediately flushes changes to the database.
- **`updateOlderExamsDisconnectCount()`**: Sets the `disconnectedNodes` count to zero for older exams where the value is null.
- **`updateOlderExamsTerminateCount()`**: Sets the `totalTerminated` count to zero for older exams where the value is null.
- **`closeAnyOpenExam()`**: Closes any exam session with a status of `PENDING` or `STARTED` by marking it as `DISCONTINUED`.
- **`markAsCompleted(String examUUID)`**: Updates the status of an exam to `COMPLETED` based on its UUID.

#### Key Annotations:

- **`@Transactional`**: Ensures that query methods are executed within a transaction.
- **`@Modifying`**: Marks query methods that modify data (e.g., `UPDATE` queries).
- **`@Query`**: Allows the use of custom JPQL queries for specific operations, such as closing open exams or updating their statuses.

---

### Summary:

These repository interfaces extend `JpaRepository` to provide basic CRUD operations and also contain custom queries for more complex use cases, such as updating connected statuses, counting submissions, and marking exam sessions as completed. The use of `@Transactional` and `@Modifying` ensures that database updates are handled safely and efficiently within transactions.