# Cloning Repositories

This documentation provides step-by-step instructions on how to clone the Autobot Candidate project repositories from Bitbucket. The project consists of two main components: the frontend and the backend. Ensure that you have Git installed on your machine and that you have access to the Bitbucket repositories before proceeding.

## Prerequisites

- **Git**: Ensure you have Git installed on your local machine. You can check if Git is installed by running the following command in your terminal:

  ```bash
  git --version
  ```

  If Git is not installed, you can download it from the [official Git website](https://git-scm.com/downloads).

- **Bitbucket Access**: You need access to the Bitbucket repositories. Ensure that your SSH key is added to your Bitbucket account for seamless cloning.

## Cloning the Repositories

### Step 1: Open Your Terminal

Open your terminal (Command Prompt, PowerShell, Git Bash, or your preferred terminal application).

### Step 2: Clone the Frontend Repository

To clone the Autobot Candidate Frontend repository, run the following command in your terminal:

```bash
git clone git@bitbucket.org:morgengreen1/autobot-candidate-frontend.git
```

This command will create a local copy of the frontend repository in a directory named `autobot-candidate-frontend`.

### Step 3: Clone the Backend Repository

Next, clone the Autobot Candidate Backend repository by running the following command:

```bash
git clone git@bitbucket.org:morgengreen1/autobot-candidate-backend.git
```

This command will create a local copy of the backend repository in a directory named `autobot-candidate-backend`.

## Step 4: Navigate to the Cloned Directories

Once the cloning process is complete, you can navigate to the respective directories using the following commands:

For the frontend:

```bash
cd autobot-candidate-frontend
```

For the backend:

```bash
cd autobot-candidate-backend
```

## Additional Notes

- To keep your local repositories updated with the latest changes from the remote repositories, you can run:

  ```bash
  git pull origin main
  ```

  Ensure you are in the correct directory (frontend or backend) before running this command.

- For further Git operations, consult the [Git documentation](https://git-scm.com/doc).
