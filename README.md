# Task Tracker - verify push

Links 🔴 Deployed App on Render, and GitHub Repository 🔴
Render Web Service Host (Render link)

GitHub Repository (GitHub Repository link)

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

Functionality of deployed URL can be tested @ Render

Application code used for deployment: MTS GitHub Repo

Run npm install, npm start []

## Images

Mock up image 1

Mock up image 2

## License

This project is licensed under the MIT
{License Badge}

## Technology

Key technologies used for development:

VS Code: IDE (VSC)
Render: Cloud Application Platform (Render)
JWT (JWT)
Insomnia (Insomnia)
GitHub (Github)
Vite: Local Dev Server (Vite)
Node.js (node.js)
Typescript: JavaScript w/syntax for types (Typescript)
NPM: Package manager for js npm
CoPilot CoPilot for GitHub:
HTML HTML
Contributing
MTS-Sip Michael S.

Dev/Starter Code, RU BCS

## User Story

AS A member of an agile team
I WANT a Kanban board with a secure login page
SO THAT I can securely access and manage my work tasks

## Acceptance Criteria

GIVEN a Kanban board with a secure login page
WHEN I load the login page
THEN I am presented with form inputs for username and password
WHEN I enter my valid username and password
THEN I am authenticated using JSON Web Tokens (JWT) and redirected to the main Kanban board page
WHEN I enter an invalid username or password
THEN I am presented with an error message indicating that the credentials are incorrect
WHEN I successfully log in
THEN a JWT is stored securely in the client's local storage for subsequent authenticated requests
WHEN I log out
THEN the JWT is removed from the client's local storage and I am redirected to the login page
WHEN I try to access the Kanban board page without being authenticated
THEN I am redirected to the login page
WHEN I remain inactive for a defined period
THEN my session expires, the JWT is invalidated, and I am redirected to the login page upon my next action

README
(link)
