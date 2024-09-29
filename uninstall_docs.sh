#!/bin/bash

# Function to remove files and directories for autobot-candidate
remove_autobot_candidate() {
    echo "Removing autobot-candidate documentation..."
    # Remove individual markdown files
    rm -f docs/autobot-candidate/overview.md
    rm -f docs/autobot-candidate/system-requirements.md

    # Remove files from test-taker-documentation
    rm -f docs/autobot-candidate/test-taker-documentation/reading-instructions.md
    rm -f docs/autobot-candidate/test-taker-documentation/starting-exam.md
    rm -f docs/autobot-candidate/test-taker-documentation/taking-exam.md
    rm -f docs/autobot-candidate/test-taker-documentation/submitting-exam.md

    # Remove files from exam-center-documentation
    rm -f docs/autobot-candidate/exam-center-documentation/installation.md
    rm -f docs/autobot-candidate/exam-center-documentation/connecting-to-admin.md
    rm -f docs/autobot-candidate/exam-center-documentation/verifying-connection.md

    # Remove files from developer-documentation
    rm -f docs/autobot-candidate/developer-documentation/installing-dependencies.md
    rm -f docs/autobot-candidate/developer-documentation/setting-up-development-environment.md
    rm -f docs/autobot-candidate/developer-documentation/cloning-repos.md
    rm -f docs/autobot-candidate/developer-documentation/running-app.md
    rm -f docs/autobot-candidate/developer-documentation/building-for-distribution.md
    rm -f docs/autobot-candidate/developer-documentation/app-components.md

    # Remove directories if they are empty
    rmdir docs/autobot-candidate/test-taker-documentation 2>/dev/null
    rmdir docs/autobot-candidate/exam-center-documentation 2>/dev/null
    rmdir docs/autobot-candidate/developer-documentation 2>/dev/null
    rmdir docs/autobot-candidate 2>/dev/null
}

# Function to remove files and directories for autobot-admin
remove_autobot_admin() {
    echo "Removing autobot-admin documentation..."
    # Remove individual markdown files
    rm -f docs/autobot-admin/overview.md
    rm -f docs/autobot-admin/system-requirements.md

    # Remove files from exam-center-documentation
    rm -f docs/autobot-admin/exam-center-documentation/installation.md
    rm -f docs/autobot-admin/exam-center-documentation/register-center.md
    rm -f docs/autobot-admin/exam-center-documentation/create-exam.md
    rm -f docs/autobot-admin/exam-center-documentation/connect-candidate-systems.md
    rm -f docs/autobot-admin/exam-center-documentation/start-exam.md
    rm -f docs/autobot-admin/exam-center-documentation/monitor-exam.md
    rm -f docs/autobot-admin/exam-center-documentation/upload-reports.md

    # Remove files from developer-documentation
    rm -f docs/autobot-admin/developer-documentation/installing-dependencies.md
    rm -f docs/autobot-admin/developer-documentation/setting-up-development-environment.md
    rm -f docs/autobot-admin/developer-documentation/cloning-repos.md
    rm -f docs/autobot-admin/developer-documentation/running-app.md
    rm -f docs/autobot-admin/developer-documentation/building-for-distribution.md
    rm -f docs/autobot-admin/developer-documentation/app-components.md

    # Remove directories if they are empty
    rmdir docs/autobot-admin/exam-center-documentation 2>/dev/null
    rmdir docs/autobot-admin/developer-documentation 2>/dev/null
    rmdir docs/autobot-admin 2>/dev/null
}

# Function to remove files and directories for autobot-server
remove_autobot_server() {
    echo "Removing autobot-server documentation..."
    # Remove individual markdown files
    rm -f docs/autobot-server/overview.md
    rm -f docs/autobot-server/system-requirements.md

    # Remove files from administration
    rm -f docs/autobot-server/administration/dashboard-overview.md
    rm -f docs/autobot-server/administration/uploaded-proposed-centers.md
    rm -f docs/autobot-server/administration/registered-vs-non-registered.md
    rm -f docs/autobot-server/administration/autotested-vs-not-autotested.md
    rm -f docs/autobot-server/administration/centres-list.md
    rm -f docs/autobot-server/administration/standalone-centres.md
    rm -f docs/autobot-server/administration/zero-client-centres.md
    rm -f docs/autobot-server/administration/mixed-centres.md
    rm -f docs/autobot-server/administration/computer-specifications.md
    rm -f docs/autobot-server/administration/centre-performance.md

    # Remove files from exams-reporting
    rm -f docs/autobot-server/administration/exams-reporting/total-number-of-reports.md
    rm -f docs/autobot-server/administration/exams-reporting/computer-reports-summary.md

    # Remove files from developer-documentation
    rm -f docs/autobot-server/developer-documentation/installing-dependencies.md
    rm -f docs/autobot-server/developer-documentation/setting-up-development-environment.md
    rm -f docs/autobot-server/developer-documentation/cloning-repos.md
    rm -f docs/autobot-server/developer-documentation/running-app.md
    rm -f docs/autobot-server/developer-documentation/deploying-to-lambda.md
    rm -f docs/autobot-server/developer-documentation/app-components.md

    # Remove directories if they are empty
    rmdir docs/autobot-server/administration/exams-reporting 2>/dev/null
    rmdir docs/autobot-server/administration 2>/dev/null
    rmdir docs/autobot-server/developer-documentation 2>/dev/null
    rmdir docs/autobot-server 2>/dev/null
}

# Execute the functions to remove the files
remove_autobot_candidate
remove_autobot_admin
remove_autobot_server

echo "Uninstallation of Autobot documentation completed."
