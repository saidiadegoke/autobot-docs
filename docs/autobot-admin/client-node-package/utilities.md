### Documentation for `NodeStatusesEnum` and `ThinClientDBResult`

This document provides an overview of the **`NodeStatusesEnum`** and **`ThinClientDBResult`** classes used in the `autobot.app.admin.clientnode` package.

---

#### **`NodeStatusesEnum`**

- **Purpose**: Enum that defines the possible statuses of a client node in the system.
  
- **Values**:
  - **`CONNECTED`**: Represents a client node that is currently connected to the system.
  - **`DISCONNECTED`**: Represents a client node that is currently disconnected from the system.

- **Use Case**:
  - This enum is used to track and manage the status of nodes in the system. For example, a node might be marked as "DISCONNECTED" during system shutdown or network issues and "CONNECTED" when it successfully registers with the system.

##### **Example Usage**:
```java
NodeStatusesEnum status = NodeStatusesEnum.CONNECTED;
if (status == NodeStatusesEnum.DISCONNECTED) {
    // Handle disconnected state
}
```

---

#### **`ThinClientDBResult`**

- **Purpose**: A data object (DTO) used to represent the result of a database query that counts the occurrences of IP addresses among the client nodes.

- **Fields**:
  - **`ipAddress`**: The IP address of the client node.
  - **`count`**: The number of occurrences of the IP address (i.e., how many nodes are using this IP).

- **Constructors**:
  - **No-Arg Constructor**: Initializes an empty `ThinClientDBResult` object.
  - **All-Args Constructor**: Initializes a `ThinClientDBResult` object with both `ipAddress` and `count`.

- **Annotations**:
  - **`@Data`**: Lombok annotation that generates standard methods such as getters, setters, `toString()`, `equals()`, and `hashCode()`.
  - **`@AllArgsConstructor`**: Generates a constructor with arguments for all fields (`ipAddress`, `count`).
  - **`@NoArgsConstructor`**: Generates a no-argument constructor.
  - **`@Getter` and `@Setter`**: Additional Lombok annotations to automatically generate getter and setter methods.

##### **Example Usage**:
```java
ThinClientDBResult result = new ThinClientDBResult("192.168.1.10", 5);
System.out.println("IP Address: " + result.getIpAddress() + ", Count: " + result.getCount());
```
