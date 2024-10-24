# Configuring Environment Variables for Autobot Application

To ensure that the Autobot application functions correctly, environment variables must be configured either locally in the AWS SAM environment or on AWS Lambda when deployed. This document outlines the necessary environment variables and how to configure them.

## Required Environment Variables

The following environment variables are essential for the backend to function properly:

| Variable Name                  | Description                                               | Example Value                                                 |
|--------------------------------|-----------------------------------------------------------|--------------------------------------------------------------|
| `DB_USER`                      | Database username                                         | `postgres`                                                  |
| `DB_PASS`                      | Database password                                         | `postgres`                                                  |
| `DB_PWD`                       | Another database password (if applicable)                | `postgres`                                                  |
| `APP_VERSION`                  | Version of the application                                | `1.2.4`                                                    |
| `EXTERNAL_API_BASE_URL`        | Base URL for the external API                            | `http://centres.jamb.gov.ng`                               |
| `EXTERNAL_API_KEY`             | API key for accessing the external API                   | `6******769475945******11cfc777107****`                 |
| `EXTERNAL_API_TIMEOUT`         | Timeout duration for the external API requests (in ms)  | `5000`                                                     |
| `DB_ENDPOINT`                  | Database connection string                                | `192.168.100.191:5437/autobot_server_local_db?useTimezone=true&serverTimezone=UTC` |

## Configuring Environment Variables Locally in SAM

1. **Create or Edit the SAM Configuration File:**
   Navigate to the backend directory where the `template.yaml` file is located. Create a new file named `env.json` (or any name you prefer) to store your environment variables.

   Example `env.json`:
   ```json
   {
     "DB_USER": "postgres",
     "DB_PASS": "postgres",
     "DB_PWD": "postgres",
     "APP_VERSION": "1.2.4",
     "EXTERNAL_API_BASE_URL": "http://centres.jamb.gov.ng",
     "EXTERNAL_API_KEY": "6db109%9277288888888*****86533c711cfc",
     "EXTERNAL_API_TIMEOUT": "5000",
     "DB_ENDPOINT": "192.168.100.191:5437/autobot_server_local_db?useTimezone=true&serverTimezone=UTC"
   }
   ```

2. **Reference the Environment Variables in Your Template File:**
   Modify your `template.yaml` file to include the environment variables. Here's an example of how to set them under your function configuration:
   ```yaml
   Resources:
     YourFunction:
       Type: AWS::Serverless::Function
       Properties:
         Handler: your.handler
         Runtime: java11
         Environment:
           DB_USER: !Ref DB_USER
           DB_PASS: !Ref DB_PASS
           DB_PWD: !Ref DB_PWD
           APP_VERSION: !Ref APP_VERSION
           EXTERNAL_API_BASE_URL: !Ref EXTERNAL_API_BASE_URL
           EXTERNAL_API_KEY: !Ref EXTERNAL_API_KEY
           EXTERNAL_API_TIMEOUT: !Ref EXTERNAL_API_TIMEOUT
           DB_ENDPOINT: !Ref DB_ENDPOINT
   ```

3. **Start SAM Locally with the Environment Variables:**
   Run the SAM CLI command to start your API, specifying the environment variable file:
   ```bash
   sam local start-api --env-vars env.json
   ```

## Configuring Environment Variables on AWS Lambda

1. **Log in to the AWS Management Console:**
   Go to the AWS Lambda service.

2. **Select Your Lambda Function:**
   Find and select the function you want to configure.

3. **Edit the Environment Variables:**
   Under the "Configuration" tab, select "Environment variables." Click on "Edit" and add the variables as key-value pairs.

   Example:
   - Key: `DB_USER`  Value: `postgres`
   - Key: `DB_PASS`  Value: `postgres`
   - ... (add all variables listed above)

4. **Save Changes:**
   After entering all the required environment variables, make sure to save the changes.
