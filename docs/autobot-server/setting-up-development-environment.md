# Setting Up Development Environment

To set up a development environment for the Autobot Server, follow these steps:

#### Prerequisites

Before you begin, ensure that you have the following software installed on your machine:

1. **Java Development Kit (JDK) 11 or 17**:
   - Download from [AdoptOpenJDK](https://adoptopenjdk.net/) or [Oracle's official website](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html).
   - Set the `JAVA_HOME` environment variable to point to your JDK installation.

2. **Apache Maven**:
   - Download and install Maven from [Maven's official website](https://maven.apache.org/download.cgi).
   - Add Maven to your system's PATH. For example, on macOS or Linux, you can add the following line to your `.bash_profile` or `.bashrc`:
     ```bash
     export PATH=/path/to/maven/bin:$PATH
     ```

3. **Docker**:
   - Download and install Docker from the [Docker official website](https://www.docker.com/get-started). Docker is required for running AWS SAM CLI locally.

4. **AWS SAM CLI**:
   - Install the AWS SAM CLI by following the [installation guide](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html).
   - Ensure that Python 3.6 or later is installed, as it is a prerequisite for AWS SAM.

5. **Node.js and NPM** (for the frontend):
   - Download Node.js from the [Node.js official website](https://nodejs.org/).
   - NPM is included with Node.js, which allows you to manage JavaScript packages.

6. **Angular CLI** (for the frontend):
   - Install Angular CLI globally using npm:
     ```bash
     npm install -g @angular/cli
     ```

#### Setting Up AWS SAM for Local Lambda Testing

1. **Initialize a SAM Project**:
   - Navigate to your backend project directory.
   - Run the following command to create a SAM template:
     ```bash
     sam init
     ```

2. **Add Your Lambda Function**:
   - Inside the SAM project directory, create a new Lambda function by placing the handler files as needed.

3. **Build the SAM Application**:
   - Run the build command to prepare the application for testing:
     ```bash
     sam build
     ```

4. **Run Your Lambda Function Locally**:
   - To test your function locally, use the following command:
     ```bash
     sam local invoke FunctionName
     ```
   - Replace `FunctionName` with the name of your Lambda function defined in your SAM template.

5. **Run the SAM Local API Gateway**:
   - To test your API locally, run:
     ```bash
     sam local start-api
     ```
   - This command starts a local API Gateway that you can use to test your endpoints.

#### Additional Methods for Testing Lambda Functions Locally

- **Using LocalStack**: LocalStack is a fully functional local AWS cloud stack that allows you to run and test AWS services locally.
  - Install LocalStack using Docker:
    ```bash
    docker run -d -p 4566:4566 localstack/localstack
    ```

- **Using Docker**: If your Lambda function has dependencies or specific runtime requirements, you can create a Docker image that mimics the Lambda execution environment.

- **Unit Testing**: Use JUnit or other testing frameworks to create unit tests for your Lambda functions. You can set up mocks for AWS services using libraries like [Mockito](https://site.mockito.org/) to simulate AWS services in your tests.


### Additonal note on AWS SAM (Serverless Application Model)

AWS Serverless Application Model (SAM) is an open-source framework designed for building serverless applications on AWS. It simplifies the process of defining serverless applications using a declarative syntax and offers a set of tools to help with the development, testing, and deployment of serverless applications. This overview covers its components, benefits, and how to use it effectively.

#### Key Features of AWS SAM

1. **Declarative Syntax**: SAM uses a simplified syntax based on YAML to define serverless applications. This makes it easier to describe AWS resources such as Lambda functions, API Gateway APIs, DynamoDB tables, and more.

2. **Built-in Best Practices**: SAM encourages best practices in serverless architecture, including defining APIs, event sources, and permissions.

3. **Local Development and Testing**: SAM provides a local development environment that allows developers to build and test their applications without deploying them to AWS. This includes the ability to invoke Lambda functions locally and run APIs through a local API Gateway.

4. **Integration with AWS Services**: SAM integrates seamlessly with other AWS services, enabling you to easily connect your Lambda functions to services like S3, DynamoDB, and SNS.

5. **CI/CD Integration**: SAM supports continuous integration and deployment pipelines, making it easier to automate the deployment of serverless applications.

6. **CloudFormation Compatible**: SAM is built on top of AWS CloudFormation, which means you can use existing CloudFormation capabilities alongside SAM to manage your infrastructure.

#### Setting Up AWS SAM

To set up AWS SAM on your machine, follow these steps:

1. **Install AWS CLI**: Ensure you have the AWS Command Line Interface (CLI) installed and configured with your AWS credentials.

2. **Install the AWS SAM CLI**: Follow the [installation guide](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html) for your operating system.

3. **Install Docker**: Install Docker, as SAM uses Docker to simulate the Lambda execution environment for local testing.

4. **Set Up Your Development Environment**:
   - Ensure you have Python 3.6 or later installed, as it is required for SAM.
   - You may also want to install Node.js and npm for building frontend components if applicable.

#### Creating a Serverless Application

1. **Initialize a New SAM Application**:
   ```bash
   sam init
   ```
   - You will be prompted to choose a runtime (e.g., Python, Node.js) and a template (basic or event-driven).

2. **Define Your Application**:
   - In the `template.yaml` file, define your AWS resources. A typical SAM template includes:
     - Lambda functions
     - API Gateway routes
     - Event sources (e.g., S3 events, DynamoDB streams)
     - Permissions (IAM roles and policies)

   Example of a simple SAM template:
   ```yaml
   AWSTemplateFormatVersion: '2010-09-09'
   Transform: AWS::Serverless-2016-10-31
   Description: A simple serverless application

   Resources:
     HelloWorldFunction:
       Type: AWS::Serverless::Function
       Properties:
         Handler: app.handler
         Runtime: nodejs14.x
         Events:
           Api:
             Type: Api
             Properties:
               Path: /hello
               Method: get
   ```

3. **Build Your Application**:
   ```bash
   sam build
   ```
   - This command packages your application and prepares it for deployment.

#### Local Development and Testing

1. **Run Locally**:
   - To invoke a Lambda function locally, use:
   ```bash
   sam local invoke HelloWorldFunction
   ```

2. **Start API Gateway Locally**:
   - To run your API locally:
   ```bash
   sam local start-api
   ```
   - You can then test your API using tools like Postman or CURL.

3. **Unit Testing**:
   - Create unit tests for your Lambda functions. You can use frameworks like JUnit for Java or Mocha for Node.js to test your functions. SAM allows you to run these tests locally as well.

#### Deployment

1. **Deploy Your Application**:
   - Deploy your application to AWS with the following command:
   ```bash
   sam deploy --guided
   ```
   - The guided deployment will prompt you for stack name, AWS region, and other parameters.

2. **Manage Your Stack**:
   - Once deployed, you can manage your stack through the AWS Management Console or using AWS CLI commands.

3. **Updating Your Application**:
   - After making changes, rebuild and redeploy using the same `sam deploy` command.

#### Best Practices

- **Use Environment Variables**: Store configuration settings as environment variables in your Lambda functions to enhance security and flexibility.
- **Limit Lambda Function Permissions**: Apply the principle of least privilege when assigning IAM roles to your Lambda functions.
- **Monitor and Log**: Use AWS CloudWatch for logging and monitoring your Lambda functions. Set up alarms for error rates and function timeouts.
- **Versioning**: Use versioning for your Lambda functions to roll back to a previous version if needed.
