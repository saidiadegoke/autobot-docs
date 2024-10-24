### Documentation: `ClientNodeEntity` Class

The `ClientNodeEntity` class represents a client node (typically a computer or server) in the system. It is mapped to a database table through JPA annotations and holds various attributes related to hardware, software, and network specifications. This entity also tracks the node’s UUID, registration information, and status. The class uses Hibernate for automatic creation and update timestamps and Lombok for generating boilerplate code like getters and setters.

---

#### **Class Declaration and Annotations**
```java
@Entity
@Getter @Setter
//@Table( name = "client_node_entity" )
public class ClientNodeEntity {
```
- **`@Entity`**: Marks the class as a JPA entity, which will be mapped to a table in the database.
- **`@Getter` and `@Setter`**: Lombok annotations to automatically generate getter and setter methods for all fields.
- **(Optional) `@Table(name = "client_node_entity")`**: This annotation is commented out but, if used, would specify the name of the table as `client_node_entity` in the database.

---

#### **Primary Key**
```java
@NonNull
@Id
@GeneratedValue(strategy = GenerationType.AUTO)
private Long id;
```
- **`@Id`**: Marks `id` as the primary key of the entity.
- **`@GeneratedValue(strategy = GenerationType.AUTO)`**: Specifies that the primary key will be auto-generated.
- **`@NonNull`**: Ensures that the `id` cannot be null when working with this entity.

---

#### **Node and System Information**
The following fields capture detailed information about the hardware and software specifications of the client node:

```java
private String ipAddress;
private String sysModel;
private String sysSerial;
private String sysOEM;
private String osDistribution;
private String osArchitecture;
private String osHostname;
private String cpuManufacturer;
private String cpuBrand;
private int cpuProcessors;
private int cpuPhysicalCores;
private int cpuCores;
private Long cpuSpeed;
private Long cpuMaxSpeed;
private Long memSize;
private Long memSizeTotalAvailable;
```
- **`ipAddress`**: The IP address of the client node.
- **`sysModel`**: The system model identifier.
- **`sysSerial`**: The system serial number.
- **`sysOEM`**: The Original Equipment Manufacturer (OEM) name.
- **`osDistribution`**, **`osArchitecture`**, **`osHostname`**: Information about the operating system, including its distribution (e.g., Ubuntu), architecture (e.g., 64-bit), and hostname.
- **`cpuManufacturer`** and **`cpuBrand`**: CPU details such as the manufacturer and brand (e.g., Intel, AMD).
- **CPU Details**: Includes fields for CPU processors, physical cores, total cores, and speed metrics like `cpuSpeed` and `cpuMaxSpeed`.

---

#### **Formatted Strings for CPU, Memory, and Disk Info**
```java
private String memSizeStr;
private String memSizeTotalAvailableStr;
private String cpuSpeedStr;
private String cpuMaxSpeedStr;
private String dskType;
private String dskSerial;
private String dskSize;
private String dskSizeStr;
```
- These fields store formatted string representations of memory size, CPU speed, and disk size. This allows for more human-readable formats that are typically used when presenting system details in reports or logs.

---

#### **Network Information**
```java
private String netInterface;
private String netSpeed;
private Long netSpeedLong;
private String netMacAddress;
```
- **`netInterface`**: The type of network interface (e.g., Ethernet, Wi-Fi).
- **`netSpeed`** and **`netSpeedLong`**: The speed of the network interface, stored as both a string and a numeric value.
- **`netMacAddress`**: The MAC address of the node’s network interface.

---

#### **UUID and Registration**
```java
@Column(unique = true)
private String nodeUUID;
private String uuidUniqueId;
private String uuidThinId;
```
- **`nodeUUID`**: The unique identifier for the node, which is marked as unique using `@Column(unique = true)`.
- **`uuidUniqueId`** and **`uuidThinId`**: Additional UUID fields, possibly used for identifying the node in different contexts or services.

```java
private String candidateName;
private String registrationNumber;
private String status;
```
- **`candidateName`**: The name assigned to the node (possibly linked to a user or candidate in a testing environment).
- **`registrationNumber`**: The node’s registration number.
- **`status`**: The current status of the node, such as "CONNECTED" or "DISCONNECTED".

---

#### **Additional Hardware Information**
```java
private String motherBoardSerial;
private String cpuProcessorID;
```
- **`motherBoardSerial`**: Serial number of the motherboard.
- **`cpuProcessorID`**: Processor ID for the CPU, providing additional hardware identification.

---

#### **Timestamps**
```java
@CreationTimestamp
private Date createdAt;

@UpdateTimestamp
private Date updatedAt;
```
- **`@CreationTimestamp`**: Automatically sets the value of `createdAt` to the current timestamp when the entity is first persisted.
- **`@UpdateTimestamp`**: Automatically updates the value of `updatedAt` whenever the entity is updated.

