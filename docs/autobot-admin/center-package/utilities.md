### Documentation for `VerifyCenterRequest` Class

The `VerifyCenterRequest` class is a simple Data Transfer Object (DTO) used to encapsulate the information required for verifying a center in the system. It is part of the `autobot.app.admin.center` package and is designed to handle verification requests that typically come from external sources such as API clients or UI forms.

---

#### **Class Declaration and Annotations**
```java
@Getter @Setter @NoArgsConstructor
@Data
@Builder
@AllArgsConstructor
public class VerifyCenterRequest {
```
- **`@Getter` and `@Setter`**: Lombok annotations that automatically generate getter and setter methods for all fields.
- **`@NoArgsConstructor`**: Generates a no-argument constructor, allowing the creation of empty `VerifyCenterRequest` objects.
- **`@Data`**: Combines the functionality of several Lombok annotations such as `@Getter`, `@Setter`, `@ToString`, `@EqualsAndHashCode`, and `@RequiredArgsConstructor`, making this class more concise and eliminating boilerplate code.
- **`@Builder`**: Enables the use of the builder pattern for constructing instances of `VerifyCenterRequest`. This allows for a more flexible and readable way of initializing the object.
- **`@AllArgsConstructor`**: Generates a constructor that accepts arguments for all fields, providing a convenient way to create fully populated instances.

---

#### **Fields**

- **`referenceNumber`**:
  - **Type**: `String`
  - **Description**: The reference number associated with the center. This field is likely used as a unique identifier when verifying the center in the system.
  
- **`appVersion`**:
  - **Type**: `String`
  - **Description**: The version of the application making the request. This field is useful for version control or ensuring compatibility between the request source and the backend.

---

#### **Constructors**

- **No-Argument Constructor** (`@NoArgsConstructor`):
  - Initializes an empty `VerifyCenterRequest` object with no values set.
  
- **All-Arguments Constructor** (`@AllArgsConstructor`):
  - Initializes a `VerifyCenterRequest` object with values for both `referenceNumber` and `appVersion`.

---

#### **Builder Pattern**
The `@Builder` annotation provides a way to construct a `VerifyCenterRequest` object in a flexible and readable manner.

##### **Example of Builder Usage**:
```java
VerifyCenterRequest request = VerifyCenterRequest.builder()
    .referenceNumber("ABC123")
    .appVersion("1.0.0")
    .build();
```

---

#### **Example Usage**

**Creating an object using the constructor**:
```java
VerifyCenterRequest request = new VerifyCenterRequest("ABC123", "1.0.0");
```

**Using the builder pattern**:
```java
VerifyCenterRequest request = VerifyCenterRequest.builder()
    .referenceNumber("DEF456")
    .appVersion("1.2.3")
    .build();
```

**Setting and getting values**:
```java
VerifyCenterRequest request = new VerifyCenterRequest();
request.setReferenceNumber("XYZ789");
request.setAppVersion("2.0.0");

String reference = request.getReferenceNumber();
String version = request.getAppVersion();
```
