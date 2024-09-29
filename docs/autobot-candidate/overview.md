# Overview of Autobot Candidate

![Candidate App](/img/autobot-canditate-screenshot.png)


The **Autobot Candidate** instance is a specialized component of the Autobot testing ecosystem designed to automate the testing process for candidates participating in JAMB exams. This instance is tailored specifically to manage candidate interactions with the exam environment, ensuring seamless testing, tracking, and submission processes. Autobot Candidate ensures that all connected systems are ready and properly configured for the exams, providing a reliable testing environment for both candidates and exam administrators.

### System Requirements for Autobot Candidate

Before installing or using the Autobot Candidate, certain system requirements must be met to ensure smooth operation. These requirements involve hardware specifications, operating system compatibility, and network configurations that guarantee optimal performance during the exam.

[Learn more ->](system-requirements)

### Test Taker Documentation

This section provides a detailed guide for candidates on how to interact with the Autobot Candidate system during the JAMB exam. The steps involved in preparing, starting, and completing the exam are outlined below:

- **Reading Instructions**: Before starting the exam, candidates must carefully read the provided instructions to familiarize themselves with the exam format, rules, and guidelines.
- **Starting the Exam**: This guide walks candidates through the process of logging into the system, verifying details, and initiating the exam when instructed by the administrator.
- **Taking the Exam**: During the exam, candidates will navigate through different questions, interact with the interface, and ensure their answers are properly recorded.
- **Submitting the Exam**: Once candidates have completed the exam, they will submit their answers through the Autobot Candidate interface. This ensures the secure and proper transfer of their responses for grading.

[Learn more ->](test-taker-documentation/overview)

### Exam Center Documentation

This section focuses on setting up and configuring the Autobot Candidate instance in an exam center. Administrators will find installation and connection instructions to help configure candidate systems effectively.

- **Installation for Autobot Candidate**: Step-by-step instructions for installing the Autobot Candidate software on candidate systems, covering different operating systems and prerequisites.
- **Connecting to Admin Server**: Once the installation is complete, candidate systems need to be connected to the Autobot Admin instance. This section details how to ensure a secure and stable connection.
- **Verifying Connection Information**: After establishing the connection, this section helps administrators and candidates verify that the candidate systems are correctly linked to the admin server, ensuring a smooth testing experience.

[Learn more ->](exam-center-documentation/overview)

### Developer Documentation

This section is aimed at developers working on or customizing the Autobot Candidate instance. It contains essential guides to set up the development environment, manage dependencies, and deploy the application for testing and distribution.

- **Installing Dependencies**: A guide on installing the necessary dependencies, libraries, and tools required for the Autobot Candidate instance to run smoothly.
- **Setting Up Development Environment**: Step-by-step instructions for setting up a local or remote development environment tailored to the Autobot Candidate instance.
- **Cloning Repositories**: Details on how to clone the Autobot Candidate Git repositories to start development or customization.
- **Running the App**: Instructions for running the Autobot Candidate application in development mode or during production-level testing.
- **Building for Distribution**: Information on building the Autobot Candidate application into distributable formats for installation across various environments.
- **App Components**: A breakdown of the different components and modules within the Autobot Candidate instance, providing a deeper understanding of its architecture and functionality.

[Learn more ->](developer-documentation/overview)


```md
Let's see how to [Create a page](./create-a-page.md).
```
[Create a page](/create-a-page)

## Code Blocks

Markdown code blocks are supported with Syntax highlighting.


```jsx title="src/components/HelloDocusaurus.js"
function HelloDocusaurus() {
  return <h1>Hello, Docusaurus!</h1>;
}
```

## MDX and React Components

[MDX](https://mdxjs.com/) can make your documentation more **interactive** and allows using any **React components inside Markdown**:

```jsx
export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '20px',
      color: '#fff',
      padding: '10px',
      cursor: 'pointer',
    }}
    onClick={() => {
      alert(`You clicked the color ${color} with label ${children}`)
    }}>
    {children}
  </span>
);

This is <Highlight color="#25c2a0">Docusaurus green</Highlight> !

This is <Highlight color="#1877F2">Facebook blue</Highlight> !
```

export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '20px',
      color: '#fff',
      padding: '10px',
      cursor: 'pointer',
    }}
    onClick={() => {
      alert(`You clicked the color ${color} with label ${children}`);
    }}>
    {children}
  </span>
);

This is <Highlight color="#25c2a0">Docusaurus green</Highlight> !

This is <Highlight color="#1877F2">Facebook blue</Highlight> !