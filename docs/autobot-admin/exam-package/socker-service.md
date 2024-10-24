### Documentation for WebSocket and Messaging Components

---

### **`CustomSocketMessage`**

This class represents a message structure that is used for WebSocket communication between the client and server. The message consists of two main fields: the type of the message (`payloadType`) and the actual content (`payload`).

#### Annotations:
- **`@Getter`**: Generates getter methods for the class fields.
- **`@Setter`**: Generates setter methods for the class fields.
- **`@NoArgsConstructor`**: Generates a no-argument constructor for the class.
- **`@JsonInclude(JsonInclude.Include.NON_NULL)`**: Ensures that only non-null fields are included in the serialized JSON.
- **`@JsonIgnoreProperties(ignoreUnknown = true)`**: Ignores unknown properties during JSON deserialization to prevent errors.

#### Fields:
- **`payloadType`**: A `String` that represents the type of message being sent (e.g., "START_EXAM_NOTIFICATION").
- **`payload`**: An `Object` that holds the actual data of the message.

---

### **`SocketMessagePayloadTypesEnum`**

This enum defines the possible types of WebSocket messages that can be exchanged between the server and client.

#### Enum Values:
- **`START_EXAM_NOTIFICATION`**: Indicates that a message related to starting an exam is being transmitted.
- **`STOP_EXAM_NOTIFICATION`**: Indicates that a message related to stopping an exam is being transmitted.

---

### **`WebConfig`**

This class configures Cross-Origin Resource Sharing (CORS) settings for the application. It ensures that the backend server allows requests from specified origins and controls what HTTP methods and headers are permissible.

#### Method:
- **`addCorsMappings(CorsRegistry registry)`**: Configures CORS settings for all endpoints (`"/**"`). This allows requests from any origin (`allowedOrigins("*")`) and specifies acceptable methods, headers, and the duration the settings are cached (`maxAge(3600)`).

#### CORS Settings:
- **Allowed Methods**: `POST`, `GET`, `DELETE`, `PUT`, `OPTIONS`
- **Allowed Headers**: `Accept`, `Content-Type`, `Origin`, `Authorization`, `X-Auth-Token`
- **Exposed Headers**: `X-Auth-Token`, `Authorization`

---

### **`WebSocketConfig`**

This class configures the WebSocket message broker and STOMP (Simple Text Oriented Messaging Protocol) endpoints for real-time communication between the client and server.

#### Annotations:
- **`@Configuration`**: Marks this class as a source of bean definitions.
- **`@EnableWebSocketMessageBroker`**: Enables WebSocket message handling backed by a message broker.

#### Methods:
- **`configureMessageBroker(MessageBrokerRegistry config)`**: Configures the message broker that routes messages between the server and connected clients.
    - **`enableSimpleBroker("/topic")`**: Defines `/topic` as the message destination prefix for broadcasting messages.
    - **`setHeartbeatValue(new long[] {10000, 20000})`**: Sets the interval for heartbeats to check the connection's health.
    - **`setTaskScheduler(new DefaultManagedTaskScheduler())`**: Provides a task scheduler for the heartbeat mechanism.
    - **`setApplicationDestinationPrefixes("/sock")`**: Sets the application destination prefix for sending messages from the client to the server.

- **`registerStompEndpoints(StompEndpointRegistry registry)`**: Registers WebSocket endpoints that clients will use to establish a connection.
    - **`addEndpoint("/sock-endpoint")`**: Defines `/sock-endpoint` as the WebSocket endpoint that clients will connect to.
    - **`setAllowedOrigins()`**: Specifies the allowed origins (e.g., `http://localhost:9090`, `http://localhost:4200`) from which clients can connect.
    - **`withSockJS()`**: Enables SockJS support as a fallback for clients that don't support WebSocket.

---

### Summary:

- **`CustomSocketMessage`** defines the structure for messages exchanged via WebSocket.
- **`SocketMessagePayloadTypesEnum`** lists the types of payloads that can be sent.
- **`WebConfig`** sets up CORS configurations, allowing requests from multiple origins with specific methods and headers.
- **`WebSocketConfig`** configures the WebSocket and STOMP protocol, enabling real-time communication between the server and clients through defined endpoints.