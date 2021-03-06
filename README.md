# Social Network
![badge](https://img.shields.io/badge/MIT-License-blue.svg)

## Description

An API for a social network web application where users can share their thoughts, react to friend's thoughts, and create a friend list. It uses NoSQL database so that the website can handle large amounts of unstructured data.

## Table of Contents 

- [Installation](#installation)
- [Usage](#usage)
- [Technologies used](#technologies-used)
- [License](#license)
- [How to Contribute](#how-to-contribute)
- [Questions](#questions)

## Installation

### Clone the repository 
git clone git@github.com:marycpriyanka/Social-Network.git
   
### Install Dependencies
- All NPM packages required for this application (Express, Mongoose) are already listed as dependencies in the package.json file. Run the command 'npm i' in your terminal at the root directory level to install the packages.
- Ensure that you have Node.js installed on your machine, The application will be invoked by entering 'node server.js' in the command line.

### Start Application
You can test the endpoints on Postman or Insomnia using http://localhost.3000/.

## Usage

Use Postman or Insomnia to test the API and to create your own data. 

Use /api/users to test all user routes.

Use /api/users/:userId/friends/:friendId to add or remove a friend to a user's friend list.

Use /api/thoughts to test all thought routes.

Use /api/thoughts/:thoughtId/reactions to create a reaction stored in a single thought's reactions array field.

Use /api/thoughts/:thoughtId/reactions/:reactionId to pull and remove a reaction by the reaction's reactionId value.

Find a walkthrough video that demonstrates the functionality of the Social Network API in the link below:

https://drive.google.com/file/d/1iE1k0vEU_VFA6DE6H1MAr0P8WAhZKwS3/view?usp=sharing

##  Technologies used

Node.js, Express.js, Mongoose package, MongoDB, JavaScript

## License

Social Network is available under the MIT License.

## How to Contribute

Contributions and ideas are welcome. Before submitting an issue, please take a moment to look over the contributing guidelines in https://www.contributor-covenant.org/ . Before submitting pull requests, ensure the following:

Fork the repo and create your branch from devlop. Test your code.

## Questions

https://github.com/marcypriyanka

For any addditional questions, reach me at marycpriyanka@gmail.com.
