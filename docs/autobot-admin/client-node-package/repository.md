### Documentation: `ClientNodeRepository` Interface

The `ClientNodeRepository` interface extends Spring Data JPA's `JpaRepository` and `JpaSpecificationExecutor` interfaces, providing CRUD operations and query execution for the `ClientNodeEntity`. This repository handles database operations related to client nodes, including custom query methods and batch updates.

---

#### **Interface Declaration**
```java
public interface ClientNodeRepository extends JpaRepository<ClientNodeEntity, Long>, JpaSpecificationExecutor<ClientNodeEntity> {
```
- **`JpaRepository<ClientNodeEntity, Long>`**: Provides standard CRUD operations (e.g., `save()`, `findAll()`, `deleteById()`) for the `ClientNodeEntity`. The primary key is of type `Long`.
- **`JpaSpecificationExecutor<ClientNodeEntity>`**: Enables execution of dynamic queries using specifications, allowing for more complex filtering and querying.

---

#### **Custom Query Methods**

1. **`ClientNodeEntity findByIpAddress(String ipAddress);`**
   - **Purpose**: Finds a `ClientNodeEntity` based on the node's `ipAddress`.
   - **Returns**: A single `ClientNodeEntity` matching the provided IP address.

2. **`ClientNodeEntity findByNodeUUID(String nodeUUID);`**
   - **Purpose**: Retrieves a `ClientNodeEntity` by its unique `nodeUUID`.
   - **Returns**: The entity that matches the given `nodeUUID`.

3. **`long countAllByNetSpeedLongLessThan(Long value);`**
   - **Purpose**: Counts how many client nodes have a network speed (`netSpeedLong`) lower than a specified value.
   - **Returns**: The number of nodes where `netSpeedLong` is below the given value.

4. **`long countAllByMemSizeLessThan(Long value);`**
   - **Purpose**: Counts how many client nodes have a memory size (`memSize`) less than a specified value.
   - **Returns**: The number of nodes with memory size below the given value.

5. **`long countAllByMemSizeTotalAvailableLessThan(Long value);`**
   - **Purpose**: Counts how many client nodes have a total available memory (`memSizeTotalAvailable`) less than a specified value.
   - **Returns**: The number of nodes with available memory below the given value.

6. **`long countAllByUuidThinIdIsNotNull();`**
   - **Purpose**: Counts all nodes that have a non-null `uuidThinId`. This method is used to find how many nodes have a valid thin client UUID.
   - **Returns**: The count of nodes with a non-null `uuidThinId`.

7. **`long countAllByStatus(String status);`**
   - **Purpose**: Counts all nodes that match the provided `status` (e.g., "CONNECTED", "DISCONNECTED").
   - **Returns**: The number of nodes with the given status.

---

#### **Custom Queries**

1. **`@Query("SELECT ipAddress, count(1) as count FROM ClientNodeEntity GROUP BY ipAddress")`**
   - **Purpose**: A custom query to count the occurrences of client nodes by their IP addresses.
   - **Returns**: A list of `ThinClientDBResult` objects that contain each unique IP address and the count of nodes with that IP.

2. **`@Transactional @Modifying @Query("UPDATE ClientNodeEntity e SET e.status='DISCONNECTED'")`**
   - **Purpose**: This query updates the `status` field of all `ClientNodeEntity` records, setting their status to `"DISCONNECTED"`.
   - **Annotations**:
     - **`@Transactional`**: Ensures that the operation is executed within a transactional context.
     - **`@Modifying`**: Indicates that this query is modifying data (i.e., performing an `UPDATE`).
   - **Returns**: Nothing (void).

---

### Summary of Key Functionalities:

- **Standard CRUD Operations**: By extending `JpaRepository`, this repository automatically inherits the standard operations for working with `ClientNodeEntity` objects, such as saving, deleting, and finding entities.
  
- **Custom Query Methods**:
  - The repository includes methods for finding entities by IP address and `nodeUUID`, as well as counting nodes based on network speed, memory size, and status.
  
- **Batch Update**:
  - The `setAllAsDisconnected()` method allows for batch updating of the `status` field, marking all nodes as "DISCONNECTED". This is useful for resetting the status of nodes, such as during a system reboot or restart.

- **Custom Grouped Query**:
  - The `countByIPAddress()` query groups client nodes by their IP address and returns the count for each unique IP. This is useful for detecting IP address conflicts or tracking node distribution by network.
