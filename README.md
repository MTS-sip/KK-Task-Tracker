# Task Tracker

Links 🔴 [Deployed Render Link](https://fourteen-march-one.onrender.com/), and [GitHub Repository](https://github.com/MTS-sip/KK-Task-Tracker/tree/main)🔴

## Description

Application authenticates with JSON Web Tokens (JWTs), which allows secure and scalable approach for verifying various users and their distinguishable attributes.

## Table of Contents

Usage
Images
License
Technology
Contributing
Storycar insurance
README
Usage & Testing

## Functionality of Deployed URL:

-- Can be tested [@ Render](https://fourteen-march-one.onrender.com/)

For login in: Seeded Users
{ username: 'JollyGuru', password: 'password' }
{ username: 'SunnyScribe', password: 'password' }
{ username: 'RadiantComet', password: 'password' }

## License

This project is licensed under the MIT
{License Badge}

## Technology

Key technologies used for development:

- **VS Code**: IDE
- **Render**: Cloud Application Platform
- **GitHub**: Version control and repository hosting
- **Vite**: Local development server
- **Node.js**: JavaScript runtime environment
- **TypeScript**: JavaScript with static type definitions
- **NPM**: Package manager for JavaScript
- **CoPilot**: AI-assisted coding tool for GitHub
- **HTML**: Markup language for structuring web content

### Contributing

- **MTS-Sip**: .[Michael S](https://github.com/MTS-sip)
- **Dev/Starter Code**: RU BCS
- **Tutoring**: React syntax, CORS client/server scenarios

#### User Story

- AS a developer
- I WANT a Kanban board with a secure login page
- SO THAT I can securely access and manage my work tasks

#### Acceptance Criteria

- GIVEN a Kanban board with a secure login page
- WHEN I load the login page
- THEN I am presented with form inputs for username and password
- WHEN I enter my valid username and password
- THEN I am authenticated using JSON Web Tokens (JWT) and redirected to the main Kanban board page
- WHEN I enter an invalid username or password
- THEN I am presented with an error message indicating that the credentials are incorrect
- WHEN I successfully log in
- THEN a JWT is stored securely in the client's local storage for subsequent authenticated requests
- WHEN I log out
- THEN the JWT is removed from the client's local storage and I am redirected to the login page
- I try to access the Kanban board page without being authenticated
- THEN I am redirected to the login page
- WHEN I remain inactive for a defined period
- THEN my session expires, the JWT is invalidated, and I am redirected to the login page upon my next action
