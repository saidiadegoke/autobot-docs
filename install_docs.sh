#!/bin/bash

# Function to create files and directories with base content
create_docs_structure() {
    # Create base directories
    mkdir -p docs/autobot-candidate/test-taker-documentation
    mkdir -p docs/autobot-candidate/exam-center-documentation
    mkdir -p docs/autobot-candidate/developer-documentation

    mkdir -p docs/autobot-admin/exam-center-documentation
    mkdir -p docs/autobot-admin/developer-documentation

    mkdir -p docs/autobot-server/administration
    mkdir -p docs/autobot-server/administration/exams-reporting
    mkdir -p docs/autobot-server/developer-documentation

    # Create markdown files for autobot-candidate
    echo "# Overview of Autobot Candidate" > docs/autobot-candidate/overview.md
    echo "# System Requirements for Autobot Candidate" > docs/autobot-candidate/system-requirements.md

    echo "# Reading Instructions" > docs/autobot-candidate/test-taker-documentation/reading-instructions.md
    echo "# Starting the Exam" > docs/autobot-candidate/test-taker-documentation/starting-exam.md
    echo "# Taking the Exam" > docs/autobot-candidate/test-taker-documentation/taking-exam.md
    echo "# Submitting the Exam" > docs/autobot-candidate/test-taker-documentation/submitting-exam.md

    echo "# Installation for Autobot Candidate" > docs/autobot-candidate/exam-center-documentation/installation.md
    echo "# Connecting to Admin Server" > docs/autobot-candidate/exam-center-documentation/connecting-to-admin.md
    echo "# Verifying Connection Information" > docs/autobot-candidate/exam-center-documentation/verifying-connection.md

    echo "# Installing Dependencies" > docs/autobot-candidate/developer-documentation/installing-dependencies.md
    echo "# Setting Up Development Environment" > docs/autobot-candidate/developer-documentation/setting-up-development-environment.md
    echo "# Cloning Repositories" > docs/autobot-candidate/developer-documentation/cloning-repos.md
    echo "# Running the App" > docs/autobot-candidate/developer-documentation/running-app.md
    echo "# Building for Distribution" > docs/autobot-candidate/developer-documentation/building-for-distribution.md
    echo "# App Components" > docs/autobot-candidate/developer-documentation/app-components.md

    # Create markdown files for autobot-admin
    echo "# Overview of Autobot Admin" > docs/autobot-admin/overview.md
    echo "# System Requirements for Autobot Admin" > docs/autobot-admin/system-requirements.md

    echo "# Installation for Autobot Admin" > docs/autobot-admin/exam-center-documentation/installation.md
    echo "# Registering the Center" > docs/autobot-admin/exam-center-documentation/register-center.md
    echo "# Creating an Exam" > docs/autobot-admin/exam-center-documentation/create-exam.md
    echo "# Connecting Candidate Systems" > docs/autobot-admin/exam-center-documentation/connect-candidate-systems.md
    echo "# Starting the Exam" > docs/autobot-admin/exam-center-documentation/start-exam.md
    echo "# Monitoring the Exam" > docs/autobot-admin/exam-center-documentation/monitor-exam.md
    echo "# Uploading Reports" > docs/autobot-admin/exam-center-documentation/upload-reports.md

    echo "# Installing Dependencies" > docs/autobot-admin/developer-documentation/installing-dependencies.md
    echo "# Setting Up Development Environment" > docs/autobot-admin/developer-documentation/setting-up-development-environment.md
    echo "# Cloning Repositories" > docs/autobot-admin/developer-documentation/cloning-repos.md
    echo "# Running the App" > docs/autobot-admin/developer-documentation/running-app.md
    echo "# Building for Distribution" > docs/autobot-admin/developer-documentation/building-for-distribution.md
    echo "# App Components" > docs/autobot-admin/developer-documentation/app-components.md

    # Create markdown files for autobot-server
    echo "# Overview of Autobot Server" > docs/autobot-server/overview.md
    echo "# System Requirements for Autobot Server" > docs/autobot-server/system-requirements.md

    echo "# Dashboard Overview" > docs/autobot-server/administration/dashboard-overview.md
    echo "# Uploaded Proposed Centers" > docs/autobot-server/administration/uploaded-proposed-centers.md
    echo "# Registered vs Non-Registered Centers" > docs/autobot-server/administration/registered-vs-non-registered.md
    echo "# Autotested vs Not Autotested Centers" > docs/autobot-server/administration/autotested-vs-not-autotested.md
    echo "# Centers List" > docs/autobot-server/administration/centres-list.md
    echo "# Standalone Centers" > docs/autobot-server/administration/standalone-centres.md
    echo "# Zero Client Centers" > docs/autobot-server/administration/zero-client-centres.md
    echo "# Mixed Centers" > docs/autobot-server/administration/mixed-centres.md
    echo "# Computer Specifications" > docs/autobot-server/administration/computer-specifications.md
    echo "# Center Performance" > docs/autobot-server/administration/centre-performance.md

    echo "# Total Number of Reports" > docs/autobot-server/administration/exams-reporting/total-number-of-reports.md
    echo "# Computer Reports Summary" > docs/autobot-server/administration/exams-reporting/computer-reports-summary.md

    echo "# Installing Dependencies" > docs/autobot-server/developer-documentation/installing-dependencies.md
    echo "# Setting Up Development Environment" > docs/autobot-server/developer-documentation/setting-up-development-environment.md
    echo "# Cloning Repositories" > docs/autobot-server/developer-documentation/cloning-repos.md
    echo "# Running the App" > docs/autobot-server/developer-documentation/running-app.md
    echo "# Deploying to Lambda" > docs/autobot-server/developer-documentation/deploying-to-lambda.md
    echo "# App Components" > docs/autobot-server/developer-documentation/app-components.md
}

# Execute the function
create_docs_structure

echo "Documentation folder structure created successfully with base content."
